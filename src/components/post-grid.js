/** @jsx jsx */
import { jsx } from "theme-ui"

import PostLink from "./post-link"

const Posts = ({ posts }) => (
  <div
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      columnGap: 6,
      rowGap: 7,
    }}
  >
    {posts.map((post, index) => (
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
)

export default Posts
