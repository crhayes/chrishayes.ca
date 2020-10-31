/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => (
  <footer
    sx={{
      mx: 3,
      mt: 8,
      mb: 5,
      fontSize: 1,
      textAlign: "center",
      color: "muted",
      animation: "1s cubic-bezier(.19, .84, .61, 1.02) fadeInUp backwards",
      animationDelay: `${5 * 0.1}s`,
    }}
  >
    Made with &#x2764; by Chris Hayes
  </footer>
)

export default Footer
