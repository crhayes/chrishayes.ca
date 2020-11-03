/** @jsx jsx */
import Image from "gatsby-image"
import { jsx, Styled } from "theme-ui"

import Tags from "./tags"

const PostLink = ({
  index,
  slug,
  image,
  imageAlt,
  tags,
  title,
  preview,
  date,
}) => (
  <article
    id={slug.replace(/\//g, "")}
    sx={{
      animation: `0.2s ${index * 0.02}s fadeInUp backwards`,
      transition: "transform 0.2s",
      ...(image ?? {
        position: "relative",
        "&::before": {
          content: '" "',
          display: "block",
          position: "absolute",
          top: "0px",
          width: "64px",
          height: "2px",
          backgroundColor: "primary",
          zIndex: -1,
        },
      }),
    }}
  >
    {image && (
      <Styled.a href={slug}>
        <Image
          sx={{ borderRadius: 4 }}
          fluid={image.childImageSharp.fluid}
          alt={imageAlt || title}
          width="100%"
          height="190"
        />
      </Styled.a>
    )}
    <Tags tags={tags} sx={{ minHeight: "1.5em", mt: 3 }} />
    <Styled.a href={slug}>
      <Styled.h2 sx={{ mt: 1, fontSize: image ? 4 : 5 }}>{title}</Styled.h2>
    </Styled.a>
    <Styled.a href={slug} sx={{ mt: 3 }}>
      <p sx={{ color: "muted" }}>{preview}</p>
    </Styled.a>
    <time
      sx={{
        mt: 3,
        fontFamily: "body",
        fontSize: 1,
        color: "muted",
      }}
    >
      {date}
    </time>
  </article>
)

export default PostLink
