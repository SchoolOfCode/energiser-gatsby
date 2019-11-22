import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>
        <pre>
          ---------------------------------------{"\n"}
          ---------------{" "}
          <a
            href="https://github.com/SchoolOfCode/energiser-gatsby"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          ----------------
          {"\n"}
          ---------------------------------------
        </pre>{" "}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
