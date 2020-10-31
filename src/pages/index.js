/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"

import Layout from "../components/layout"
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
          fontSize: 4,
        }}
      >
        <Styled.h1
          sx={{
            mb: 5,
            fontSize: [6, 9],
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
        {/* <ArticlesGrid /> */}
      </section>
    </Container>
  </Layout>
)

export default Home
