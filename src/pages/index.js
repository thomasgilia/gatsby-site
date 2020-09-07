import React from "react"
import AllPagesLayout from "../components/allPagesLayout"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <AllPagesLayout>
      <div>Hello class!</div>

      <div class="row">
      {data.allContentfulRecipes.nodes.map((node, index) => (
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={ node.photo[0].file.url } alt={ node.title } data-holder-rendered="true" />
                <div class="card-body">
                  <p class="card-text">{node.title}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href={node.title} class="btn btn-sm btn-outline-secondary">View</a>
                    </div>
                  </div>
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
        }
      }
    }
  }
}
`




// export default function Home() {

//   return (
    
//       <AllPagesLayout>
//  <div class="album py-5 bg-light">
//         <div class="container" style="background-color: grey;text-align:center; border-radius: 10px; padding: 4px;">
//             <h1 style="color:yellow;">Because life is too short to <i>not</i> go bananas</h1>
//         </div>
//         <br></br>
//         <div class="container">
//             <h6>Bananas are a good source of fiber, several vitamins and minerals, and have a surprising amount of
//                 protein. They are also inexpensive and readily available. No worries for vegans, gluten or milk
//                 allergies, etc. Watch
//                 out though - frozen banana treats are surprisingly addictive and are not low carb.</h6>
//             <br></br>
//             <div class="mx-auto">
//                 <a href="./contact.html"> <button type="button" class="btn btn-warning">Create account</button></a>
//                 <br></br>
//             </div>
//         </div>
//         <div class="container">
//             <div class="row">
//                 <div class="col-md-6">
//                     <div class="card mb-6 shadow-sm">
//                         <a href="https://cooking.nytimes.com/recipes/3038-one-ingredient-banana-ice-cream" width="100%"
//                             height="225" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
//                             <rect width="100%" height="100%" fill="#55595c">
//                                 src="24COOKING-BANANA-ICE-CREAM1-articleLarge-v2.jpg" class="card-img-top"
//                                 alt="Bowl of banana ice cream"</rect>
//                         </a>
//                         <div class="card-body">
//                             <h5 class="card-title">Banana Ice Cream</h5>
//                             <p class="card-text">
//                             <ol>
//                                 <li>Peel ripe to slightly over-ripe bananas.</li>
//                                 <li>Cut into 1-2 inch chunks. </li>
//                                 <li>Place on plate in freezer until frozen solid.</li>
//                                 <li>Blend and enjoy or place in airtight container and freeze for later.</li>
//                             </ol>
//                             </p>
//                             <br></br>
//                             <h6 class="card-subtitle mb-2 text-muted">Optional Additions</h6>
//                             <ul class="list-group list-group-flush">
//                                 <li class="list-group-item">No sugar added Chocolate:<br></br>
//                                     Blend in 1 teaspoon plain cocoa powder per banana</li>
//                                 <li class="list-group-item">No sugar added Coconut:<br></br>
//                                     Blend in 1 tablespoon of unsweetened coconut per banana</li>
//                             </ul>
//                             <br></br>
//                             <div class="justify-content-between align-items-center">
//                                 <button type="button" class="btn btn-warning">Add to Cookbook</button>
//                                 <button type="button" class="btn btn-secondary">See Nutrition</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-6">
//                     <div class="card mb-6 shadow-sm">
//                         <a href="https://www.onelovelylife.com/healthy-chocolate-covered-bananas/" width="100%"
//                             height="225" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
//                             <rect width="100%" height="100%" fill="#55595c"></rect><img src="banana_pops.JPG"
//                                 alt="banana pops" class="card-img-top"></img>
//                         </a>
//                         <div class="card-body">
//                             <h5 class="card-title">Banana Pops</h5><br></br>
//                             <h6 class="card-subtitle mb-2 text-muted">Prepare bananas</h6>
//                             <p class="card-text">
//                             <ol>
//                                 <li>Peel ripe to slightly over-ripe bananas.</li>
//                                 <li>Cut in half. Insert popsicle stick into flat end, at a slight angle to avoid
//                                     natural
//                                     segmentation tendency.
//                                 </li>
//                                 <li>Place on plate in freezer until frozen solid.</li>
//                             </ol>
//                             <h6 class="card-subtitle mb-2 text-muted">Prepare chocolate</h6>
//                             <ol>
//                                 <li>You'll need approx. 1/2 cup of chocolate chips per 4 bananas worth of pops</li>
//                                 <li>Place chips in saucer. Heat 15 seconds in microwave. Stir and repeat until chips
//                                     are
//                                     just
//                                     melted.</li>
//                                 <li>Roll pops in melted chocolate and smooth with butter knife to control amount of
//                                     chocolate.
//                                 </li>
//                                 <li>Store in zip bag in freezer until you can't stand it any more and eat them all!
//                                 </li>
//                             </ol>
//                             </p>
//                             <br></br>
//                             <h6 class="card-subtitle mb-2 text-muted">Optional Additions</h6>
//                             <ul class="list-group list-group-flush">
//                                 <li class="list-group-item">Dark Chocolate:<br></br>
//                                     Replace milk chocolate chips with dark chocolate chips. Highly recommended.</li>
//                                 <li class="list-group-item">Coconut:<br></br>
//                                     Chop finely. Press into banana before freezing.</li>
//                                 <li class="list-group-item">Almonds:<br></br>
//                                     Chop finely. Press into banana before freezing.</li>
//                                 <li class="list-group-item">Caramel Chips:<br></br>
//                                     Replace half of chocolate chips with caramel.</li>
//                             </ul>
//                             <br></br>
//                             <div class="justify-content-between align-items-center">
//                                 <button type="button" class="btn btn-warning">Add to Cookbook</button>
//                                 <button type="button" class="btn btn-secondary">See Nutrition</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//       </AllPagesLayout>
//     )
// }
