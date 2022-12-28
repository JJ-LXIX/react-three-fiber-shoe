import type { NextPage } from "next";
import Head from "next/head";
import ProductCard from "../Components/ProductCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoe R3F Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductCard />
      </main>
    </div>
  );
};

export default Home;
