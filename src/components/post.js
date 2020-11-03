/** @jsx jsx */
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import { jsx, Container, Grid, Styled } from "theme-ui"

import SEO from "./seo"
import Tags from "./tags"
import Layout from "./layout"

const Post = ({
  data: {
    blogPost: post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage?.childImageSharp?.fluid.src ??
        post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    <Container as="main" sx={{ maxWidth: "blogPostContainer" }}>
      <article sx={{ fontSize: 3 }}>
        <header sx={{ mt: [5, 7] }}>
          <Tags tags={post.tags} />
          <Styled.h1 sx={{ mt: 3 }}>{post.title}</Styled.h1>
          <Meta date={post.date} sx={{ mt: 3 }} />
        </header>
        <section sx={{ mt: [5, 6] }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Container>
  </Layout>
)

const Meta = ({ date, ...props }) => {
  const data = useStaticQuery(graphql`
    query PostMetaQuery {
      site {
        siteMetadata {
          author
        }
      }
      avatar: file(
        absolutePath: { regex: "assets/avatar.(jpeg|jpg|gif|png)/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data

  return (
    <Grid
      columns="min-content auto"
      sx={{
        gridGap: 3,
        alignItems: "center",
      }}
      {...props}
    >
      <Image
        sx={{
          width: 50,
          borderRadius: "50%",
        }}
        fluid={avatar.childImageSharp.fluid}
        alt={author}
      />
      <div>
        <span rel="author" sx={{ fontSize: 2 }}>
          {author}
        </span>
        <time
          sx={{
            display: "block",
            fontSize: 1,
            letterSpacing: "loose",
            color: "muted",
          }}
        >
          {date}
        </time>
      </div>
    </Grid>
  )
}

export default Post
