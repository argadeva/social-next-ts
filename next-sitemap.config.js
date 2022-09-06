/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://argadeva.herokuapp.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  sitemapSize: 7000,
}