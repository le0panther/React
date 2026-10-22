function customRenderer(element, Container){
    const child=document.createElement(element.type)
    child.innerHTML=element.value
    for(const key in element.props){
        child.setAttribute(key,element.props[key])
    }
    Container.appendChild(child)
}

const mainContainer= document.querySelector("#root")

const rootElement={
    type:"h1",
    props:{
        id:"h1",
        class:"h1"},
    value:"customReact"
}

customRenderer(rootElement,mainContainer)

