import React from "react"
import AllPagesLayout from "../components/allPagesLayout"
import { graphql } from "gatsby";
//the gatsby-node.js is used to do certain functionalities - low level code/node modules etc.
//allows us to add stuff for build process
//in this case we're using createPage to auto create pages from contentful data

//its going to 1) look for a page tempalt 2) exedute graphql query
//3)loop through query results and create page via execution of createPage API
//each record in query will get own page

export default function recipeTemplate({ data }) {
    let item = data.contentfulRecipes;
    return (
        <AllPagesLayout>
            <h4> {item.title}</h4>
            <p> {item.recipe.recipe}</p>
            <img src={item.photo[0].file.url}></img>>
        </AllPagesLayout>
    )
}

//for the query thats coming your way, there is a slug value
//when run the template specific query, tells it it needs to find
//the exact one that matches the slug
//this new query has new name recipeQuery and takes parameter of the slug keyword
//so when the recipe name matches the slug name, it knows its the one to use
//use contetnfulRecipes instead of Allcontentfulrecipes because we want individual recipe
//not the node in the collection. this query is what populates 'data' in this case
//i called name title
export const query = graphql`
query recipeQuery($slug: String!){
    contentfulRecipes(title: {eq: $slug}){
                    title
            recipe {
              recipe
            }
            photo {
              file {
                url
              }
            }
        }
    }
`