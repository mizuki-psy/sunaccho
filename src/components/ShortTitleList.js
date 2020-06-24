import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const ShortTitleList = () => (
  <StaticQuery
    query={graphql`
      query {
       allWordpressPost(filter: {}, limit: 5, sort: {fields: date, order: DESC}) {
          edges {
            node {
              date(formatString: "MMMM DD, YYYY")
              title
              slug
              path
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <h1>最近の投稿</h1>
        <ul>
          {data.allWordpressPost.edges.map(post => (
            <li key={post.node.title}>
              <Link to={`/${post.node.slug}/`}>
                <div class="has-text-right">
                  <small><span> &bull; </span>
                  {post.node.date}
                  </small>
                </div>
                <div>{post.node.title}　</div>  
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  ></StaticQuery>
)

export default ShortTitleList