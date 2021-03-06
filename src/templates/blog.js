import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import SEO from '../components/seo'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost
    const { title: siteTitle } = data.site.siteMetadata
    const { siteUrl: location } = data.site.siteMetadata
    const { summary: sum } = data.site.siteMetadata
    const { description: desc } = data.site.siteMetadata


    return (
      <Layout title={siteTitle} location={location} summary={sum} description={desc}>
        <SEO
          title={siteTitle}
        />
        <PostList posts={posts} title="" />

        <Pagination pageContext={pageContext} pathPrefix="/" />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
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
