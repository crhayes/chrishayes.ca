import React from "react"
import { Container } from "theme-ui"

import SEO from "./seo"
import Bio from "./bio"
import Layout from "./layout"
import PostGrid from "./post-grid"

const Posts = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <Container>
      <Bio />
      <PostGrid posts={data.allBlogPost.nodes} />
    </Container>
  </Layout>
)

export default Posts
