import {menuArray} from './data.js'


const generalContainer = document.getElementById('products-container')
const OrderList = document.getElementById('order-list')
const pricesList = document.getElementById('prices-list')
const formBtn = document.getElementById('form-btn')
const popUpForm = document.getElementById('popUp-Card')
 const overlayScreen = document.getElementById('overlay')

let total = 0 
const cart = []







const products = menuArray.map(product=>{
    
       const html  = `
    
                            <div class="products" id="Pizza">
                                    
                                    <div class='info'>
                                    
                                    <h2 class="emoji">${product.emoji}</h2>

                                        <div class="info-product">
                                            <h4>${product.name}</h4>
                                            <p> ${product.ingredients}</p>
                                            <p>$${product.price}</p>
                                        </div>
                                        
                                    
                                    </div>
                                    
                                    
                                    
                                    <button class="add-button" id="product-${product.id}">+</button>
                                

                                </div>`

            return html
}).join('')


generalContainer.innerHTML = products

// const addButton = document.ge



document.addEventListener('click',function(e){
if(e.target.id && e.target.id.startsWith('product-')){

  
    const product = getProductforOrder(e.target.id)


    

    // const remove = getRemoveButtonId(e.target.dataset.index)
    


        cart.push(product)
    //   console.log(cart);
     total = cart.reduce((firstProduct, currentValue)=> firstProduct + currentValue.price,0)   
     console.log(total);
     console.log(cart);
     

       } 
     
    //   total = TotalPrices(cart)
     
      
    


      if(e.target.dataset.index){


         console.log(e.target.dataset.index)
         const index = Number(e.target.dataset.index);
         cart.splice(index,1);
         total = cart.reduce((firstProduct, currentValue)=> firstProduct + currentValue.price,0) 
         console.log(total);
         console.log(cart);
         
    
            
    }

    
     

 


    
   showOrder()
    

     pricesList.innerHTML = 
      
                    `
                     
                     <div  class='info-price'>
                         
                       <div class='info-price-general'>

                        <h4>Total Price: </h4>
                        <p>$${total}</p>
                       
                       </div>
                    
                        
                     
                     
                     
                        <button id= 'completeOrder-btn' class='completeOrder-btn'> Complete Order </button>
                        

                      
                     
                     </div>
                     
                     
                    
                     
                     `

      const completeOrderBtn =document.getElementById('completeOrder-btn')
     
      completeOrderBtn.addEventListener('click', function(){

      popUpForm.style.display ='block'
      overlayScreen.style.display='block'


})                 
      

      
    
//     if(e.target.dataset.index){

//   

//     const index = Number(e.target.dataset.index);
//     console.log(e.target.dataset.index);
//     total += cart.reduce((firstProduct, currentValue)=> firstProduct + currentValue.price,0)      
//     cart.splice(index,1);
    
//     // total = TotalPrices(cart)
     
      
    


//    }

    

   

   

 
  
}) 



const nameForm = document.getElementById('name')
const messageOrder = document.getElementById('messageOrderOnWay')

formBtn.addEventListener('click', function(){

    popUpForm.style.display ='none'
    overlayScreen.style.display='none'

    messageOrder.style.display = 'flex'

     messageOrder.innerHTML = `

     <h2 class="message-Order">Thanks, ${nameForm.value}! Your order is on its way!</h2>
     
     `


    
})



function getProductforOrder(id){

    
    const productElement = menuArray.filter(function(productId){
        


        return id === `product-${productId.id}`
    })[0]


    return productElement


}









function showOrder(){

 OrderList.innerHTML =''

    cart.forEach((product, index)=>{



        OrderList.innerHTML += 
                        `<div class="order"  id="Order-${product.id}">

                            <div class='info-order'>

                                <h4>${product.name}</h4>
                                <button class='remove-button' data-index="${index}">Remove</button>

                            </div>
                            
                            <p>$${product.price}</p>


                            
                           
                            
                        
                        </div>`
    })
   




 

    


    

}


















