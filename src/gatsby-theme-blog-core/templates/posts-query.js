import { graphql } from "gatsby"

import PostsPage from "../components/posts"

export default PostsPage

export const query = graphql`
  query CustomPostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 240, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        imageAlt
      }
    }
  }
`
