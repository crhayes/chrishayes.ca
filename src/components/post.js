import React from "react"

import SEO from "./seo"

const Post = ({ data: { blogPost: post } }) => (
  <>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage?.childImageSharp?.fluid.src ??
        post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    Post
  </>
)

export default Post
