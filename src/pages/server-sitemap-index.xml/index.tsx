import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'
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

  const projectsPagePath = data?.getPosts.map((i:{ id: string }) => ([process.env.baseURI, "projects/", i.id].join("")));

  return getServerSideSitemap(ctx, [
    process.env.baseURI,
    ...projectsPagePath
  ]);
}

export default function SitemapIndex() {}