import{_ as t,m as o,u as e,D as a,E as c,G as s,H as r,I as p,J as n,o as u,a as i,w as h,g as l,d,e as g,K as m,b as T,f as v,B as f,C as y,L as b,p as x}from"./index-24046cc3.js";let M,W,I=o(),L=I.screenWidth;I.pixelRatio;let S,R,H,B,w,_,k,D,C,Y=100,X=I.screenWidth;const E=t({data:()=>({name:"杨大宝",imageSrc:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b31d90c0-5168-11eb-bdc1-8bd33eb6adaa.jpg",isShowImg:!1,cropperInitW:L,cropperInitH:L,cropperW:L,cropperH:L,cropperL:0,cropperT:0,transL:0,transT:0,scaleP:0,imageW:0,imageH:0,cutL:0,cutT:0,cutB:L,cutR:"100%",qualityWidth:X,innerAspectRadio:1}),onLoad:function(t){},onReady:function(){this.loadImage()},methods:{setData:function(t){let o=this;Object.keys(t).forEach((function(e){o.$set(o.$data,e,t[e])}))},getImage:function(){var t=this;e({success:function(o){t.setData({imageSrc:o.tempFilePaths[0]}),t.loadImage()}})},loadImage:function(){var t=this;a({title:"图片加载中..."}),c({src:t.imageSrc,success:function(o){k=o.width/o.height,k>=1?(D=L,C=L/k):(D=L*k,C=L);let e=D>C?D:C;if(Y=e>Y?Y:e,k>=1){let o=Math.ceil((L/k-(L/k-Y))/2),e=o,a=Math.ceil((L-L+Y)/2),c=a;t.setData({cropperW:L,cropperH:L/k,cropperL:Math.ceil((L-L)/2),cropperT:Math.ceil((L-L/k)/2),cutL:a,cutT:o,cutR:c,cutB:e,imageW:D,imageH:C,scaleP:D/L,qualityWidth:X,innerAspectRadio:k})}else{let o=Math.ceil((L*k-L*k)/2),e=o,a=Math.ceil((L-Y)/2),c=a;t.setData({cropperW:L*k,cropperH:L,cropperL:Math.ceil((L-L*k)/2),cropperT:Math.ceil((L-L)/2),cutL:o,cutT:a,cutR:e,cutB:c,imageW:D,imageH:C,scaleP:D/L,qualityWidth:X,innerAspectRadio:k})}t.setData({isShowImg:!0}),s()}})},contentStartMove(t){M=t.touches[0].pageX,W=t.touches[0].pageY},contentMoveing(t){var o=1*(M-t.touches[0].pageX),e=1*(W-t.touches[0].pageY);o>0?this.cutL-o<0&&(o=this.cutL):this.cutR+o<0&&(o=-this.cutR),e>0?this.cutT-e<0&&(e=this.cutT):this.cutB+e<0&&(e=-this.cutB),this.setData({cutL:this.cutL-o,cutT:this.cutT-e,cutR:this.cutR+o,cutB:this.cutB+e}),M=t.touches[0].pageX,W=t.touches[0].pageY},contentTouchEnd(){},getImageInfo(){var t=this;a({title:"图片生成中..."});const o=r("myCanvas");o.drawImage(t.imageSrc,0,0,D,C),o.draw(!0,(()=>{var o=(t.cropperW-t.cutL-t.cutR)/t.cropperW*D,e=(t.cropperH-t.cutT-t.cutB)/t.cropperH*C,a=t.cutL/t.cropperW*D,c=t.cutT/t.cropperH*C;p({x:a,y:c,width:o,height:e,destWidth:o,destHeight:e,quality:.5,canvasId:"myCanvas",success:function(t){s(),n({current:"",urls:[t.tempFilePath]})}})}))},dragStart(t){S=t.touches[0].pageX,R=t.touches[0].pageY,H=this.cutL,w=this.cutR,_=this.cutB,B=this.cutT},dragMove(t){switch(t.target.dataset.drag){case"right":var o=1*(S-t.touches[0].pageX);w+o<0&&(o=-w),this.setData({cutR:w+o});break;case"left":o=1*(S-t.touches[0].pageX);H-o<0&&(o=H),H-o>this.cropperW-this.cutR&&(o=H-(this.cropperW-this.cutR)),this.setData({cutL:H-o});break;case"top":o=1*(R-t.touches[0].pageY);B-o<0&&(o=B),B-o>this.cropperH-this.cutB&&(o=B-(this.cropperH-this.cutB)),this.setData({cutT:B-o});break;case"bottom":o=1*(R-t.touches[0].pageY);_+o<0&&(o=-_),this.setData({cutB:_+o});break;case"rightBottom":var e=1*(S-t.touches[0].pageX),a=1*(R-t.touches[0].pageY);_+a<0&&(a=-_),w+e<0&&(e=-w);let c=_+a,s=w+e;this.setData({cutB:c,cutR:s})}}}},[["render",function(t,o,e,a,c,s){const r=f,p=l,n=y,M=b,W=x("page-foot");return u(),i(p,{class:"container"},{default:h((()=>[d(p,{class:"page-body uni-content-info"},{default:h((()=>[d(p,{class:"cropper-content"},{default:h((()=>[c.isShowImg?(u(),i(p,{key:0,class:"uni-corpper",style:g("width:"+c.cropperInitW+"px;height:"+c.cropperInitH+"px;background:#000")},{default:h((()=>[d(p,{class:"uni-corpper-content",style:g("width:"+c.cropperW+"px;height:"+c.cropperH+"px;left:"+c.cropperL+"px;top:"+c.cropperT+"px")},{default:h((()=>[d(r,{src:c.imageSrc,style:g("width:"+c.cropperW+"px;height:"+c.cropperH+"px")},null,8,["src","style"]),d(p,{class:"uni-corpper-crop-box",onTouchstart:m(s.contentStartMove,["stop"]),onTouchmove:m(s.contentMoveing,["stop"]),onTouchend:m(s.contentTouchEnd,["stop"]),style:g("left:"+c.cutL+"px;top:"+c.cutT+"px;right:"+c.cutR+"px;bottom:"+c.cutB+"px")},{default:h((()=>[d(p,{class:"uni-cropper-view-box"},{default:h((()=>[d(p,{class:"uni-cropper-dashed-h"}),d(p,{class:"uni-cropper-dashed-v"}),d(p,{class:"uni-cropper-line-t","data-drag":"top",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-line-r","data-drag":"right",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-line-b","data-drag":"bottom",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-line-l","data-drag":"left",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-point point-t","data-drag":"top",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-point point-tr","data-drag":"topTight"}),d(p,{class:"uni-cropper-point point-r","data-drag":"right",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-point point-rb","data-drag":"rightBottom",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-point point-b","data-drag":"bottom",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"]),onTouchend:m(t.dragEnd,["stop"])},null,8,["onTouchstart","onTouchmove","onTouchend"]),d(p,{class:"uni-cropper-point point-bl","data-drag":"bottomLeft"}),d(p,{class:"uni-cropper-point point-l","data-drag":"left",onTouchstart:m(s.dragStart,["stop"]),onTouchmove:m(s.dragMove,["stop"])},null,8,["onTouchstart","onTouchmove"]),d(p,{class:"uni-cropper-point point-lt","data-drag":"leftTop"})])),_:1})])),_:1},8,["onTouchstart","onTouchmove","onTouchend","style"])])),_:1},8,["style"])])),_:1},8,["style"])):T("",!0)])),_:1}),d(p,{class:"cropper-config"},{default:h((()=>[d(n,{type:"primary reverse",onClick:s.getImage,style:{"margin-top":"30rpx"}},{default:h((()=>[v(" 选择图片 ")])),_:1},8,["onClick"]),d(n,{type:"warn",onClick:s.getImageInfo,style:{"margin-top":"30rpx"}},{default:h((()=>[v(" 点击生成图片 ")])),_:1},8,["onClick"])])),_:1}),d(M,{"canvas-id":"myCanvas",style:g("position:absolute;border: 1px solid red; width:"+c.imageW+"px;height:"+c.imageH+"px;top:-9999px;left:-9999px;")},null,8,["style"])])),_:1}),d(W,{name:c.name},null,8,["name"])])),_:1})}],["__scopeId","data-v-3e9a03f7"]]);export{E as default};
