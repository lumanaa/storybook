import{j as o}from"./jsx-runtime-CkxqCPlQ.js";/* empty css             */import{r as g}from"./index-DJO9vBfz.js";const m=({variant:e,backgroundColor:n="white",children:r,color:c,disabled:l,size:a})=>{const d=l?"disabled":"";return o.jsx("button",{type:"button",className:`button button-${e}  button-${d} button-${a}`,style:{backgroundColor:n,color:c},children:r})};m.__docgenInfo={description:"",methods:[],displayName:"ButtonComponent",props:{backgroundColor:{defaultValue:{value:'"white"',computed:!1},required:!1}}};const p=({variant:e,children:n,disabled:r,size:c,hoverColor:l="#0f0"})=>{const a=g.useRef(null);g.useEffect(()=>{const t=a.current,v=f=>{if(t){const y=t.getBoundingClientRect(),R=f.clientX-y.left,_=f.clientY-y.top;t==null||t.style.setProperty("--x",R+"px"),t==null||t.style.setProperty("--y",_+"px")}};return t&&t.addEventListener("mousemove",v),()=>{t&&t.removeEventListener("mousemove",v)}},[]);const d=r?"disabled":"";return o.jsx("div",{className:"buttons-body",children:o.jsx("div",{ref:a,className:`btn-one btn-one-${e} btn-one-${d} btn-one-${c}`,style:{"--clr":l},children:o.jsx("span",{children:n})})})};p.__docgenInfo={description:"",methods:[],displayName:"ButtonOne",props:{hoverColor:{defaultValue:{value:'"#0f0"',computed:!1},required:!1}}};const b=({children:e,color:n,variant:r})=>o.jsx("div",{className:`btn-two btn-${r}`,style:{"--clr":n},children:e});b.__docgenInfo={description:"",methods:[],displayName:"ButtonTwoComponent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!0,tsType:{name:"union",raw:'"primary" | "one" | "two"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"one"'},{name:"literal",value:'"two"'}]},description:""},color:{required:!0,tsType:{name:"string"},description:""}}};const z={component:m,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{options:["primary","one","two"],control:{type:"inline-radio"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},color:{control:{type:"color"}},hoverColor:{control:{type:"color"},if:{arg:"variant",eq:"one"}},backgroundColor:{control:{type:"color"},if:{arg:"variant",eq:"primary"}},disabled:{control:{type:"boolean"},defaultValue:!1}}},s={args:{variant:"primary",btnText:"Button",backgroundColor:"white",disabled:!1,color:"#2d2d2d",size:"medium"},render:({variant:e,btnText:n,...r})=>{switch(e){case"one":return o.jsx(p,{...r,variant:e,children:n});case"two":return o.jsx(b,{...r,variant:e,children:n});default:return o.jsx(m,{...r,variant:e,children:n})}}},i={args:{btnText:"Button",size:"medium",color:"#999",disabled:!1,variant:"one",hoverColor:"#0f0"},render:({btnText:e,...n})=>o.jsx(p,{...n,children:e})},u={args:{btnText:"Button",variant:"two",color:"#1abc9c"},render:({btnText:e,...n})=>o.jsx(b,{...n,children:e})};var x,B,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    btnText: "Button",
    backgroundColor: "white",
    disabled: false,
    color: "#2d2d2d",
    size: "medium"
  },
  render: ({
    variant,
    btnText,
    ...args
  }) => {
    switch (variant) {
      case "one":
        return <ButtonOneComponent {...args} variant={variant}>\r
            {btnText}\r
          </ButtonOneComponent>;
      case "two":
        return <ButtonTwoComponent {...args} variant={variant}>\r
            {btnText}\r
          </ButtonTwoComponent>;
      default:
        return <ButtonComponent {...args} variant={variant}>\r
            {btnText}\r
          </ButtonComponent>;
    }
  }
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var h,w,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    btnText: "Button",
    size: "medium",
    color: "#999",
    disabled: false,
    variant: "one",
    // Add the variant here to avoid missing prop error
    hoverColor: "#0f0"
  },
  render: ({
    btnText,
    ...args
  }) => {
    // Conditionally render ButtonComponent or ButtonOne based on variant
    return <ButtonOneComponent {...args}>{btnText}</ButtonOneComponent>;
  }
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var j,O,N;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    btnText: "Button",
    variant: "two",
    color: "#1abc9c"
  },
  render: ({
    btnText,
    ...args
  }) => {
    return <ButtonTwoComponent {...args}>{btnText}</ButtonTwoComponent>;
  }
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const k=["Primary","ButtonOne","ButtonTwo"];export{i as ButtonOne,u as ButtonTwo,s as Primary,k as __namedExportsOrder,z as default};
