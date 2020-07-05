import React from 'react'
import Layout from '../components/Layout'
import Search from '../components/Search'

class BlogSearch extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const sum = data.site.siteMetadata.summary
    const desc = data.site.siteMetadata.description
    return (
  <Layout title={siteTitle}
    summary={sum}
    description={desc}
  >
    <div>
      <h1></h1>
      <h1></h1>
      <h1>ブログ内検索</h1>
      <Search />
    </div>
  </Layout>
)}}

export const pageQuery = graphql`
  query {
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

export default BlogSearch
