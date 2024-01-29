function catagorizeFruit(name){
    switch(name){
        case "Apple":
        case "Orange":
        case "Mango":
            console.log(`${name} is a common fruit`)
            break;
        case "Pineapple":
        case "Strawberry":
        case "Watermelon":
            console.log(`${name} is a Lemon fruit`)
            break;
        default:
            console.log(`${name} is not a fruit`)
    }
}

catagorizeFruit("Apple");