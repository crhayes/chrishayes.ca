/** @jsx jsx */
import { jsx } from "theme-ui"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(QUERY)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["auto", "min-content auto"],
        columnGap: 5,
        alignItems: "center",
        justifyItems: "center",
        maxWidth: [null, "70%"],
        my: [6, 7],
        mx: "auto",
      }}
    >
      <div>
        <Image
          sx={{
            width: 100,
            borderRadius: "50%",
          }}
          fluid={avatar.childImageSharp.fluid}
          alt={author}
        />
      </div>
      <p sx={{ fontSize: [2, 3], textAlign: ["center", "left"] }}>
        Written by <strong>Chris Hayes</strong>, a passionate{" "}
        <strong>Software Engineer</strong> building great user experiences
        with quality code.
      </p>
    </div>
  )
}

const QUERY = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "assets/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Bio
