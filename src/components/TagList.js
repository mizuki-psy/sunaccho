import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const TagList = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressTag {
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
        <h1>タグ（{data.allWordpressTag.totalCount}）</h1>
        <ul>
          {data.allWordpressTag.nodes.map(category => (
            <li key={category.name}>
              <Link to={`/tags/${category.slug}/`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  ></StaticQuery>
)

export default TagList


