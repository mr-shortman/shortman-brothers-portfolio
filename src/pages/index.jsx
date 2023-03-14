import React, { Suspense } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";

import { client } from "../../../.tina/__generated__/client";
import { SectionBlocks, Layout } from "../components";

const index = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <SectionBlocks blocks={data.page?.sectionBlocks} />
    </Layout>
  );
};

export default index;

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
