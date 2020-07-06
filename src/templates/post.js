import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SharingButtons from '../components/SharingButtons'
import Img from 'gatsby-image'
import SEO from '../components/seo'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  path,
  featured_image,
  excerpt,
  site,
}) => {
  const url = `${site.siteUrl}` + '/' + path
  return (
    <section className="section">
      <SEO
        title={title}
        image={featured_image.fluid}
        description={excerpt}
      />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <Img fluid={featured_image.fluid} alt={title} />
	          <h4>&nbsp;</h4>
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
  const { siteUrl: location } = data.site.siteMetadata
  const { summary: sum } = data.site.siteMetadata
  const { description: desc } = data.site.siteMetadata
  const image = post.featured_media.localFile.childImageSharp
  return (
      <Layout title={siteTitle} location={location} summary={sum} description={desc}>
        <BlogPostTemplate
          content={post.content}
          categories={post.categories}
          tags={post.tags}
          title={post.title}
          date={post.date}
          author={post.author}
	      path={post.slug}
	      featured_image={post.featured_media.localFile.childImageSharp}
          excerpt={post.excerpt}
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
    excerpt
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
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        summary
        description
      }
    }
  }
`
