

class store{
    constructor(){
        let coffeeDB = {}

        if (!localStorage.getItem('coffeeDB')) {
            console.log("åhoh du har ikke nogen coffee på localstorage")
            return coffeeDB = {
                coffee1: {
                    navn : 'Americano',
                    beskrivelse : 'Stærk crema espresso med varmt vand',
                    pris : '60kr',
                    img : './img/Americano.jpg'
                },
                coffee2: {
                    navn : 'Caffe latte',
                    beskrivelse : 'Espresso med skummet varm mælk',
                    pris : '65kr',
                    img : './img/Caffe_Latte.jpg'
                },
                coffee3: {
                    navn : 'Cappuccino',
                    beskrivelse : 'Espresso med dampet mælk og skum',
                    pris : '75kr',
                    img : './img/Cappucino.jpg'
                },
                coffee4: {
                    navn : 'Espresso',
                    beskrivelse : 'Espresso lavet af vores dygtigste baristaer',
                    pris : '50kr',
                    img : './img/Espresso.jpg'
                },
                coffee5: {
                    navn : 'Macchiato',
                    beskrivelse : 'Lækker espressodrik med skummet mælk og chokolade',
                    pris : '100kr',
                    img : './img/Macchiato.jpg'
                }
            }
            
        } else{
            return cofeeDB = localStorage.getItem('cofeeDB')
        }
    }      
}