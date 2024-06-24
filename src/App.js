import React from "react";
import ReactDOM from "react-dom/client";
// here React comes from Node_module

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const AppLayout=()=>{
  return (
    <div className ="app">       
      <Header />
      <Body />
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />,
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)
root.render(<RouterProvider router={appRouter} />);
  












// ------------------------------

// React.createElement=>object=>htmlElement(render)
//using react core
// const heading=React.createElement("h1",{id:"heading"},"Hellow React");
// console.log(heading);/ /object

//JSX-HTML-like or XMl-like syntax
//transpiled before it reaches the JS engine-Transpired by PARCEl=>it uses Babel package(convert jsx code so that react can understand)
//JSX=>Babel transpired it to React.createElement=>reactElement-JS Object =>htmlElement(render)

//React element
// const jsxHeading=(
// <h1 className="heading" tabIndex="5">
// React using jsx
// </h1>
// );



//React Component->class bases component-OLD and functional component-NEW

//React Functional Component=> functional that return jsx code or react code
// const element=<span>React element</span>

// const Title =()=>(
//     <h1 className="heading" tabIndex="5">
//         {element}
//     React using jsx
//     </h1>
//     );

// //Component Compositions
// const HeadingComponent=()=>(
//   <div id="container">
//    <Title/>
//    <Title></Title>
//    {Title()}
//  <h1>React  Functional Component</h1>
//  </div>  
// );

// const HeadingComponent2=()=> (
// <h1>React  Functional Component</h1>
// );
   
// const root=ReactDOM.createRoot(document.getElementById("root"));

// // root.render(jsxHeading)
// root.render(<HeadingComponent />);


/**
 * 
 * <div id ="parent">
 * <div id="child1">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * * <div id="child2">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div>
 * 
 * 
 * 
 * */ 

// const parent=React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child1"},
// [React.createElement("h1",{},"I am h1 tag"),
// React.createElement("h2",{},"I am h2 tag"),
// ]),
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"I am h1 tag"),
// React.createElement("h2",{},"I am h2 tag"),
// ])]);


// // const heading=React.createElement
// // ("h1",{id:"heading",xyz:"abc"},"Hello World from React Js");

// console.log(parent)//returns object

// const root=ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(parent)