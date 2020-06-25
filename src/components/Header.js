import React from "react"
import { Link } from "gatsby"
import { Facebook, Twitter } from 'react-sharingbuttons';
import youtube from '../img/yt_logo_rgb_dark.png'

const Header = ( { location, title, summary, description } ) => {
  var burger_click = event => {
    if (event && event.target) {
      var target = event.target
      if (event.target.tagName === "SPAN") {
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
	      <Link to="/blog-start-jikoshoukai/" className="navbar-item">
	        自己紹介
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




          <div className="navbar-end"></div>
          </div>
        </div>
      </nav>

        <section className="hero is-success">

        <div className="hero-body">
        <div className="container">
        <h1>　</h1>
        <h1>　</h1>
        <h6>{summary}</h6>
        <h6>{description}</h6>
        <Twitter url={location} shareText={title} />
        <Facebook url={location} />
        &nbsp;&nbsp;
		<a href="https://www.youtube.com/channel/UCDYBHs0K8leNAJS_MgQwNOg">
		  <img src={youtube} alt="YouTube" style={{ width: '110px' }} />
		</a>
        </div>
        </div>
        </section>
    </header>
  )
}

export default Header
