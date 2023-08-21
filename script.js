let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant_btn=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let price=document.getElementsByClassName("price")
let deletee=document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")
for (let index = 0; index < heart_btn.length; index++) {
    //heart_btn like
    heart_btn[index].addEventListener("click",function(){
        if(heart_btn[index].style.color==="black"){
            heart_btn[index].style.color="red"
        }
        else{
            heart_btn[index].style.color="black"
        }
    })

    //Plus Button
    plus_btn[index].addEventListener("click",function(){
        Quant_btn[index].value=Number(Quant_btn[index].value)+1
        finalPrice.value=Number(finalPrice.value)+Number(price[index].textContent)

    })

    //minus Button
    minus_btn[index].addEventListener("click",function(){
        Quant_btn[index].value=Number(Quant_btn[index].value)-1
        finalPrice.value=Number(finalPrice.value)-Number(price[index].textContent)

    })

    deletee[index].addEventListener("click",function(){
        Item[index].style.display="none"
        
    })
    
       
}