import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory (sort: {fields: slug}) {
          nodes {
            name
            path
            slug
            count
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
                {category.name}　({category.count})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  ></StaticQuery>
)

export default CategoryList