import useSWR from 'swr';
import fetcher from 'lib/fetcher';

const PageViews = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);

  return <>{data?.total ? `${data.total} views` : `–––`}</>;
};

export default PageViews;
