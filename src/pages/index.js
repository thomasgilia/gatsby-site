import React from "react"
import AllPagesLayout from "../components/allPagesLayout"
import DiscussionLayout from "../components/discussionLayout"
import Header from "../components/header"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <AllPagesLayout>
      <>
        <Header>
          Because life is too short to <i>not</i> go bananas
        </Header>
        <br></br>
        <DiscussionLayout>
          <h5>Bananas are a good source of fiber, several vitamins and minerals, and have a surprising amount of
          protein. They are also inexpensive and readily available. No worries for vegans, gluten or milk
          allergies, etc. Watch out though - frozen banana treats are surprisingly addictive and are not low carb.</h5>
          <br></br>
          
        </DiscussionLayout>
      </>
        <div class="row">
          {data.allContentfulRecipes.nodes.map((node, index) => (
            <div class="col-md-4">
              <div class="card mb-4 box-shadow-sm">
                <img class="card-img-top img-fluid" src={node.photo[0].file.url} alt={node.photo[0].file.fileName} data-holder-rendered="true" width="100%"
                  height="225" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" />
                <div class="card-body">
                  <h5 class="card-title">{node.title}</h5>
                      <a href={node.title} class="btn btn-warning" >Go to Recipe</a>
                </div>
              </div>
            </div>
          ))}
        </div>

    </AllPagesLayout>
  )
}
//use div class='btn-group', <a href={node.name} class="btn btnsm etc."></a>
//anchor tag instead of button but styled as a button
export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      title
      recipe {
        recipe
      }
      photo {
        file {
          url
          fileName
        }
      }
    }
  }
}`