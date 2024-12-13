import{j as n}from"./jsx-runtime-CkxqCPlQ.js";/* empty css             */import{r as p}from"./index-DJO9vBfz.js";const b=({variant:e,backgroundColor:t="white",children:o,color:s,disabled:i,size:a})=>{const m=i?"disabled":"";return n.jsx("button",{type:"button",className:`button button-${e}  button-${m} button-${a}`,style:{backgroundColor:t,color:s},children:o})};b.__docgenInfo={description:"",methods:[],displayName:"ButtonComponent",props:{backgroundColor:{defaultValue:{value:'"white"',computed:!1},required:!1}}};const g=({variant:e,children:t,disabled:o,size:s,hoverColor:i="#0f0"})=>{const a=p.useRef(null);p.useEffect(()=>{const r=a.current,f=x=>{if(r){const y=r.getBoundingClientRect(),k=x.clientX-y.left,E=x.clientY-y.top;r==null||r.style.setProperty("--x",k+"px"),r==null||r.style.setProperty("--y",E+"px")}};return r&&r.addEventListener("mousemove",f),()=>{r&&r.removeEventListener("mousemove",f)}},[]);const m=o?"disabled":"";return n.jsx("div",{className:"buttons-body",children:n.jsx("div",{ref:a,className:`btn-one btn-one-${e} btn-one-${m} btn-one-${s}`,style:{"--clr":i},children:n.jsx("span",{children:t})})})};g.__docgenInfo={description:"",methods:[],displayName:"ButtonOne",props:{hoverColor:{defaultValue:{value:'"#0f0"',computed:!1},required:!1}}};const v=({children:e,color:t,variant:o})=>n.jsx("div",{className:`btn-two btn-${o}`,style:{"--clr":t},children:e});v.__docgenInfo={description:"",methods:[],displayName:"ButtonTwoComponent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!0,tsType:{name:"union",raw:'"primary" | "one" | "two"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"one"'},{name:"literal",value:'"two"'}]},description:""},color:{required:!0,tsType:{name:"string"},description:""}}};const $=({children:e,color:t})=>{const[o,s]=p.useState("idle"),i=()=>{s("onclic"),setTimeout(()=>{s("validate"),setTimeout(()=>{s("idle")},1250)},2250)},a=e;return n.jsx("div",{className:"submit-container",style:{"--clr":t},children:n.jsx("button",{className:o,onClick:i,"data-btn-text":a==null?void 0:a.toString(),"data-icon":o==="validate"?"✔":""})})};$.__docgenInfo={description:"",methods:[],displayName:"SubmitBtn",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const V={component:b,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{options:["primary","one","two"],control:{type:"inline-radio"}},size:{options:["small","medium","large"],control:{type:"inline-radio"}},color:{control:{type:"color"}},hoverColor:{control:{type:"color"},if:{arg:"variant",eq:"one"}},backgroundColor:{control:{type:"color"},if:{arg:"variant",eq:"primary"}},disabled:{control:{type:"boolean"},defaultValue:!1}}},c={args:{variant:"primary",btnText:"Button",backgroundColor:"white",disabled:!1,color:"#2d2d2d",size:"medium"},render:({variant:e,btnText:t,...o})=>{switch(e){case"one":return n.jsx(g,{...o,variant:e,children:t});case"two":return n.jsx(v,{...o,variant:e,children:t});default:return n.jsx(b,{...o,variant:e,children:t})}}},u={args:{btnText:"Button",size:"medium",color:"#999",disabled:!1,variant:"one",hoverColor:"#0f0"},render:({btnText:e,...t})=>n.jsx(g,{...t,children:e})},d={args:{btnText:"Button",variant:"two",color:"#1abc9c"},render:({btnText:e,...t})=>n.jsx(v,{...t,children:e})},l={args:{btnText:"Button",color:"#41c948"},render:({btnText:e,...t})=>n.jsx($,{...t,children:e})};var B,T,h;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(h=(T=c.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var C,w,j;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,S,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var O,_,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    btnText: "Button",
    color: "#41c948"
  },
  render: ({
    btnText,
    ...args
  }) => {
    return <SubmitBtn {...args}>{btnText}</SubmitBtn>;
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const L=["Primary","ButtonOne","ButtonTwo","SubmitButton"];export{u as ButtonOne,d as ButtonTwo,c as Primary,l as SubmitButton,L as __namedExportsOrder,V as default};
