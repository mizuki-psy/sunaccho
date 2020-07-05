import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
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
      <h1>NOT FOUND</h1>
      <p>お探しのページは見つかりません。</p>
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

export default NotFoundPage
