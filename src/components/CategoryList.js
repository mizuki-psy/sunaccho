import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory {
          nodes {
            name
            path
            slug
          }
          totalCount
        }
      }
    `}
    render={data => (
      <nav>
        <h1>カテゴリー（{data.allWordpressCategory.totalCount}）</h1>
        <ul>
          {data.allWordpressCategory.nodes.map(category => (
            <li key={category.name}>
              <Link to={`/categories/${category.slug}/`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  ></StaticQuery>
)

export default CategoryList
