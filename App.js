import React from "react";
import ReactDOM from "react-dom/client";
// here React comes from Node_module

const Header=()=>{
  return(
    <div className="header">
      <div>
        <img className="logo" src="https://images-platform.99static.com/dp8ehTneJPeFUiGc7OQFBtqSKrU=/460x460:1522x1522/500x500/top/smart/99designs-contests-attachments/132/132147/attachment_132147277" />
      </div>
      <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard={
//   backgroundColor:"#f0f0f0"
// };

// const RestrauntCard=(props)=>{
  // const RestrauntCard=({resName,cuisine})=>{
    
  const RestrauntCard=(props)=>{
    console.log(props);
 // const { resName,cuisine}=props;

  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_694784.JPG" />
      <h4>{resName}</h4>
      <h5>{cuisine}</h5>
      <h5>4.7 stars</h5>
      <h5>38 mins</h5>
    </div>
  )
  
};

const Body=()=>{
  return(
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        <RestrauntCard 
        //passing props to the functional component
        resName="KFC"
        cuisine="snack,fast food,burger"
        />
        <RestrauntCard 
        resName="Biryani house"
        cuisine="Asian,North Indian"
        />
      </div>

    </div>
    

  );

};



const AppLayout=()=>{
  return (
    <div className ="app">
      <Header />
      <Body />
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)
root.render(<AppLayout />);












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