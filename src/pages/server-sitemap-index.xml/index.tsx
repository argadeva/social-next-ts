import { GetServerSideProps } from 'next'
import { getServerSideSitemapIndex } from 'next-sitemap'
import { gql } from '@apollo/client';
import apolloClient from '@/utils/apollo-client';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = apolloClient();
  const { data } = await client.query({
    query: gql`
      query Posts {
        getPosts(limit: 3) {
          id
        }
      }
    `,
  });

  const blogPagePath = data?.getPosts.map((i:{ id: string }) => ([process.env.baseURI, "blog/", i.id].join("")));

  return getServerSideSitemapIndex(ctx, [
    process.env.baseURI,
    ...blogPagePath
  ]);
}

export default function SitemapIndex() {}