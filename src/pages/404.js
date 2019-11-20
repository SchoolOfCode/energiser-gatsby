import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>Oops...</h1>
    <p>we couldnt find what you were looking fors.</p>
    <Link to="/">home</Link>
  </>
)

export default NotFoundPage
