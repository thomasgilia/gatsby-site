import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./allPagesLayout.css"
// export default function allPagesLayout({ children }) {

//goal adds: navigation menu, credits option
export default function AllPagesLayout({children}) {
    return (
        <div>
           <StaticQuery

                query={graphql`
        query HeadingQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `}
                render={data => (
                    <h1>{data.site.siteMetadata.title}</h1>
                )}
            />
 {children}
        </div>
   
    )
}
//can render with <header></header>around that line of code in render to create a component
