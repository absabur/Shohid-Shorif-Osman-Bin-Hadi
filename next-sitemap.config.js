/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sharif-osman-hadi.netlify.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // অন্য নিয়ম যোগ করতে পারেন এখানে
    ],
  },
};
