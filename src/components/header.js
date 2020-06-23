import React from "react"
import { Link } from "gatsby"

const Header = ( { location, title, summary, description } ) => {
  var burger_click = event => {
    if (event && event.target) {
      var target = event.target
      if (event.target.tagName == "SPAN") {
        target = target.parentNode
      }
      target.classList.toggle("is-active")
      const $target = document.getElementById(target.dataset.target)
      $target.classList.toggle("is-active")
    }
  }
 
  return (
    <header>
      <nav
        className="navbar is-primary is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">


          <div className="navbar-brand">
            <Link to={`/`} className="navbar-item title is-4">
              {title}
            </Link>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarSiteMenu"
              onClick={burger_click}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>




          <div id="navbarSiteMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/tags/" className="navbar-item">
                カテゴリー
              </Link>
            </div>
            <div className="navbar-start">
              <Link to="/privacy/" className="navbar-item">
                プライバシーポリシー
              </Link>
            </div>
            <div className="navbar-start">
              <Link to="/contact/" className="navbar-item">
                お問い合わせ
              </Link>
            </div>



          <div class="subtitle is-6 has-text-light navbar-brand">
            {summary}
            {description}
          </div>

          <div className="navbar-end"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
