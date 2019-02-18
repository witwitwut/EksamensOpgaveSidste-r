import { createHeaderView } from "./view/HeaderView";
import { createBuyingSection } from "./view/BuyingSection";
import coffeeSection from "./controller/coffeeSection";


 class App{
     constructor(){
         
        document.body.insertAdjacentHTML('afterbegin', createHeaderView())

        // let coffeeSectionSellingHTLM = new coffeeSection()

        document.body.insertAdjacentHTML('beforeend', createBuyingSection())

        new coffeeSection()

        // document.body.insertAdjacentHTML('beforeend', coffeeSectionSellingHTLM)

       
     }
 }

document.addEventListener('DOMContentLoaded', () => new App())