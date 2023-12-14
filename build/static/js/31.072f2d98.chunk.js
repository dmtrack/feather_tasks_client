"use strict";(self.webpackChunkfeather_tasks=self.webpackChunkfeather_tasks||[]).push([[31],{7617:(e,n,t)=>{t.d(n,{Z:()=>T});var r,o,s,i,a,l,c=t(2791),d=t(7689),u=t(1134),p=t(4914),h=t(140),m=t(3158),x=t(8820),g=t(168),f=t(9450);const b=f.ZP.div(r||(r=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n"]))),v=f.ZP.div(o||(o=(0,g.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n"]))),y=f.ZP.input(s||(s=(0,g.Z)(["\n    width: 100%;\n    padding: 10px;\n    outline: none;\n    border: 1px solid;\n    border-radius: 3px;\n    border-color: ",";\n    font-family: ",";\n    font-weight: 400;\n    font-size: ",";\n    transition: ",";\n\n    &:focus {\n        border-color: ",";\n        box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.07);\n    }\n\n    &:focus ~ label,\n    &:valid ~ label,\n    &:disabled ~ label {\n        transform: translateX(-10px) translateY(-32px);\n        font-size: ",";\n        color: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.colors.grey}),(e=>{let{theme:n}=e;return n.fonts.text}),(e=>{let{theme:n}=e;return n.fontSizes.text}),(e=>{let{theme:n}=e;return n.effects.transition}),(e=>{let{theme:n}=e;return n.colors.primaryColor}),(e=>{let{theme:n}=e;return n.fontSizes.smallText}),(e=>{let{theme:n}=e;return n.colors.text})),j=f.ZP.button.attrs({type:"button"})(i||(i=(0,g.Z)(["\n    position: absolute;\n    border: none;\n    outline: none;\n    background-color: ",";\n    width: 30px;\n    right: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: ",";\n\n    &:hover {\n        opacity: ",";\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n        color: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.colors.transparent}),(e=>{let{theme:n}=e;return n.effects.transition}),(e=>{let{theme:n}=e;return n.effects.hoverOpacity}),(e=>{let{theme:n}=e;return n.colors.grey})),P=f.ZP.label(a||(a=(0,g.Z)(["\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    padding: 10px;\n    display: inline-block;\n    color: ",";\n    font-size: ",";\n    transition: ",";\n    pointer-events: none;\n"])),(e=>{let{theme:n}=e;return n.colors.grey}),(e=>{let{theme:n}=e;return n.fontSizes.text}),(e=>{let{theme:n}=e;return n.effects.transition})),Z=f.ZP.span(l||(l=(0,g.Z)(["\n    font-size: ",";\n    color: ",";\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n    text-align: end;\n    min-height: 16px;\n"])),(e=>{let{theme:n}=e;return n.fontSizes.smallNoteText}),(e=>{let{theme:n}=e;return n.colors.red}));var S=t(3329);function k(e){let{type:n,placeholderText:t,name:r,minLength:o,maxLength:s,required:i,pattern:a,errors:l,disabled:d,register:u,clearErrors:p}=e;const[h,m]=(0,c.useState)(!1);return(0,S.jsxs)(b,{children:[(0,S.jsxs)(v,{children:[(0,S.jsx)(y,{type:"password"!==r?n:h?"text":"password",required:!0,id:r,disabled:d,...u(r,{required:i,minLength:o,maxLength:s,pattern:a,onChange:()=>l&&p(r)})}),(0,S.jsx)(P,{children:t}),"password"!==r?null:(0,S.jsx)(j,{onClick:()=>m((e=>!e)),children:h?(0,S.jsx)(x.I0d,{}):(0,S.jsx)(x.Zju,{})})]}),(0,S.jsx)(Z,{children:null===l||void 0===l?void 0:l.message})]})}k.defaultProps={placeholderText:"",errors:void 0,disabled:!1,maxLength:void 0,minLength:void 0,required:void 0,pattern:void 0};const w=k;var E=t(2760),C=t(631);function L(e){let{keyPrefix:n,isLoadingAuth:t,onSubmit:r}=e;const o=(0,d.TH)(),s=(0,p.C)(h.PR),{register:i,handleSubmit:a,clearErrors:l,formState:{errors:c},trigger:x}=(0,u.cI)({mode:"onSubmit",reValidateMode:"onSubmit",defaultValues:null!==s&&void 0!==s?s:E.qZ}),g=Object.values(c).every((e=>!(null!==e&&void 0!==e&&e.message)));return(0,S.jsxs)(C.l0,{"aria-label":"form",noValidate:!0,autoComplete:"off",onSubmit:a(r),children:["/signin"!==o.pathname&&(0,S.jsx)(w,{type:"text",name:"name",register:i,clearErrors:l,errors:c.name,placeholderText:"name",disabled:t,pattern:{value:E.wD,message:"name should contain more than 3 characters"},minLength:{value:3,message:"name should contain more than 3 characters"},required:"name cant be empty"}),E.R3.slice(1).map((e=>(0,S.jsx)(w,{type:e.type,name:e.name,placeholderText:e.name,required:"".concat(e.name," cant be empty"),pattern:{...e.pattern,message:"password should contain only letters(eng), digits and ! @ # ~ &"},minLength:{...e.minLength,message:"should contain more than ".concat(e.minLength," characters")},disabled:t,errors:c[e.name],register:i,clearErrors:l},e.id))),(0,S.jsx)(m.Z,{type:"submit",disabled:t||!g,children:n})]})}const T=(0,c.memo)(L)},9977:(e,n,t)=>{t.d(n,{Z:()=>L});var r,o,s,i,a,l,c,d=t(2791),u=t(4549),p=t(3158),h=t(9135),m=t(4914),x=t(7766),g=t(168),f=t(9450),b=t(3122),v=t(6856);const y=(0,f.ZP)(b.E.div).attrs((e=>{let{$variants:n}=e;return{initial:"initial",animate:"animate",exit:"exit",variants:n}}))(r||(r=(0,g.Z)(["\n    position: fixed;\n    max-width: 450px;\n    width: 100%;\n    top: 0;\n    z-index: 8;\n    justify-self: center;\n"]))),j=f.ZP.div(o||(o=(0,g.Z)(["\n    background-color: ",";\n    padding: 25px;\n    margin: 0 10px;\n    border-radius: 10px;\n    z-index: 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n"])),(e=>{let{$backgroundColor:n,theme:t}=e;return null!==n&&void 0!==n?n:t.colors.backgroundBlue})),P=f.ZP.p(s||(s=(0,g.Z)(["\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n    text-align: center;\n"])),(e=>{let{theme:n}=e;return n.fontsWeight.regular}),(e=>{let{theme:n}=e;return n.fontSizes.text}),(e=>{let{theme:n}=e;return n.colors.white})),Z=f.ZP.div(i||(i=(0,g.Z)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n"]))),S=(0,f.ZP)(v.FU5)(a||(a=(0,g.Z)([""]))),k=f.ZP.div(l||(l=(0,g.Z)(["\n    width: 95%;\n    height: 5px;\n    position: absolute;\n    top: 85%;\n    background-color: ",";\n"])),(e=>{let{theme:n}=e;return n.colors.transparent})),w=(0,f.ZP)(b.E.div).attrs((e=>{let{$variants:n}=e;return{initial:"initial",animate:"animate",exit:"exit",variants:n}}))(c||(c=(0,g.Z)(["\n    background-color: ",";\n    height: 5px;\n    opacity: 0.4;\n    border-radius: 0 0 5px 5px;\n"])),(e=>{let{theme:n}=e;return n.colors.backgroundWhite}));var E=t(3329);function C(e){let{isPopupShown:n,setPopupShown:t,text:r,backgroundColor:o}=e;const s=(0,m.T)();return(0,d.useEffect)((()=>{n&&setTimeout((()=>{s(t(!1))}),3e3)}),[n]),(0,E.jsx)(u.M,{children:n&&(0,E.jsx)(y,{$variants:h.z_,children:(0,E.jsxs)(j,{$backgroundColor:o,children:[(0,E.jsx)(P,{children:r}),(0,E.jsx)(Z,{children:(0,E.jsx)(p.Z,{type:"button",width:"30px",backgroundColor:x.Z.colors.transparent,callback:()=>s(t(!1)),children:(0,E.jsx)(S,{})})}),(0,E.jsx)(k,{children:(0,E.jsx)(w,{$variants:h.nj})})]})})})}C.defaultProps={backgroundColor:void 0,text:""};const L=(0,d.memo)(C)},4914:(e,n,t)=>{t.d(n,{C:()=>s,T:()=>o});var r=t(5048);const o=()=>(0,r.I0)(),s=r.v9},9031:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(2791),o=t(7689),s=t(9135),i=t(6589),a=t(140),l=t(653),c=t(4914);const d=()=>{const e=(0,c.C)(a.PR),n=(0,c.C)(a.AI),t=(0,c.C)(a.nX),s=(0,c.C)(a.v9),[d,u]=(0,r.useState)(!1),p=(0,c.T)(),h=(0,o.s0)(),[m,{isLoading:x,isError:g,error:f}]=(0,i.O)(),[b,{isLoading:v,isSuccess:y}]=(0,i.u)(),j=(0,r.useCallback)((async e=>{await m(e)}),[]),P=(0,r.useCallback)((async()=>{if(e){const{name:n,...t}=e;await b(t)}}),[e]);return(0,r.useEffect)((()=>{P()}),[e]),(0,r.useEffect)((()=>{t&&p((0,l.SL)(!0))}),[t]),(0,r.useEffect)((()=>{g&&p((0,l.mX)(!0))}),[g]),(0,r.useEffect)((()=>{s&&h("/projects")}),[s]),(0,r.useEffect)((()=>{(v||x)&&u(!0),(g||y)&&u(!1)}),[v,x,g,y]),{isErrorNotificationPopupOpen:n,isLoadingAuth:d,signUpErrorMessage:f,onSubmit:j}};var u=t(7617),p=t(3158),h=t(3237),m=t(9977),x=t(631),g=t(7766),f=t(3329);function b(){const e=(0,o.s0)(),{isErrorNotificationPopupOpen:n,isLoadingAuth:t,signUpErrorMessage:r,onSubmit:i}=d();return(0,f.jsxs)(x.rS,{children:[(0,f.jsxs)(x.n5,{children:[(0,f.jsx)(x.ph,{children:(0,f.jsx)(p.Z,{type:"button",width:"30px",animation:s.Ye,backgroundColor:g.Z.colors.transparent,disabled:t,callback:()=>e(-1),children:(0,f.jsx)(x.JK,{$isDisabled:t})})}),(0,f.jsx)(x.Dx,{children:"Sign Up"}),(0,f.jsx)(u.Z,{keyPrefix:"signUp",onSubmit:i,isLoadingAuth:t}),(0,f.jsx)(x.P4,{children:(0,f.jsx)(x.xh,{children:"or"})}),(0,f.jsx)(x.gM,{children:(0,f.jsx)(x.Fg,{to:"/signin",children:"Already have an account? Sign In"})})]}),t&&(0,f.jsx)(h.Z,{}),r&&(0,f.jsx)(m.Z,{isPopupShown:n,setPopupShown:l.mX,text:"This login already exists",backgroundColor:g.Z.colors.pink})]})}const v=(0,r.memo)(b)},6589:(e,n,t)=>{t.d(n,{O:()=>l,u:()=>a});var r=t(3934),o=t(2306),s=t(653);const i=t(1955).Z.injectEndpoints({endpoints:e=>({signUp:e.mutation({query:e=>({...(0,r.R)("".concat(o.A.signUp),o.f.post),body:e,headers:{"Content-type":"application/json",accept:"application/json"}}),onQueryStarted:async(e,n)=>{let{dispatch:t,queryFulfilled:r}=n;try{await r,t((0,s.av)(e))}catch(o){if(o instanceof Error)throw o}},transformResponse:e=>{let{_id:n,...t}=e;return t},transformErrorResponse:e=>{let{status:n}=e;return 409===n?"signUp.error":"authorization.error"}}),signIn:e.mutation({query:e=>({...(0,r.R)("".concat(o.A.signIn),o.f.post),headers:{"Content-type":"application/json"},body:e}),onQueryStarted:async(e,n)=>{let{dispatch:t,queryFulfilled:r}=n;try{t((0,s.YO)((await r).data))}catch(o){if(o instanceof Error)throw o}},transformResponse:e=>{let{token:n}=e;return{token:n,...(0,r.a)(n)}},transformErrorResponse:e=>{let{status:n}=e;return 401===n?"signIn.error":"authorization.error"}})})}),{useSignInMutation:a,useSignUpMutation:l}=i},140:(e,n,t)=>{t.d(n,{AI:()=>l,PR:()=>s,nX:()=>i,v9:()=>a});var r=t(873);const o=e=>e.user,s=(0,r.P1)(o,(e=>e.user)),i=(0,r.P1)(o,(e=>e.authUser)),a=(0,r.P1)(o,(e=>e.isLoggedIn)),l=((0,r.P1)(o,(e=>e.isDeleteUserPopupOpen)),(0,r.P1)(o,(e=>e.isLogoutUserPopupOpen)),(0,r.P1)(o,(e=>e.isErrorNotificationPopupOpen)));(0,r.P1)(o,(e=>e.isTokenInvalidPopupOpen))},2306:(e,n,t)=>{t.d(n,{A:()=>r,f:()=>o});var r=function(e){return e.signIn="auth/signin",e.signUp="auth/signup",e.users="users/",e.boards="boards/",e.boardsSet="boardsSet/",e.columns="columns/",e.columnsSet="columnsSet/",e.tasks="tasks/",e.tasksSet="tasksSet/",e.file="file/",e.points="points/",e}(r||{}),o=function(e){return e.get="GET",e.post="POST",e.patch="PATCH",e.put="PUT",e.delete="DELETE",e}(o||{})},3934:(e,n,t)=>{t.d(n,{R:()=>r,a:()=>o});const r=function(e,n){return{url:e,method:n,params:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}}},o=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(window.atob(n).split("").map((e=>"%".concat("00".concat(e.charCodeAt(0).toString(16)).slice(-2)))).join("")),r=JSON.parse(t);return{_id:r.id,exp:r.exp}}}}]);
//# sourceMappingURL=31.072f2d98.chunk.js.map