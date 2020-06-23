import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const CategoryList = () => {
  const data = useStaticQuery(
    graphql`
    query CategoryList{
      allWordpressCategory {
        nodes {
          name
          path
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
/*  return (
     <div>
     {data.nodes.name}
     </div>
  )*/
}

export default CategoryList





/*import { StaticQuery, graphql, Link } from "gatsby"

export default function CategoryList  () {
  return (
  <StaticQuery
    query={graphql`
      {
        allWordpressCategory {
          nodes {
            name
            path
          }
        }
      }
    `}
 render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
//    render={data => (
//        <>
//          <Link to={data.path}>{data.name}</Link>
//        </>
//      )}
//    />
)
}*/

