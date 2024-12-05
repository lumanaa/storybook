import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{g as b,u as Y}from"./index-ClTrSTEU.js";/* empty css             */import{r as i}from"./index-DJO9vBfz.js";const N=()=>{const s=i.useRef(null),n=i.useRef(null),o=i.useRef(null);let c=!1;const d=i.useMemo(()=>({p1:"src/assets/HoverEffects/one.jpg",p2:"src/assets/HoverEffects/two.jpg",p3:"src/assets/HoverEffects/three.jpg",p4:"src/assets/HoverEffects/four.jpg",p5:"src/assets/HoverEffects/five.jpg",p6:"src/assets/HoverEffects/six.jpg"}),[]),m=i.useMemo(()=>({p1:"0 0",p2:"0 16%",p3:"0 32%",p4:"0 58%",p6:"0 74%",p5:"0 100%"}),[]),u=t=>{const r=s.current,a=n.current;if(!r||!a)return;const l=h(t,r);l!==c&&(c=l,b.to(a,{scale:c?1:0,duration:.3}))},p=t=>{const r=n.current;if(!r)return;const a=r.offsetWidth/2,l=r.offsetHeight/2;r.style.left=`${t.pageX-a}px`,r.style.top=`${t.pageY-l}px`},g=t=>{const r=o.current,a=t.id;if(!r)return;const l=d[a];l&&(r.style.backgroundImage=`url(${l})`),b.to(r,{duration:.4,backgroundPosition:m[a]||"0 0"})},h=(t,r)=>{const a=r.getBoundingClientRect();return t.pageX>=a.left&&t.pageX<=a.right&&t.pageY>=a.top&&t.pageY<=a.bottom},f=t=>{u(t);const r=s.current;r&&c&&Array.from(r.children).forEach(l=>{const v=l.getBoundingClientRect();t.pageX>=v.left&&t.pageX<=v.right&&t.pageY>=v.top&&t.pageY<=v.bottom&&(p(t),g(l))})};return i.useEffect(()=>(window.addEventListener("mousemove",f),()=>{window.removeEventListener("mousemove",f)}),[]),e.jsx("div",{className:"hover-container",children:e.jsx("div",{className:"hover-body",children:e.jsxs("div",{className:"img-body",children:[e.jsx("div",{className:"preview",ref:n,children:e.jsx("div",{className:"preview-img",ref:o})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"projects",ref:s,children:["p1","p2","p3","p4","p5","p6"].map(t=>e.jsxs("div",{className:"project",id:t,children:[e.jsx("div",{className:"client"}),e.jsx("div",{className:"location"}),e.jsx("div",{className:"service"}),e.jsx("div",{className:"year"})]},t))})})]})})})};N.__docgenInfo={description:"",methods:[],displayName:"HoverEffects"};const E=i.createContext(void 0);function _({children:s}){const[n,o]=i.useState("small");return e.jsx(E.Provider,{value:{size:n,setSize:o},children:s})}_.__docgenInfo={description:"",methods:[],displayName:"CursorManager",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const q=()=>{const s=i.useRef(null),n=i.useContext(E);return i.useEffect(()=>{const o=c=>{if(s.current){const{clientX:d,clientY:m}=c,u=d-s.current.clientWidth/2,p=m-s.current.clientHeight/2;s.current.style.transform=`translate3d(${u}px, ${p}px, 0)`}};return document.addEventListener("mousemove",o),()=>{document.removeEventListener("mousemove",o)}},[]),e.jsx("div",{className:`app-cursor ${n==null?void 0:n.size}`,ref:s})};q.__docgenInfo={description:"",methods:[],displayName:"CustomCursor"};const L=({img:s})=>{const n=i.useRef(null),o=i.useContext(E),[c,d]=i.useState(0),[m,u]=i.useState({x:50,y:50});return Y(()=>{b.set(".gallery-item-wrapper",{paddingTop:"600px"}),b.to(".gallery-item-wrapper",{paddingTop:"0px",ease:"power2.out",stagger:.2})},[]),i.useEffect(()=>{const p=h=>{var a;const{clientX:f,clientY:t}=h,r=(a=n.current)==null?void 0:a.getBoundingClientRect();if(r){const l=f-r.left,v=t-r.top;u({x:l/r.width*100,y:v/r.height*100})}},g=n.current;return g==null||g.addEventListener("mousemove",p),()=>{g==null||g.removeEventListener("mousemove",p)}},[]),e.jsx("div",{className:"gallery-item-wrapper",ref:n,onMouseEnter:()=>{d(25),o==null||o.setSize("hide")},onMouseLeave:()=>{d(0),o==null||o.setSize("small")},children:e.jsxs("div",{className:"gallery-item",children:[e.jsx("div",{className:"gallery-item-img sepia",style:{backgroundImage:`url(${s})`}}),e.jsx("div",{className:"gallery-item-img masked",style:{backgroundImage:`url(${s})`,clipPath:`circle(${c}% at ${m.x}% ${m.y}%)`}})]})})},H=({images:s,height:n})=>e.jsx("div",{className:"gallery-body",children:e.jsx("div",{className:"gallery",style:{"--height":n},children:s.map((o,c)=>e.jsx(L,{img:o},c))})});H.__docgenInfo={description:"",methods:[],displayName:"Gallery",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},height:{required:!0,tsType:{name:"string"},description:""}}};const P=({image1:s,image2:n,image3:o,height:c="600px"})=>{const d=[s,n,o].filter(Boolean);return e.jsxs(_,{children:[e.jsx(q,{}),e.jsx("div",{className:"hover-one-container",children:e.jsx("div",{className:"hover-one",children:e.jsx(H,{images:d,height:c})})})]})};P.__docgenInfo={description:"",methods:[],displayName:"ClipPath",props:{image1:{required:!1,tsType:{name:"string"},description:""},image2:{required:!1,tsType:{name:"string"},description:""},image3:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'600px'",computed:!1}}}};const X=({backgroundColor:s,color:n,image1:o,image2:c,image3:d})=>(i.useEffect(()=>{const m=document.querySelectorAll(".tooltip");m.forEach(p=>{p.style.backgroundColor=s||"white"}),m.forEach(p=>{p.style.color=n||"black"});const u=p=>{const g=`${p.clientX+10}px`,h=`${p.clientY+10}px`;m.forEach(f=>{f.style.top=h,f.style.left=g})};return window.addEventListener("mousemove",u),()=>{window.removeEventListener("mousemove",u)}}),e.jsxs("div",{className:"tooltip-body",children:[e.jsxs("div",{className:"box",children:[e.jsx("img",{src:o,alt:""}),e.jsx("span",{className:"tooltip",children:"pink"})]}),e.jsxs("div",{className:"box",children:[e.jsx("img",{src:c,alt:""}),e.jsx("span",{className:"tooltip",children:"green"})]}),e.jsxs("div",{className:"box",children:[e.jsx("img",{src:d,alt:""}),e.jsx("span",{className:"tooltip",children:"blue"})]})]}));X.__docgenInfo={description:"",methods:[],displayName:"MovingTooltip",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},image1:{required:!1,tsType:{name:"string"},description:""},image2:{required:!1,tsType:{name:"string"},description:""},image3:{required:!1,tsType:{name:"string"},description:""}}};const W={component:N,parameters:{layout:"fullscreen"}},x={args:{},render:()=>e.jsx(N,{})},j={args:{image1:"https://i.pinimg.com/1200x/f8/74/7e/f8747edbf677f9109ea088b170315f49.jpg",image2:"https://i.pinimg.com/736x/4c/1d/71/4c1d71ae311ae36df15a391a8a621de0.jpg",image3:"https://i.pinimg.com/736x/c8/a7/63/c8a763300bb0f8bf2cb08df690d590f0.jpg",height:"600px"},render:s=>e.jsx(P,{...s})},y={args:{backgroundColor:"white",color:"black",image1:"https://i.pinimg.com/736x/f7/52/2b/f7522b13f7dd4c3f4fb854235e01b57e.jpg",image2:"https://i.pinimg.com/736x/56/8e/2b/568e2b6d492115cc45c558d12e586f31.jpg",image3:"https://i.pinimg.com/736x/27/99/6a/27996a3ab1da1cf5a7341e32f3c88cdc.jpg"},render:s=>e.jsx(X,{...s})};var C,w,I;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <ImageHoverComponent />;
  }
}`,...(I=(w=x.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var M,T,k;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    image1: "https://i.pinimg.com/1200x/f8/74/7e/f8747edbf677f9109ea088b170315f49.jpg",
    image2: "https://i.pinimg.com/736x/4c/1d/71/4c1d71ae311ae36df15a391a8a621de0.jpg",
    image3: "https://i.pinimg.com/736x/c8/a7/63/c8a763300bb0f8bf2cb08df690d590f0.jpg",
    height: "600px"
  },
  render: args => {
    return <ClipPathComponent {...args} />;
  }
}`,...(k=(T=j.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var R,$,S;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    backgroundColor: "white",
    color: "black",
    image1: "https://i.pinimg.com/736x/f7/52/2b/f7522b13f7dd4c3f4fb854235e01b57e.jpg",
    image2: "https://i.pinimg.com/736x/56/8e/2b/568e2b6d492115cc45c558d12e586f31.jpg",
    image3: "https://i.pinimg.com/736x/27/99/6a/27996a3ab1da1cf5a7341e32f3c88cdc.jpg"
  },
  render: args => {
    return <MovingTooltipComponent {...args} />;
  }
}`,...(S=($=y.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};const O=["ImageHover","ClipPath","MovingTooltip"];export{j as ClipPath,x as ImageHover,y as MovingTooltip,O as __namedExportsOrder,W as default};