import React from "react"
import { StaticQuery, graphql } from "gatsby"

const AdsList = () => (
  <StaticQuery
    query= {graphql`
      query {
        allHtmlRehype {
          nodes {
            html
            tableOfContents
          }
         }
       }
    `}
    render={data => (
      <nav>
        <h1>広告</h1>
        <ul>
           <div>
              {data.allHtmlRehype.nodes.map(ads => (
              <li>
                <div class="has-text-centered" dangerouslySetInnerHTML={{ __html: ads.html }} />
                <br />
              </li>
              ))}
          </div>
          </ul>
      </nav>    
    )}
  ></StaticQuery>
)

export default AdsList
