import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Aman Nagarkar | ML Engineer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Aman Nagarkar | ML Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aman Nagarkar | ML Engineer" />
        <meta name="description" content="Hey! I'm Aman Nagarkar, and I'm a ML engineer with a masters in Computer Science." />

        <meta property="og:title" content="Aman Nagarkar | ML Engineer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://amannagarkar.github.io/portfolio" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="Hey! I'm Aman Nagarkar, and I'm a ML engineer with a masters in Computer Science." />

        {/* <meta itemprop="name" content="Aman Nagarkar | ML Engineer"/>
        <meta itemprop="description" content="Hey! I'm Aman Nagarkar, and I'm a ML engineer with a masters in Computer Science."/>
        <meta itemprop="image" content="https://deverajc.com/screenshot.png"/> */}
      </Head>
      <Home />
    </>
  );
}
