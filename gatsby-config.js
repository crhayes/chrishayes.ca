module.exports = {
  siteMetadata: {
    title: `Chris Hayes`,
    author: `Chris Hayes`,
    description: `Chris Hayes is a Senior Software Engineer living and working in Toronto, ON, specialized in building web applications. He employs a strong product focus and a keen eye for good design and UX.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HW72EJBH38"],
      },
    },
    `gatsby-theme-blog-core`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: false,
        prismPreset: `github`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-preload-fonts`,
  ],
}
