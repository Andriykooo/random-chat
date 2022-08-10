import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Random chat</title>
        <meta name='description' content='Random chat' />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;
