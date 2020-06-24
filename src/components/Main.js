import React from "react"
import CategoryList from '../components/CategoryList'
import TagList from '../components/TagList'
import ShortTitleList from '../components/ShortTitleList'
import Search from '../components/Search'


const Main = ({ children }) => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters content">{children}</div>
            <div className="column">
              <div className="has-background-light">
                <Search />
              </div>
              <div><h1>　</h1></div>
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

              <div className="has-background-light">広告</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
