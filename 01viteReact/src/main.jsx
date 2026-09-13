import React from 'react'
import { createRoot } from 'react-dom/client'

function Ret (){
    return(
        <>
        <p>Chai aur code || Abhishek Pant </p>
        </>
    )
}

const MainContainer ={
    type:"a",
    props:{
        id:"link",
        class:"link",
        href:"youtube.com"
    },
    value:"youtube"
}

const anotherElement=(
    <a href="https://google.com">Visit Google</a>
)

const reactElement=React.createElement(
      'a',
    {
    href:"https://google.com",
    target: "link"   
    },
    'click me'
)
  

createRoot(document.getElementById('root')).render(
    reactElement
  
)



//evaluated expresion kya hota hai  ,padh lena 
//{}
