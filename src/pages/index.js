/** @jsx jsx */
import React from "react"
import { jsx, Container, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Link from "../components/link"
import PostGrid from "../components/post-grid"
import SEO from "../components/seo"
import Skills from "../components/skills"

const fadeInUpAnimation =
  "1s cubic-bezier(.19, .84, .61, 1.02) fadeInUp backwards"

const Home = () => (
  <Layout>
    <SEO title="Chris Hayes" titleTemplate="%s — Senior Software Engineer" />
    <Container as="main">
      <section
        sx={{
          mt: [5, 9],
          fontSize: [3, 4],
        }}
      >
        <Styled.h1
          sx={{
            mt: 0,
            mb: 5,
            fontSize: [6, 9],
            lineHeight: "1.125",
            animation: fadeInUpAnimation,
            animationDelay: `${1 * 0.1}s`,
          }}
        >
          I am a self-taught software engineer with a passion for the web{" "}
          <span role="img" aria-label="Emoji of a man with a laptop (i.e. me!)">
            👨🏼‍💻
          </span>
        </Styled.h1>
        <p
          sx={{
            display: ["inline", "block"],
            my: 0,
            color: "muted",
            animation: fadeInUpAnimation,
            animationDelay: `${2 * 0.1}s`,
          }}
        >
          Hailing from Toronto, Ontario, I specialize in building frontend web
          applications.
        </p>{" "}
        <p
          sx={{
            display: ["inline", "block"],
            my: 0,
            color: "muted",
            animation: fadeInUpAnimation,
            animationDelay: `${2 * 0.1}s`,
          }}
        >
          I employ a strong product focus and a keen eye for good design and UX.
        </p>{" "}
        <p
          sx={{
            display: ["inline", "block"],
            my: 0,
            color: "muted",
            animation: fadeInUpAnimation,
            animationDelay: `${2 * 0.1}s`,
          }}
        >
          I write well tested code with a focus on clarity and cleanliness.
        </p>
      </section>
      <section
        sx={{
          mt: [5, 9],
          animation: fadeInUpAnimation,
          animationDelay: `${3 * 0.1}s`,
        }}
      >
        <Styled.h2 sx={{ mb: -2, fontSize: 5 }}>
          Skills that Pay the Bills
        </Styled.h2>
        <p sx={{ mb: 5, color: "muted" }}>
          Languages, libraries, tools and techniques I utilize on a regular
          basis.
        </p>
        <Skills sx={{ mt: 4 }} />
      </section>
      <section
        sx={{
          my: [5, 8],
          animation: fadeInUpAnimation,
          animationDelay: `${4 * 0.1}s`,
        }}
      >
        <Styled.h2 sx={{ mb: -2, fontSize: 5 }}>Recent Ramblings</Styled.h2>
        <p sx={{ mb: 5, color: "muted" }}>
          My latest writings on code, learnings, and career experiences.
        </p>
        <RecentRamblings />
      </section>
    </Container>
  </Layout>
)

const NUM_POSTS_TO_DISPLAY = 6

const RecentRamblings = () => {
  const data = useStaticQuery(QUERY)
  const {
    allBlogPost: { nodes: allPosts },
  } = data
  const displayedPosts = allPosts.slice(0, NUM_POSTS_TO_DISPLAY)

  return (
    <>
      <PostGrid posts={displayedPosts} />
      {(() => {
        // If all posts can fit on the home page we don't need a "more" button
        if (displayedPosts.length >= allPosts.length) return

        // Otherwise if we have more than `NUM_POSTS_TO_DISPLAY` posts we'll link to the articles page
        const lastPostSlug = displayedPosts[NUM_POSTS_TO_DISPLAY - 1].slug

        // We create a direct link using the last post's slug so the reader
        // can pick up where they left off on the articles page
        return (
          <div sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
            <Link
              to={`/articles#${lastPostSlug.replace(/\//g, "")}`}
              sx={{
                variant: "link",
                px: 5,
                py: 3,
                border: "1px solid",
                borderColor: "border",
                borderRadius: 99999,
              }}
            >
              Continue Perusing &#8594;
            </Link>
          </div>
        )
      })()}
    </>
  )
}

const QUERY = graphql`
  query HomePageQuery {
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
            fluid(maxWidth: 300, maxHeight: 190, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        imageAlt
      }
    }
  }
`

export default Home
