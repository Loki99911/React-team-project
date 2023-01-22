"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[570],{5214:function(n,e,t){t.d(e,{Z:function(){return d}});t(2791);var i,a=t(168),o=t(6444).ZP.div(i||(i=(0,a.Z)(["\n  position: absolute;\n  z-index: -1;\n  top: 56px;\n  margin: 0 auto;\n  width: 320px;\n  height: 296px;\n  background-color: #f5f6fb;\n  border-radius: 0 0 0 112px;\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    height: 527px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n  }\n"]))),r=t(184),d=function(){return(0,r.jsx)(o,{})}},2570:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var i=t(5214),a=(t(2791),t(5705)),o=t(6429),r=t.n(o),d=t(9434);var p,l,s,c,f,m,g,h,x,b=t.p+"static/media/google.d64f9163b8f61487544747b482817a75.svg",u=t(8839),w=t(168),k=t(6444),v=k.ZP.div(p||(p=(0,w.Z)(["\n  font-family: 'Roboto';\n  font-style: normal;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* width: 425px; */\n  padding: 40px 20px;\n  margin-top: 50px;\n  /* height: 496px; */\n\n  border-radius: 30px;\n  background-color: #ffffff;\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  @media screen and (min-width: 768px) {\n    width: 425px;\n    /* height: 550px; */\n    padding: 55px 85px;\n    margin-top: 80px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-top: 0;\n    margin-left: 160px;\n  }\n"]))),C=(k.ZP.p(l||(l=(0,w.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.16;\n  letter-spacing: 0.04em;\n"]))),k.ZP.form(s||(s=(0,w.Z)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.2;\n  letter-spacing: 0.04em;\n  color: #eb5757;\n"])))),Y=k.ZP.label(c||(c=(0,w.Z)(["\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.16;\n  letter-spacing: 0.04em;\n  color: #000000;\n\n  margin-bottom: 12px;\n  &:last-of-type {\n    margin-top: 32px;\n  }\n"]))),E=k.ZP.input(f||(f=(0,w.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.04em;\n  background-color: #f6f7fb;\n  border: none;\n  width: 100%;\n  height: 52px;\n  padding: 0 20px;\n  border-radius: 30px;\n"]))),Z=k.ZP.div(m||(m=(0,w.Z)(["\n  display: flex;\n  gap: 15px;\n  margin-top: 40px;\n"]))),T=k.ZP.button(g||(g=(0,w.Z)(["\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  color: #52555f;\n  background-color: #f5f6fb;\n  height: 44px;\n  border: none;\n  border-radius: 16px;\n  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover {\n    color: #ffffff;\n    background-color: #ff751d;\n  }\n"]))),y=k.ZP.a(h||(h=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 19px;\n  margin: 0;\n  background-color: #f6f7fb;\n  border: none;\n  border-radius: 26px;\n  transition: background-color 250ms linear;\n  &:hover {\n    background-color: #ff751d;\n  }\n"]))),A=k.ZP.span(x||(x=(0,w.Z)(["\n  display: flex;\n  position: absolute;\n  top:80px;\n  &:last-of-type {\n    top:190px;\n  }\n\n"]))),D=t(184),R=function(){var n=(0,d.I0)(),e=r().generate(),t=r().generate();return(0,D.jsxs)(v,{children:[(0,D.jsx)("p",{children:"You can log in with your Google Account:"}),(0,D.jsx)(y,{type:"button",href:"https://kapusta-backend.goit.global/auth/google",children:(0,D.jsx)("img",{src:b,alt:"google"})}),(0,D.jsx)("p",{children:"Or log in using an email and password, after registering:"}),(0,D.jsx)(a.J9,{initialValues:{email:"",password:""},validate:function(n){var e={};return n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.email)||(e.email="Invalid email address"):e.email="This is a required field",n.password||(e.password="This is a required field"),e},onSubmit:function(e){n((0,u.Ib)(e))},children:function(i){var a=i.values,o=i.errors,r=i.touched,d=i.handleChange,p=i.handleBlur,l=i.handleSubmit,s=i.isSubmitting;return(0,D.jsxs)(C,{onSubmit:l,children:[(0,D.jsx)(Y,{htmlFor:e,children:"Email:"}),(0,D.jsx)(E,{type:"email",name:"email",onChange:d,onBlur:p,value:a.email,id:e,placeholder:"your@email.com"}),(0,D.jsx)(A,{children:o.email&&r.email&&o.email}),(0,D.jsx)(Y,{htmlFor:t,children:"Password:"}),(0,D.jsx)(E,{type:"password",name:"password",onChange:d,onBlur:p,value:a.password,id:t,placeholder:"Password (min 8 characters)",pattern:"[0-9A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0404\u0454\u0407\u0457!@#$%^&*]{8,}"}),(0,D.jsx)(A,{children:o.password&&r.password&&o.password}),(0,D.jsxs)(Z,{children:[(0,D.jsx)(T,{type:"submit",disabled:s,children:"Log in".toUpperCase()}),(0,D.jsx)(T,{type:"button",disabled:s,onClick:function(){n((0,u.y1)(a))},children:"Registration".toUpperCase()})]})]})}})]})};var K=t.p+"static/media/Kapu$ta_mobile.34366f6b6ec8fd1a03daf780e7ddb3bc.svg";var F=t.p+"static/media/Kapu$ta_tablet.b46840fd1329105fc2e40d91ea63b346.svg";var q,I,H=t.p+"static/media/Kapu$ta_desktop.558b646fc02fc6b4a209e561d24bd10e.svg",z=t(9980),S=t(9792),N=t(479),j=t(9111),Q=k.ZP.div(q||(q=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  flex-grow: 1;\n  /* padding: 85px 20px auto 20px; */\n  padding-top: 85px;\n  padding-left: 20px;\n  padding-bottom: auto;\n  padding-right: 20px;\n\n  @media screen and (min-width: 768px) {\n    /* padding: 80px 170px auto 170px; */\n    padding-top: 80px;\n    padding-left: 170px;\n    padding-right: 170px;\n    background-image: url(","), url(",");\n    background-position: top 30px right 0px, bottom 55px left 100px;\n    background-repeat: no-repeat;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      screen and (min-resolution: 192dpi),\n      (-webkit-min-device-pixel-ratio: 2),\n      screen and (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    flex-direction: row;\n    justify-content: right;\n    align-items: center;\n    /* padding: 115px 90px 125px 90px; */\n    padding-top: 115px;\n    padding-left: 90px;\n    padding-bottom: 125px;\n    padding-right: 170px;\n    background-position: top 30px right 0px, bottom 50px left 100px;\n  }\n"])),z,N,S,j),O=k.ZP.div(I||(I=(0,w.Z)(["\n  display: flex;\n"]))),B=t(2500);function M(){var n=(0,B.n)(),e=n.isMobile,t=n.isDesktop,a=n.isTablet;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i.Z,{}),(0,D.jsxs)(Q,{children:[e&&(0,D.jsx)(O,{children:(0,D.jsx)("img",{src:K,alt:"logo",className:"animate__animated animate__fadeInLeft"})}),a&&(0,D.jsx)(O,{children:(0,D.jsx)("img",{src:F,alt:"logo",className:"animate__animated animate__fadeInLeft"})}),t&&(0,D.jsx)(O,{children:(0,D.jsx)("img",{src:H,alt:"logo",className:"animate__animated animate__fadeInLeft"})}),(0,D.jsx)(R,{})]})]})}},9980:function(n,e,t){n.exports=t.p+"static/media/BgDesktopReg_1.a8b88f9bf35a9beb0d06.png"},9792:function(n,e,t){n.exports=t.p+"static/media/BgDesktopReg_2.51875badfe500e939969.png"},479:function(n){n.exports="data:image/png;base64,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"},9111:function(n,e,t){n.exports=t.p+"static/media/BgTablet_2.4854ba5268597a2d6518.png"}}]);
//# sourceMappingURL=570.4f41639b.chunk.js.map