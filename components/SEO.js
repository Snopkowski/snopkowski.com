import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({ title, description, image, type }) {
  const router = useRouter();

  const defaults = {
    title: 'Wojciech Snopkowski - Developer',
    description: `Front-end developer, JavaScript enthusiast, JamStack proponent.`,
    image: 'https://snopkowski.com/static/images/share.png',
    type: 'website',
  };

  const meta = {
    title: title ? `${title} - Wojciech Sopkowski` : defaults.title,
    description: description ? description : defaults.description,
    image: image ? image : defaults.image,
    type: type ? type : defaults.type,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta
        property='og:url'
        content={`https://snopkowski.com${router.asPath}`}
      />
      <link rel='canonical' href={`https://snopkowski.com${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Wojciech Snopkowski' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@w_snopkowski' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <meta property='article:published_time' content={meta.date} />
      )}
    </Head>
  );
}
