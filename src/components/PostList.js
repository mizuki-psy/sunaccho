import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import NewIcon from './NewIcon'

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
              style={{ border: '1px solid #eaecee', padding: '1em 1em' }}
              key={post.id}
            >
              <Link to={post.path}>
              <Img fluid={post.featured_media.localFile.childImageSharp.fluid} alt={title} />
              </Link>
              <br/>
              <p>
                <Link className="has-text-primary" to={post.path}>
                  <NewIcon date={post.date} /><strong>{post.title}</strong>
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date}
                </small>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <table className="is-narrow"><tr><td>
                <ul className="taglist">
                <li><Link className="button is-small" to={post.path}>
                  続きを読む →
                </Link></li>
                </ul>
                </td><td>
                  <ul className="taglist">
                    {post.categories.map(category => (
                      <li key={`${category.slug}cat`}>
                        <Link className="button is-small is-warning" to={`/categories/${category.slug}/`}>
                          {category.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td></tr></table>
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
    date(formatString: "YYYY-MM-DD")
    slug
    path
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 480) {
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
