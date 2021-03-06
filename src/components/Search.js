import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FaSearch } from "react-icons/fa"

const SearchResult = props => {
  // 全記事データ取得 //
  const tempData = useStaticQuery(graphql`
    query SearchData {
      allWordpressPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            date(formatString: "YYYY-MM-DD")
            title
            slug
          }
        }
      }
    }
  `)
  const [data, setData] = useState([])
  useEffect(() => {
    const temp = []
    tempData.allWordpressPost.edges.map(e => {
      temp.push(e.node)
    })
    setData(temp)
  }, [])

  // 表示非表示の切り替え //
  const [className, setClassName] = useState("")
  useEffect(() => {
    let id
    if (props.focus && props.value !== "") {
      id = setTimeout(() => {
        setClassName("is-link")
      }, 100)
    } else {
      id = setTimeout(() => {
        setClassName("")
      }, 100)
    }
    return () => {
      clearTimeout(id)
    }
  }, [props.focus, props.value])

  // 検索処理 //
  const [result, setResult] = useState([])
  const search = () => {
    const value = props.value.toLowerCase()
    const temp = data.filter(e => {
      const target = `
        ${e.title.toLowerCase()}
      `
      return target.indexOf(value) !== -1
    })
    setResult(temp)
  }
  useEffect(() => {
    if (props.value !== "") {
      search()
    }
  }, [props.value])

  return (
    <div className={className}>
      <div className="primary">
        <span className="success">
          <b>{result.length}</b>件ヒットしました
        </span>
        <ul>
          {result.map(e => {
            return (
              <li key={e.slug}>
                <Link to={`/${e.slug}/`}>
                   →&nbsp;{e.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const Search = props => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className={props.className} focus={focus}>
      <FaSearch />
      <input
        className="input is-normal"
        type="text"
        placeholder="Search..."
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      <SearchResult focus={focus} value={value} />
    </div>
  )
}

export default Search
