/** @jsx jsx */
import Link from "./link"
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
      <Link
        to="/"
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
      </Link>
      <div sx={{ display: "flex", fontWeight: "bold" }}>
        <Link
          to="/"
          sx={{
            variant: "link",
            display: ["none", "block"],
            mr: 3,
            animation: fadeInDownAnimation,
            animationDelay: `${3 * 0.1}s`,
          }}
        >
          Home
        </Link>
        <Link
          to="/articles"
          sx={{
            variant: "link",
            animation: fadeInDownAnimation,
            animationDelay: `${4 * 0.1}s`,
          }}
        >
          Articles
        </Link>
      </div>
      <div sx={{ display: "flex" }}>
        <Link
          to="https://github.com/crhayes"
          aria-label="Visit My Github"
          sx={{
            variant: "link",
            display: "inline-flex",
            placeItems: "center",
            mr: 3,
            animation: fadeInDownAnimation,
            animationDelay: `${5 * 0.1}s`,
          }}
        >
          <GitHub size={18} alt="Github" />
        </Link>
        <Link
          to="https://linkedin.com/in/crhayes"
          aria-label="Visit My LinkedIn"
          sx={{
            variant: "link",
            display: "inline-flex",
            placeItems: "center",
            mr: 3,
            animation: fadeInDownAnimation,
            animationDelay: `${6 * 0.1}s`,
          }}
        >
          <Linkedin size={18} alt="LinkedIn" />
        </Link>
        <Link
          to="https://twitter.com/crhayes_"
          aria-label="Visit My Twitter"
          sx={{
            variant: "link",
            display: "inline-flex",
            placeItems: "center",
            animation: fadeInDownAnimation,
            animationDelay: `${7 * 0.1}s`,
          }}
        >
          <Twitter size={18} alt="Twitter" />
        </Link>
      </div>
    </Container>
  </header>
)

export default Header
