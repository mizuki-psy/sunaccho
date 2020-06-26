import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { numberOfPages, previousPagePath, nextPagePath } = pageContext
  const lastPage = '/page/' + `${numberOfPages}`
  return (
    <section class="hero">
     <div class="hero-foot">
      <div class="container has-text-centered">
        {previousPagePath && (
            <Link class="button is-warning" to="/" rel="prev">
              ＜＜
            </Link>
        )}
        &nbsp;&nbsp;
        {previousPagePath && (
            <Link class="button is-warning" to={previousPagePath} rel="prev">
              ＜
            </Link>
        )}
        &nbsp;&nbsp;
        {nextPagePath && (
            <Link class="button is-warning" to={nextPagePath} rel="next">
              ＞
            </Link>
        )}
        &nbsp;&nbsp;
        {nextPagePath && (
            <Link class="button is-warning" to={lastPage} rel="next">
              ＞＞
            </Link>
        )}
      </div>
     </div>
    </section>
  )
}

export default Pagination
