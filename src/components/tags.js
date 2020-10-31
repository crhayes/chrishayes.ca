/** @jsx jsx */
import { jsx } from "theme-ui"

const Tags = ({ tags, ...props }) => (
  <div
    sx={{
      fontFamily: "monospace",
      fontSize: 0,
      fontWeight: "bold",
      letterSpacing: "loose",
      textTransform: "uppercase",
      color: "primary",
    }}
    {...props}
  >
    {tags.join(", ")}
  </div>
)

export default Tags
