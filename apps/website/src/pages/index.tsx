import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>labXD - Laboratory for Experience Development</title>
      </Head>

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-bold bg-indigo-50 text-indigo-700 text-xl p-8 ring ring-indigo-700 rounded-sm">
          <div>Welcome to</div>
          <div className="text-lg">labXD</div>
        </h1>
      </main>
    </>
  );
};

export default Home;
