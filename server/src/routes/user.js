import { PrismaClient } from "@prisma/client";
import express from "express";
import { protect, getAuthUser } from '../middleware/authorization';
import { getVideoViews } from './video';

const prisma = new PrismaClient();

function getUserRoutes() {
  const router = express.Router();

  router.get('/liked-videos', protect, getLikedVideos);
  router.get('/history', protect, getHistory);
  router.get('/:userId', getAuthUser, getProfile);
  router.get('/:userId/toggle-subscribe', protect, toggleSubscribe);
  router.get('/subscriptions', protect, getFeed);
  router.get('/search', getAuthUser, searchUser);
  router.get('/', protect, getRecommendedChannels);

  return router;
}

async function getLikedVideos(req, res) {
  const model = 'videoLike';
  await getVideos(model, req, res);
}

async function getHistory(req, res) {
  const model = 'view';
  await getVideos(model, req, res);
}

async function getVideos(model, req, res) {
  let videoRelations = await prisma[model].findMany({
    where: {
      userId: req.user.id,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const videoIds = videoRelations.map(videoLike => {return videoLike.videoId});

  let videos = await prisma.video.findMany({
    where: {
      id: {
        in: videoIds
      }
    },
    include: {
      user: true
    }
  });

  if (!videos.length) {
    return res.status(200).json({videos});
  }

  videos = await getVideoViews(videos);

  return res.status(200).json({videos});
}

async function toggleSubscribe(req, res, next) {
  if (req.user.id === req.params.userId) {
    return next({
      message: "You can't subscribe to your own channel.",
      statusCode: 400
    });
  }

  const targetUser = await prisma.user.findUnique({
    where: {
      id: req.params.userId
    }
  });

  if (!targetUser) {
    return next({
      message: `No user found with id: ${req.params.userId}`,
      statusCode: 400
    });
  }

  const isSubscribed = await prisma.subscription.findFirst({
    where: {
      subscriberId: {
        equals: req.user.id
      },
      subscribedToId: {
        equals: req.params.userId
      }
    }
  });

  if (isSubscribed) {
    await prisma.subscription.delete({
      where: {
        id: isSubscribed.id
      }
    });
  } else {
    await prisma.subscription.create({
      data: {
        subscriber: {
          connect: {
            id: req.user.id
          }
        },
        subscribedTo: {
          connect: {
            id: req.params.userId
          }
        }
      }
    })
  }

  res.status(200).json({});
}

async function getFeed(req, res, next) {
  const subscriptions = await prisma.subscription.findMany({
    where: {
      subscriberId: {
        equals: req.user.id
      }
    }
  });

  if (!subscriptions.length) {
    return next({
      message: `No subscriptions found for user: ${req.user.id}`,
      statusCode: 400
    })
  }

  const subscribedToIds = subscriptions.map(subscription => subscription.subscribedToId);

  let feed = await prisma.video.findMany({
    where: {
      userId: {
        in: subscribedToIds
      }
    },
    include: {
      user: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  if (!feed.length) {
    return res.status(200).json({feed});
  }

  feed = await getVideoViews(feed);

  return res.status(200).json({feed});
}

async function searchUser(req, res, next) {
  if (!req.query.query) {
    return next({
      message: 'Please enter a search query',
      statusCode: 400
    })
  }

  const users = await prisma.user.findMany({
    where: {
      username: {
        contains: req.query.query,
        mode: 'insensitive'
      }
    }
  });

  if (!users.length) {
    return res.status(200).json({ users });
  }

  for (const user of users) {
    const subscribersCount = await prisma.subscription.count({
      where: {
        subscribedToId: {
          equals: user.id
        }
      }
    });

    const videosCount = await prisma.video.count({
      where: {
        userId: user.id
      }
    });

    let isMe = false;
    let isSubscribed = false;

    if (req.user) {
      isMe = req.user.id === user.id;
      isSubscribed = await prisma.subscription.findFirst({
        where: {
          AND: {
            subscriberId: {
              equals: req.user.id
            },
            subscribedToId: {
              equals: user.id
            }
          }
        }
      });

      user.subscribersCount = subscribersCount;
      user.videosCount = videosCount;
      user.isMe = isMe;
      user.isSubscribed = Boolean(isSubscribed);
    }
  }

  return res.status(200).json({users});
}

async function getRecommendedChannels(req, res) {
  const channels = await prisma.user.findMany({
    where: {
      id: {
        not: req.user.id
      }
    },
    take: 10
  });

  if (!channels.length) {
    return res.status(200).json({channels});
  }

  for (const channel of channels) {
    const subscribersCount = await prisma.subscription.count({
      where: {
        subscribedToId: {
          equals: channel.id
        }
      }
    });

    const videosCount = await prisma.video.count({
      where: {
        userId: channel.id
      }
    });

    const isSubscribed = await prisma.subscription.findFirst({
      where: {
        AND: {
          subscriberId: {
            equals: req.user.id
          },
          subscribedToId: {
            equals: channel.id
          }
        }
      }
    });

    channel.subscribersCount = subscribersCount;
    channel.videosCount = videosCount;
    channel.isSubscribed = Boolean(isSubscribed);
  }

  res.status(200).json({channels});
}

async function getProfile(req, res, next) {
  let user = await prisma.user.findUnique({
    where: {
      id: req.params.userId
    }
  });
  if (!user) {
    return next({
      message: `No user found with id: ${req.params.userId}`,
      statusCode: 400
    });
  }

  const subscribersCount = await prisma.subscription.count({
    where: {
      subscribedToId: {
        equals: user.id
      }
    }
  });

  const videosCount = await prisma.video.count({
    where: {
      userId: user.id
    }
  });

  let isMe = false;
  let isSubscribed = false;

  if (req.user) {
    isMe = req.user.id === user.id;
    isSubscribed = await prisma.subscription.findFirst({
      where: {
        AND: {
          subscriberId: {
            equals: req.user.id
          },
          subscribedToId: {
            equals: user.id
          }
        }
      }
    });
  }
  const subscriptions = await prisma.subscription.findMany({
    where: {
      subscriberId: {
        equals: user.id
      }
    }
  });

  const subscribedToIds = subscriptions.map(subscription => subscription.subscribedToId);

  const channels = await prisma.user.findMany({
    where: {
      id: {
        in: subscribedToIds
      }
    }
  })

  for (const channel of channels) {
    const subscribersCount = await prisma.subscription.count({
      where: {
        subscribedToId: {
          equals: channel.id
        }
      }
    });

    channel.subscribersCount = subscribersCount;
  }

  const videos = await prisma.video.findMany({
    where: {
      userId: {
        equals: user.id
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  user = {
    ...user,
    subscribersCount,
    isMe,
    channels,
    videos,
    isSubscribed: Boolean(isSubscribed),
  }

  if (!videos.length) {
    return res.status(200).json({user});
  }

  user.videos = await getVideoViews(videos);

  return res.status(200).json({user});
}

async function editUser(req, res) {}

export { getUserRoutes };
