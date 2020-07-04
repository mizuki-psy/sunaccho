import React from "react"
import CategoryList from '../components/CategoryList'
import TagList from '../components/TagList'
import ShortTitleList from '../components/ShortTitleList'
import Search from '../components/Search'
import AdsList from '../components/AdsList'

const Main = ({ children }) => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters content">{children}</div>
            <div className="column">
              <div><h1>　</h1></div>
              <div className="has-background-light">
                <Search />
              </div>
              <span>　</span>
              <div className="has-background-light">
                <ShortTitleList />
              </div>
              <span>　</span>
              <div className="has-background-light">
				<CategoryList />
              </div>
              <span>　</span>
              <div className="has-background-light">
				<TagList />
              </div>
              <span>　</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
