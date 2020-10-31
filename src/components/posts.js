/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import SEO from "./seo"
import Bio from "./bio"
import Layout from "./layout"
import PostLink from "./post-link"

const Posts = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <Container>
      <Bio />
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          columnGap: 6,
          rowGap: 7,
        }}
      >
        {data.allBlogPost.nodes.map((post, index) => (
          <PostLink
            key={post.id}
            index={index}
            slug={post.slug}
            image={post.image}
            imageAlt={post.imageAlt}
            tags={post.tags}
            title={post.title}
            preview={post.excerpt}
            date={post.date}
          />
        ))}
      </div>
    </Container>
  </Layout>
)

export default Posts
