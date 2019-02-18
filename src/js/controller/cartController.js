import { store } from '../model/store'
import {product} from '../view/products'

export let cartitems = []

export function addToCart(productsname){
    
    const Amount = document.getElementById('buyingAmount')
    
    // const cartbtn = document.getElementsByClassName('cartbtn')
    
    let totalprice = []
    let sum = 0
    const reducing = (accumulator, currentValue) => accumulator + currentValue
    
    const cartid = document.getElementById('cart')
    const sumElem = document.getElementById('sum')
    
    // console.log(cartid)
    // console.log(store)
    
    
    
    Object.values(store).forEach(coffeObject => {
        if (productsname === coffeObject.navn) {
            cartitems.push(coffeObject.pris) 
            let orderObject = cartRender(coffeObject)
            cartid.insertAdjacentHTML("afterbegin", orderObject)           
            // console.log(cartitems)
            cartitems.forEach(priceObject => {
                totalprice.push((parseFloat(priceObject.replace(/[^\d\.]/g,''))))
                sum = totalprice.reduce(reducing)
                
                
            });
            if (!sumElem) {
                cartid.insertAdjacentHTML("beforeend", sumRender(sum))
            }
            else{
                
                sumElem.innerHTML = sum
            }
            
        }
    })
    
    
}

function cartRender(product){
    return `
    <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <h6 class="my-0">${product.navn}</h6>
    <small class="text-muted">${product.beskrivelse}</small>
    </div>
    <span class="text-muted">${product.pris}</span>
    </li>`
}

function sumRender(SumNumber){
    return `
    <li  class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <h6 class="my-0">Total Price</h6>            
    </div>
    <span id="sum" class="text-muted">${SumNumber}</span>
    </li>`
}