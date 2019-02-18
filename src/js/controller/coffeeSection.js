import {store} from '../model/store'
import { product } from '../view/products';
import { addToCart } from './cartController';

export default class coffeeSection{

    constructor(){

        // console.log(store)

        let coffeeSectionHTML = createcoffeeSection(store)

        // console.log(store)

        // let sectionHTLM = setupcoffeeSection()

        // console.log(coffeeSectionHTML)

        let buyingSectionHTML = document.getElementById('ProductSection')

        

        // document.body.insertAdjacentHTML("beforeend", sectionHTLM)
        
        
        buyingSectionHTML.insertAdjacentHTML('beforeend', coffeeSectionHTML)


        
        buyingSectionHTML.addEventListener('click' , (event) => {
            if (event.target.matches('.btn')) {
                // console.log(event.target)
                // console.log(event.target.dataset.name)
                addToCart(event.target.dataset.name)   
            }
        })
        
    }

        
}

function createcoffeeSection(store) {
    let coffeeCardHTML = ''

    // console.log(store)
    if (store) {
        Object.values(store).forEach(coffeeObject => {
            // console.log(coffeeObject)
            coffeeCardHTML += new product(coffeeObject).render()
            // console.log(coffeeCardHTML)
        });

        return coffeeCardHTML
    }
}

// function setupcoffeeSection(){
//     return `
//     <section class="album py-5 bg-light">
//         <div class="container">
//             <div class="row">
//                 <div class="col-md-8">
//                     <div id="ProductSection class="row">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     `
// }