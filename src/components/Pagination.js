import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { numberOfPages, previousPagePath, nextPagePath } = pageContext
  const lastPage = '/page/' + `${numberOfPages}`
  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link class="button is-warning" to="/" rel="prev">
              ＜＜
            </Link>
          </div>
        )}
        {previousPagePath && (
          <div className="navbar-item">
            <Link class="button is-warning" to={previousPagePath} rel="prev">
              ＜
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link class="button is-warning" to={nextPagePath} rel="next">
              ＞
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link class="button is-warning" to={lastPage} rel="next">
              ＞＞
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
