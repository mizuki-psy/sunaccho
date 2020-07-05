import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import SEO from '../components/seo'

const Category = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { siterl: location } = data.site.siteMetadata
  const { summary: sum } = data.site.siteMetadata
  const { description: desc } = data.site.siteMetadata
  const { name: category } = pageContext
/*  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } in the “${category}” category`*/
  const title = `カテゴリー「${category}」に${totalCount} 件投稿があります`

  return (
   <Layout title={siteTitle} location={location} summary={sum} description={desc}>
      <SEO />
      <Helmet title={`${category}`} />
      <PostList posts={posts} title={title} />
   </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        summary
        description
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
