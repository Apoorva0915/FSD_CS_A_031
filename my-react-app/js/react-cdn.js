const parent=document.getElementById("root");
const element=React.createElement("h1",{},"Shopping Cart")
const root= ReactDOM.createRoot(parent);
const item1=React.createElement("li",{},"item1")
const item2=React.createElement("li",{},"item2")
const item3=React.createElement("li",{},"item3")
root.rendeer([item1,item2,item3]);

function  Greeting({name,age,city}){}

Greeting.defaultProps