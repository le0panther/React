function customRender(element,Container){
    const dom=document.createElement(element.type)
    dom.innerHTML=element.value
    for (const key in element.props) {
        dom.setAttribute(key,element.props[key])
    }
    Container.appendChild(dom)

}

const reactElement =document.querySelector("#root")

const mainContainer ={
    type:"a",
    props:{
        id:"link",
        class:"link",
        href:"youtube.com"
    },
    value:"youtube"
}

customRender(mainContainer,reactElement)

