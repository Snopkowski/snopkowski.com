import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import { Spinner } from '@chakra-ui/react';

const PageViews = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);

  return <>{data?.total ? `${data.total} views` : <Spinner size='xs' />}</>;
};

export default PageViews;
