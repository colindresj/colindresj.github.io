import React from "react"
import PropTypes from "prop-types"

const InlineLinks = ({ title, links }) => (
  <ul className="inline-links">
    <li>{title}</li>
    {links.map(({ title, url }) => (
      <li key={title} className="arrowed">
        <a href={url}>{title}</a>
      </li>
    ))}

    <style>{`
      .inline-links {
        display: inline;
        line-height: 2;
        line-style-type: none;
        padding: 0;
      }

      .inline-links li, .inline-links li.arrowed:before {
        display: inline;
        padding-left: 0;
      }

      .inline-links li.arrowed:before {
        content: "⇝";
        margin: 0 9px;
      }
    `}</style>
  </ul>
)

InlineLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default InlineLinks
