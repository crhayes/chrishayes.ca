/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFoundPage = ({ data: { file } }) => (
  <Layout>
    <Container
      sx={{
        display: "flex",
        mt: [5, 7],
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <SEO title="Not of this World" />
      <div sx={{ width: [300, 400], mx: "auto" }}>
        <Img fluid={file.childImageSharp.fluid} />
        <Styled.a
          href="https://icons8.com/"
          rel="noopener"
          target="_blank"
          sx={{ mt: 4, fontSize: 0, color: "muted", border: "none" }}
        >
          Image courtesy of Icons8
        </Styled.a>
      </div>
      <Styled.h1 sx={{ mt: 5 }}>404</Styled.h1>
      <Styled.h2 sx={{ mt: 2 }}>
        What you're looking for is not of this world.
      </Styled.h2>
    </Container>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
