import{_ as t,m as e,o as l,a,w as o,h as s,e as n,g as i,p as r,r as c,d as u,n as d,b as h,f,t as g,i as b,s as y,q as p,u as _}from"./index-24046cc3.js";import{r as k,_ as C}from"./uni-app.es.a6413866.js";const m=t=>"number"==typeof t?t+"px":t;const v=t({name:"UniNavBar",components:{statusBar:t({name:"UniStatusBar",data:()=>({statusBarHeight:20}),mounted(){this.statusBarHeight=e().statusBarHeight+"px"}},[["render",function(t,e,r,c,u,d){const h=i;return l(),a(h,{style:n({height:u.statusBarHeight}),class:"uni-status-bar"},{default:o((()=>[s(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-6031795b"]])},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return m(this.height)},leftIconWidth(){return m(this.leftWidth)},rightIconWidth(){return m(this.rightWidth)}},mounted(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}},[["render",function(t,e,y,p,_,m){const v=r("status-bar"),x=k(c("uni-icons"),C),B=i,S=b;return l(),a(B,{class:d(["uni-navbar",{"uni-dark":y.dark,"uni-nvue-fixed":y.fixed}])},{default:o((()=>[u(B,{class:d(["uni-navbar__content",{"uni-navbar--fixed":y.fixed,"uni-navbar--shadow":y.shadow,"uni-navbar--border":y.border}]),style:n({"background-color":m.themeBgColor})},{default:o((()=>[y.statusBar?(l(),a(v,{key:0})):h("",!0),u(B,{style:n({color:m.themeColor,backgroundColor:m.themeBgColor,height:m.navbarHeight}),class:"uni-navbar__header"},{default:o((()=>[u(B,{onClick:m.onClickLeft,class:"uni-navbar__header-btns uni-navbar__header-btns-left",style:n({width:m.leftIconWidth})},{default:o((()=>[s(t.$slots,"left",{},(()=>[y.leftIcon.length>0?(l(),a(B,{key:0,class:"uni-navbar__content_view"},{default:o((()=>[u(x,{color:m.themeColor,type:y.leftIcon,size:"20"},null,8,["color","type"])])),_:1})):h("",!0),y.leftText.length?(l(),a(B,{key:1,class:d([{"uni-navbar-btn-icon-left":!y.leftIcon.length>0},"uni-navbar-btn-text"])},{default:o((()=>[u(S,{style:n({color:m.themeColor,fontSize:"12px"})},{default:o((()=>[f(g(y.leftText),1)])),_:1},8,["style"])])),_:1},8,["class"])):h("",!0)]),!0)])),_:3},8,["onClick","style"]),u(B,{class:"uni-navbar__header-container",onClick:m.onClickTitle},{default:o((()=>[s(t.$slots,"default",{},(()=>[y.title.length>0?(l(),a(B,{key:0,class:"uni-navbar__header-container-inner"},{default:o((()=>[u(S,{class:"uni-nav-bar-text uni-ellipsis-1",style:n({color:m.themeColor})},{default:o((()=>[f(g(y.title),1)])),_:1},8,["style"])])),_:1})):h("",!0)]),!0)])),_:3},8,["onClick"]),u(B,{onClick:m.onClickRight,class:"uni-navbar__header-btns uni-navbar__header-btns-right",style:n({width:m.rightIconWidth})},{default:o((()=>[s(t.$slots,"right",{},(()=>[y.rightIcon.length?(l(),a(B,{key:0},{default:o((()=>[u(x,{color:m.themeColor,type:y.rightIcon,size:"22"},null,8,["color","type"])])),_:1})):h("",!0),y.rightText.length&&!y.rightIcon.length?(l(),a(B,{key:1,class:"uni-navbar-btn-text"},{default:o((()=>[u(S,{class:"uni-nav-bar-right-text",style:n({color:m.themeColor})},{default:o((()=>[f(g(y.rightText),1)])),_:1},8,["style"])])),_:1})):h("",!0)]),!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])])),_:3},8,["class","style"]),y.fixed?(l(),a(B,{key:0,class:"uni-navbar__placeholder"},{default:o((()=>[y.statusBar?(l(),a(v,{key:0})):h("",!0),u(B,{class:"uni-navbar__placeholder-view",style:n({height:m.navbarHeight})},null,8,["style"])])),_:1})):h("",!0)])),_:3},8,["class"])}],["__scopeId","data-v-e825e9eb"]]);const x=t({data:()=>({bgColor:"#2979ff",fontColor:"#ffffff",value:9}),onLoad(){y({backgroundColor:this.bgColor,frontColor:this.fontColor})},methods:{btnScanCode(){p({scanType:["qrCode","barCode"],success(t){console.log("success",t)},fail(t){console.log("fail",t)}})},btnMyPic(){_({extension:["png","jpg"],crop:{width:100,height:100},success(t){console.log("success",t)},fail(t){console.log("fail",t)}})}}},[["render",function(t,e,s,r,d,h){const f=k(c("uni-icons"),C),g=i,b=k(c("uni-nav-bar"),v);return l(),a(g,null,{default:o((()=>[u(g,{class:"my-center"},{default:o((()=>[u(g,{class:"my-setting",style:n({backgroundColor:d.bgColor})},{default:o((()=>[u(f,{type:"scan",size:"24",class:"item",color:"#d4e4ff",onClick:h.btnScanCode},null,8,["onClick"]),u(f,{type:"settings",size:"24",class:"item",color:"#d4e4ff"})])),_:1},8,["style"]),u(g,{class:"my",style:n({backgroundColor:d.bgColor})},{default:o((()=>[u(g,{class:"my-pic"},{default:o((()=>[u(f,{type:"person",size:"60",color:"white"}),u(f,{class:"my-pic-upload",type:"cloud-upload",size:"18",color:"#d4e4ff",onClick:h.btnMyPic},null,8,["onClick"])])),_:1}),u(g,{class:"my-info"})])),_:1},8,["style"])])),_:1}),u(g,{class:"toolbars"},{default:o((()=>[u(g,{class:"toolbars-1"},{default:o((()=>[u(g,{class:"box-bg"},{default:o((()=>[u(b,{shadow:"","right-icon":"right",title:"开启阴影"}),u(b,{shadow:"","right-icon":"right",title:"开启阴影"}),u(b,{shadow:"","right-icon":"right",title:"开启阴影"})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-7c2542ab"]]);export{x as default};
