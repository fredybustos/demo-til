import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <div className="c-error">
      <SEO title="404: Not Found" />
      <div className="error">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link className="back" to={`/`}>
          ← TIL
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
