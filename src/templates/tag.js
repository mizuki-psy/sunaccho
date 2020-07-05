import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import SEO from '../components/seo'

const Tag = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { siterl: location } = data.site.siteMetadata
  const { summary: sum } = data.site.siteMetadata
  const { description: desc } = data.site.siteMetadata
  const { name: tag } = pageContext
/*  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } with the tag ${tag}`*/
  const title = `${totalCount} 件の投稿に「${tag}」タグが付いています`

  return (
   <Layout title={siteTitle} location={location} summary={sum} description={desc}>
      <SEO
        title={`${tag}`}
      />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagPage($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        summary
        description
      }
    }
    allWordpressPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
