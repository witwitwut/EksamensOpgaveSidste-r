import { createHeaderView } from "./view/HeaderView";
import { createBuyingSection } from "./view/BuyingSection";


 class App{
     constructor(){
         
        document.body.insertAdjacentHTML('afterbegin', createHeaderView())

        document.body.insertAdjacentHTML('beforeend', createBuyingSection())
     }
 }

document.addEventListener('DOMContentLoaded', () => new App())