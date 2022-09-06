import { GetServerSideProps } from 'next';
import fs from "fs";
import { gql } from '@apollo/client';
import apolloClient from '@/utils/apollo-client';

const Sitemap = () => {};

export const getServerSideProps : GetServerSideProps = async ({ res }) => {
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


  const staticPages = fs
  .readdirSync("src/pages")
  .filter((staticPage) => {
    return ![
      "blog",
      "_app.tsx",
      "_document.tsx",
      "sitemap.xml.tsx",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${process.env.baseURI + staticPagePath.slice(0, -4)}`;
  });
  

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${process.env.baseURI}</loc>
        <lastmod>2022-09-06T06:31:19.243Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </sitemap>
      ${staticPages
        .map((url) => {
          return `
            <sitemap>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </sitemap>
          `;
        })
        .join("")}
        ${data?.getPosts.map((i: { id: string }) => {
          return `
            <sitemap>
              <loc>${[process.env.baseURI,"blog/",i.id].join("")}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </sitemap>
          `;
        }) .join("")}
    </sitemapindex>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;