import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
//import Img from 'gatsby-image'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          {posts.map(({ node: post }) => (
            <div
              className="content"
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.path}>
                  {post.title}
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date} 
                </small>
              </p>
              <div>
                <Link className="button is-small" to={post.path}>
                  記事を読む →
                </Link>
              </div>
            </div> 
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
    path
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    categories {
      name
      slug
    }
  }
`
