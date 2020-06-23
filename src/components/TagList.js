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
            count
          }
          totalCount
        }
      }
    `}
    render={data => (
      <nav>
        <h1>タグ（{data.allWordpressTag.totalCount}）</h1>
        <ul>
          {data.allWordpressTag.nodes.map(tag => (
            <li key={tag.name}>
              <Link to={`/tags/${tag.slug}/`}>
                {tag.name}　({tag.count})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  ></StaticQuery>
)

export default TagList


