/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { GitHub, Linkedin, Twitter } from "react-feather"

const fadeInDownAnimation =
  "0.6s cubic-bezier(.19, .84, .61, 1.02) fadeInDown backwards"

const Header = () => (
  <header
    sx={{
      fontFamily: "body",
      borderBottom: "1px solid",
      borderColor: "border",
      animation: "0.6s cubic-bezier(.19, .84, .61, 1.02) fadeInDown backwards",
      animationDelay: `${1 * 0.1}s`,
    }}
  >
    <Container
      as={"nav"}
      sx={{
        display: "grid",
        gridTemplateColumns: "max-content auto min-content",
        alignItems: "center",
        columnGap: 5,
        py: 4,
      }}
    >
      <a
        href="/"
        sx={{
          variant: "link",
          fontSize: 3,
          fontWeight: "bold",
          letterSpacing: "tight",
          animation: fadeInDownAnimation,
          animationDelay: `${2 * 0.1}s`,
        }}
      >
        Chris Hayes
      </a>
      <div sx={{ display: "flex", fontWeight: "bold" }}>
        <a
          href="/"
          sx={{
            variant: "link",
            mr: 3,
            animation: fadeInDownAnimation,
            animationDelay: `${3 * 0.1}s`,
          }}
        >
          Home
        </a>
        <a
          href="/articles"
          sx={{
            variant: "link",
            animation: fadeInDownAnimation,
            animationDelay: `${4 * 0.1}s`,
          }}
        >
          Articles
        </a>
      </div>
      <div sx={{ display: "flex" }}>
        <a
          href="https://github.com/crhayes"
          alt="Github"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: "link",
            display: "inline-flex",
            placeItems: "center",
            mr: 3,
            animation: fadeInDownAnimation,
            animationDelay: `${5 * 0.1}s`,
          }}
        >
          <GitHub size={18} />
        </a>
        <a
          href="https://linkedin.com/in/crhayes"
          alt="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: "link",
            display: "inline-flex",
            placeItems: "center",
            mr: 3,
            animation: fadeInDownAnimation,
            animationDelay: `${6 * 0.1}s`,
          }}
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://twitter.com/crhayes_"
          alt="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: "link",
            display: "inline-flex",
            placeItems: "center",
            animation: fadeInDownAnimation,
            animationDelay: `${7 * 0.1}s`,
          }}
        >
          <Twitter size={18} />
        </a>
      </div>
    </Container>
  </header>
)

export default Header
