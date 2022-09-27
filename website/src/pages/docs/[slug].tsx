import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export default function DocPage({ post }: any) {

  return (
    <>
      <h1>{post}</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      post: params?.slug + "####",
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [
      { params: { slug: "getting-started" } },
      { params: { slug: "a" } },
      { params: { slug: "b" } },
    ], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
