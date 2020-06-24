import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SharingButtons from '../components/SharingButtons'
//import Site from './Site'


export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  path,
  site,
}) => {
  const url = `https://${site.siteurl}` + '/' + path
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{ marginTop: `4rem` }}>
              <p>
                {date} - posted by{' '}
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
              </p>
		<div class="has-text-centered">
		 <SharingButtons
		  title={title}
		  url={url}
		/>
		</div>
              {categories && categories.length ? (
                <div>
                  <h4>カテゴリー</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category.slug}cat`}>
                        <Link className="button is-small is-warning" to={`/categories/${category.slug}/`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>タグ</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag.slug}tag`}>
                        <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  const { title: siteTitle } = data.site.siteMetadata
  const { siterl: location } = data.site.siteMetadata
  const { summary: sum } = data.site.siteMetadata
  const { description: desc } = data.site.siteMetadata
  return (
      <Layout title={siteTitle} location={location} summary={sum} description={desc}>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
	    path={post.slug}
	    site={data.site.siteMetadata}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
    site {
      siteMetadata {
        title
        siteurl
        summary
        description
      }
    }
  }
`
