import React from 'react';
import { useQuery } from 'react-query';
import Wrapper from '../styles/Trending';
import { client } from '../utils/api-client';
import Skeleton from '../skeletons/TrendingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import TrendingCard from '../components/TrendingCard';

function Trending() {
  const {
    data: videos,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery('TrendingVideos,', () =>
    client.get('/videos/trending').then((res) => res.data.videos)
  );

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper>
      {isSuccess
        ? videos.map((video) => <TrendingCard key={video.id} video={video} />)
        : null}
    </Wrapper>
  );
}

export default Trending;
