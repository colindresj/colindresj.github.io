import React from "react"

export default ({ title, links }) => (
  <ul>
    <li>{title}</li>
    {links.map(({ text, href }) => (
      <li key={text} className="arrowed">
        <a href={href}>{text}</a>
      </li>
    ))}

    <style>{`
      ul {
        display: inline;
        line-height: 2;
        line-style-type: none;
        padding: 0;
      }

      li, li.arrowed:before {
        display: inline;
        padding-left: 0;
      }

      li.arrowed:before {
        content: "⇝";
        margin: 0 9px;
      }
    `}</style>
  </ul>
)
