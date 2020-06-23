import React from "react"
import CategoryList from '../components/CategoryList'
import TagList from '../components/TagList'

const Main = ({ children }) => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters content">{children}</div>
            <div className="column">
              <h1>　</h1>
              <h1>　</h1>
              <div className="has-background-light">最近の投稿一覧
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
