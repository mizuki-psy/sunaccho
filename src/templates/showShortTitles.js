import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostList from '../components/ShortTitleList'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost


    return (
      <Layout>
              <ShortTitleList posts={posts} title="" />
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
  query TitleQuery($limit: Int!, $skip: Int!) {
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
        siteurl
        summary
        description
      }
    }
  }
`
