import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
const arrayOfStyles = getStyles()
const arrayOfSizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundStyle = arrayOfStyles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundSize = arrayOfSizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
//Lets you get cost with less than 3 selections
    //let totalCost = 0
    //if(foundMetal){totalCost += foundMetal.price}
    //if(foundStyle){totalCost += foundStyle.price}
    //if(foundSize){totalCost += foundSize.price}
  
   let totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return`
    <li>
        Order #${order.id} cost ${costString}
    </li>`
    
      
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
