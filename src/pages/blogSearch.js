import React from 'react'
import Layout from '../components/Layout'
import Search from '../components/Search'

const BlogSearch = () => (
  <Layout title="みずき＠精神科医のブログ"
    summary="発達障害を持つ女医がこころの病気と健康について語る。"
    description="よりすぐりの正しいことを発信して、どこまでいけるのかチャレンジするブログ"
  >
    <div>
      <h1></h1>
      <h1></h1>
      <h1>ブログ内検索</h1>
      <Search />
    </div>
  </Layout>
)

export default BlogSearch
