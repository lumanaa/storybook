import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as v}from"./index-DJO9vBfz.js";/* empty css             */import{F as C,a as q}from"./index-ClCvUHWG.js";import"./iconBase-DNSKKw1X.js";const f=({image1:s,image2:d,image3:n,image4:o})=>{const[,c]=v.useState(0),t=[{src:s,name:"Shinobu",desc:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{src:d,name:"Shogun",desc:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{src:n,name:"Zero Two",desc:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit."},{src:o,name:"Gojo",desc:"  Lorem, ipsum dolor sit amet consectetur adipisicing elit."}],g=()=>{var a;const i=document.querySelectorAll(".item");(a=document.querySelector(".slide"))==null||a.appendChild(i[0]),c(l=>(l+1)%t.length)},p=()=>{var a;const i=document.querySelectorAll(".item");(a=document.querySelector(".slide"))==null||a.prepend(i[i.length-1]),c(l=>(l-1+t.length)%t.length)};return e.jsx("div",{className:"carousel-body",children:e.jsxs("div",{className:"car-one-body",children:[e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"slide",children:t.map((i,a)=>e.jsx("div",{className:"item",style:{backgroundImage:`url(${i.src})`},children:e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"des",children:i.desc}),e.jsx("button",{children:"See More"})]})},a))}),e.jsxs("div",{className:"button",children:[e.jsx("button",{className:"prev",onClick:p,children:e.jsx(C,{})}),e.jsx("button",{className:"next",onClick:g,children:e.jsx(q,{})})]})]}),e.jsx("div",{id:"heart"})]})})};f.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{image1:{required:!1,tsType:{name:"string"},description:""},image2:{required:!1,tsType:{name:"string"},description:""},image3:{required:!1,tsType:{name:"string"},description:""},image4:{required:!1,tsType:{name:"string"},description:""}}};const N=({image1:s,image2:d,image3:n,image4:o,image5:c,image6:t,image7:g,image8:p})=>e.jsx("div",{className:"img-rotate-body",children:e.jsx("div",{className:"box",children:e.jsxs("div",{className:"img",children:[e.jsx("div",{className:"imgBx",style:{"--i":1},children:e.jsx("img",{src:s,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":2},children:e.jsx("img",{src:d,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":3},children:e.jsx("img",{src:n,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":4},children:e.jsx("img",{src:o,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":6},children:e.jsx("img",{src:c,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":7},children:e.jsx("img",{src:t,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":5},children:e.jsx("img",{src:g,alt:""})}),e.jsx("div",{className:"imgBx",style:{"--i":8},children:e.jsx("img",{src:p,alt:""})})]})})});N.__docgenInfo={description:"",methods:[],displayName:"CircularRotate",props:{image1:{required:!1,tsType:{name:"string"},description:""},image2:{required:!1,tsType:{name:"string"},description:""},image3:{required:!1,tsType:{name:"string"},description:""},image4:{required:!1,tsType:{name:"string"},description:""},image5:{required:!1,tsType:{name:"string"},description:""},image6:{required:!1,tsType:{name:"string"},description:""},image7:{required:!1,tsType:{name:"string"},description:""},image8:{required:!1,tsType:{name:"string"},description:""}}};const _={component:f,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={args:{image1:"https://i.pinimg.com/1200x/b7/8d/1f/b78d1f53b5d0ae2c51dede3452567578.jpg",image2:"https://i.pinimg.com/1200x/91/4b/e6/914be6165d58dcf47604b530b04a6982.jpg",image3:"https://i.pinimg.com/1200x/b1/40/ea/b140ea61473dd94f9ffe070bbf6b513c.jpg",image4:"https://i.pinimg.com/1200x/3c/68/9f/3c689f4856f990969e8d5c493083e64c.jpg"},render:s=>e.jsx(f,{...s})},m={args:{image1:"https://i.pinimg.com/1200x/20/75/90/20759031644a988b2552867c86fbf788.jpg",image2:"https://i.pinimg.com/1200x/ec/cb/eb/eccbeb24f932028bcba9e92a8f54cd50.jpg",image3:"https://i.pinimg.com/1200x/d0/9f/c1/d09fc1253de6ff67410d3d7b6474a3b1.jpg",image4:"https://i.pinimg.com/1200x/55/05/1e/55051edfe46fdfc4e6fd8e89dcc54452.jpg",image5:"https://i.pinimg.com/1200x/73/59/bd/7359bd9a8e13399a2798d91508d8028c.jpg",image6:"https://i.pinimg.com/1200x/3b/32/0a/3b320ae9054f35a0fde4e7ed1c43b695.jpg",image7:"https://i.pinimg.com/736x/64/84/59/648459ac59ffb5b1695ef2e3e138782d.jpg",image8:"https://i.pinimg.com/1200x/cd/8e/7e/cd8e7e8114355f456a8186d97b9f650a.jpg"},render:s=>e.jsx(N,{...s})};var x,b,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    image1: "https://i.pinimg.com/1200x/b7/8d/1f/b78d1f53b5d0ae2c51dede3452567578.jpg",
    image2: "https://i.pinimg.com/1200x/91/4b/e6/914be6165d58dcf47604b530b04a6982.jpg",
    image3: "https://i.pinimg.com/1200x/b1/40/ea/b140ea61473dd94f9ffe070bbf6b513c.jpg",
    image4: "https://i.pinimg.com/1200x/3c/68/9f/3c689f4856f990969e8d5c493083e64c.jpg"
  },
  render: args => {
    return <CarouselComponent {...args} />;
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var j,h,y;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    image1: "https://i.pinimg.com/1200x/20/75/90/20759031644a988b2552867c86fbf788.jpg",
    image2: "https://i.pinimg.com/1200x/ec/cb/eb/eccbeb24f932028bcba9e92a8f54cd50.jpg",
    image3: "https://i.pinimg.com/1200x/d0/9f/c1/d09fc1253de6ff67410d3d7b6474a3b1.jpg",
    image4: "https://i.pinimg.com/1200x/55/05/1e/55051edfe46fdfc4e6fd8e89dcc54452.jpg",
    image5: "https://i.pinimg.com/1200x/73/59/bd/7359bd9a8e13399a2798d91508d8028c.jpg",
    image6: "https://i.pinimg.com/1200x/3b/32/0a/3b320ae9054f35a0fde4e7ed1c43b695.jpg",
    image7: "https://i.pinimg.com/736x/64/84/59/648459ac59ffb5b1695ef2e3e138782d.jpg",
    image8: 'https://i.pinimg.com/1200x/cd/8e/7e/cd8e7e8114355f456a8186d97b9f650a.jpg'
  },
  render: args => {
    return <CirculatRotateComponent {...args} />;
  }
}`,...(y=(h=m.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const k=["CarouselOne","CircularRotate"];export{r as CarouselOne,m as CircularRotate,k as __namedExportsOrder,_ as default};
