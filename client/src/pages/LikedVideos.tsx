import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { client } from '../utils/api-client';
import { ChannelIcon } from '../components/Icons';
import ErrorMessage from '../components/ErrorMessage';
import SignUpCard from '../components/SignUpCard';
import TrendingCard from '../components/TrendingCard';
import Skeleton from '../skeletons/TrendingSkeleton';
import Wrapper from '../styles/Trending';

function LikedVideos() {
  const user = useAuth();
  const { data: videos, isLoading, isError, isSuccess, error } = useQuery(
    'likedVideos,',
    () => client.get('/users/liked-videos').then((res) => res.data.videos),
    {
      enabled: user,
    }
  );
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  if (!user) {
    return (
      <SignUpCard
        icon={<ChannelIcon />}
        title="Save everything you like"
        description="Videos that you have liked will show up here"
      />
    );
  }

  return (
    <Wrapper>
      <h2>Liked Videos</h2>
      {isSuccess && !videos.length && (
        <p className="secondary">
          Videos that you have liked will show up here.
        </p>
      )}

      {isSuccess
        ? videos.map((video) => (
            <Link key={video.id} to={`/watch/${video.id}`}>
              <TrendingCard video={video} />
            </Link>
          ))
        : null}
    </Wrapper>
  );
}

export default LikedVideos;
