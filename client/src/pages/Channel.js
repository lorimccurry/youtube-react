// @ts-nocheck
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { VidIcon } from '../components/Icons';
import SignUpCard from '../components/SignUpCard';
import Wrapper from '../styles/Channel';
import { client, toggleSubscribeUser } from '../utils/api-client';
import Skeleton from '../skeletons/ChannelSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import { useAuth } from '../context/auth-context';
import EditProfile from '../components/EditProfile';
import Button from '../styles/Button';
import ChannelTabVideo from '../components/ChannelTabVideo';
import ChannelTabChannels from '../components/ChannelTabChannels';
import ChannelTabAbout from '../components/ChannelTabAbout';
import useAuthAction from '../hooks/use-auth-action';

const activeTabStyle = {
  borderBottom: '2px solid white',
  color: 'white',
};

function Channel() {
  const [tab, setTab] = React.useState('VIDEOS');
  const user = useAuth();
  const { channelId } = useParams();
  const handleAuthAction = useAuthAction();

  const loggedInUserId = user ? user.id : undefined;
  const userId = channelId ?? loggedInUserId;

  const { data: channel, isLoading, isError, error } = useQuery(
    ['Channel', userId],
    () => client.get(`/users/${userId}`).then((res) => res.data.user),
    {
      enabled: userId,
    }
  );

  function handleToggleSubscribe() {
    handleAuthAction(toggleSubscribeUser, channel.id);
  }

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  if (!user) {
    return (
      <SignUpCard
        icon={<VidIcon />}
        title="Manage your videos"
        description="Sign in to upload and manage your videos, pre-recorded or live"
      />
    );
  }

  return (
    <Wrapper editProfile={channel.isMe}>
      <div className="cover">
        <img src={channel.cover} alt="channel-cover" />
      </div>

      <div className="header-tabs">
        <div className="header">
          <div className="flex-row">
            <img
              className="avatar lg"
              src={channel.avatar}
              alt={`${channel.username} avatar`}
            />
            <div>
              <h3>{channel.username}</h3>
              <span className="secondary">
                {channel.subscribersCount} subscribers
              </span>
            </div>
          </div>
          {channel.isMe && <EditProfile profile={channel} />}

          {!channel.isMe && !channel.isSubscribed && (
            <Button onClick={handleToggleSubscribe}>Subscribe</Button>
          )}

          {!channel.isMe && channel.isSubscribed && (
            <Button grey onClick={handleToggleSubscribe}>
              Subscribed
            </Button>
          )}
        </div>

        <div className="tabs">
          <ul className="secondary">
            <li
              style={tab === 'VIDEOS' ? activeTabStyle : {}}
              onClick={() => setTab('VIDEOS')}
            >
              Videos
            </li>
            <li
              style={tab === 'CHANNELS' ? activeTabStyle : {}}
              onClick={() => setTab('CHANNELS')}
            >
              Channels
            </li>
            <li
              style={tab === 'ABOUT' ? activeTabStyle : {}}
              onClick={() => setTab('ABOUT')}
            >
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="tab">
        {tab === 'VIDEOS' && <ChannelTabVideo videos={channel.videos} />}
        {tab === 'CHANNELS' && (
          <ChannelTabChannels channels={channel.channels} />
        )}
        {tab === 'ABOUT' && <ChannelTabAbout about={channel.about} />}
      </div>
    </Wrapper>
  );
}

export default Channel;
