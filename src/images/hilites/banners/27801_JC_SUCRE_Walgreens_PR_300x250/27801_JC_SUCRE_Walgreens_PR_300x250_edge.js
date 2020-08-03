
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x10='rgba(255,255,255,0.00)',x2='5.0.0',x5='rgba(0,0,0,0)',x9='rgba(252,225,236,1.00)',g='image',x7='rgba(192,192,192,0.00)',x12='solid',m='rect',x8='rgba(255,255,255,1.00)',x3='6.0.0.400',x4='horizontal',xc='rgba(0,0,0,1)',i='none';var g6='bg.jpg',g11='LOGO_walgreens.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={'sans-serif, customCSS':'<link rel=\"stylesheet\" type=\"text/css\" href=\"scripts/custom.css\" />'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js","https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:x4,rI:n,cn:{dom:[{id:'bg',t:g,r:['-50px','-45px','400px','340px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'bottle',t:m,r:['95px','40px','110px','180px','auto','auto'],o:'1',f:[x7],s:[0,xc,i]},{id:'stripeW',t:'group',r:['160px','0','126','250','auto','auto'],o:'1',c:[{id:'stripeW01',t:m,r:['0px','0px','14px','250px','auto','auto'],f:[x8],s:[0,xc,i]},{id:'stripeW02',t:m,r:['28px','0px','14px','250px','auto','auto'],f:[x8],s:[0,xc,i]},{id:'stripeW03',t:m,r:['56px','0px','14px','250px','auto','auto'],f:[x8],s:[0,xc,i]},{id:'stripeW04',t:m,r:['84px','0px','14px','250px','auto','auto'],f:[x8],s:[0,xc,i]},{id:'stripeW05',t:m,r:['112px','0px','14px','250px','auto','auto'],f:[x8],s:[0,xc,i]}]},{id:'stripeP',t:'group',r:['174','0','126','250','auto','auto'],o:'1',c:[{id:'stripeP05',t:m,r:['112px','0px','14px','250px','auto','auto'],f:[x9],s:[0,xc,i]},{id:'stripeP04',t:m,r:['84px','0px','14px','250px','auto','auto'],f:[x9],s:[0,xc,i]},{id:'stripeP03',t:m,r:['56px','0px','14px','250px','auto','auto'],f:[x9],s:[0,xc,i]},{id:'stripeP02',t:m,r:['28px','0px','14px','250px','auto','auto'],f:[x9],s:[0,xc,i]},{id:'stripeP01',t:m,r:['0px','0px','14px','250px','auto','auto'],f:[x9],s:[0,xc,i]}]},{id:'lockup_ds',t:m,r:['160px','0px','140px','250px','auto','auto'],o:'1',f:[x10],s:[0,xc,i]},{id:'lockup',t:m,r:['160px','0px','140px','250px','auto','auto'],o:'1',f:[x7],s:[0,xc,i]},{id:'logo_walgreens',t:g,r:['10px','10px','24px','24px','auto','auto'],o:'1',f:[x5,im+g11,'0px','0px']},{id:'border',t:m,r:['0px','0px','298','248','auto','auto'],cu:'pointer',o:'1',f:[x7],s:[1,"rgba(240,180,203,1.00)",x12]}],style:{'${Stage}':{isStage:true,r:['null','null','300','250','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("JC_SUCRE_27801");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var staggerDuration=0.75;var staggerDelay=0.0625;var animDuration00=0.125;var animDuration01=0.5;var animDuration02=1;var animDuration03=1.5;var animDuration04=2;var animDuration05=2.5;var animDuration06=3;var animDuration07=3.5;var animDuration08=4;var animDuration09=4.5;var animDuration10=5;var bg=sym.$("bg");var bottle=sym.$("bottle");var cta=sym.$("cta");var logo=sym.$("logo");var logo_jc=sym.$("logo_jc");var logo_walgreens=sym.$("logo_walgreens");var hashtag=sym.$("hashtag");var lockup=sym.$("lockup");var lockup_ds=sym.$("lockup_ds");var stripeW=sym.$("stripeW");var stripeW01=sym.$("stripeW01");var stripeW02=sym.$("stripeW02");var stripeW03=sym.$("stripeW03");var stripeW04=sym.$("stripeW04");var stripeW05=sym.$("stripeW05");var stripeP=sym.$("stripeP");var stripeP01=sym.$("stripeP01");var stripeP02=sym.$("stripeP02");var stripeP03=sym.$("stripeP03");var stripeP04=sym.$("stripeP04");var stripeP05=sym.$("stripeP05");function consoleLog(message){console.log(message);}
$("#Stage_bottle").append("<svg version='1.1' baseProfile='full' id='bottle_svg' width='110' height='180' xml:space='preserve'><defs><mask id='mask_bottle'><image xlink:href='images/bottle_ko.png' width='110' height='180' /></mask></defs><g mask='url(#mask_bottle)'><image id='bottle_svg' xlink:href='images/bottle.jpg' width='110' height='180' /></g></svg>");$("#Stage_lockup").append("<svg version='1.1' baseProfile='full' id='logo_svg' width='100' height='140' xml:space='preserve'><defs><mask id='logo_mask'><image xlink:href='images/logo_ko.png' x='20' y='25' width='100' height='140' /></mask><mask id='cta_mask'><image xlink:href='images/cta_ko.png' x='20' y='200' width='100' height='35' /></mask></defs><g mask='url(#logo_mask)'><image id='logo_svg' xlink:href='images/logo.jpg' x='20' y='25' width='100' height='140' /></g><image id='logo_jc_svg' xlink:href='images/LOGO_JC.svg' x='33' y='170' width='75' height='13' /><image id='hashtag_svg' xlink:href='images/hashtag.svg' x='26' y='188' width='88' height='8' /><g mask='url(#cta_mask)'><image id='cta_svg' xlink:href='images/cta.jpg' x='20' y='200' width='100' height='35' /></g></svg>");$("#Stage_lockup_ds").append("<svg version='1.1' baseProfile='full' id='lockup_ds_svg' width='140' height='250' xml:space='preserve'><defs><filter id='lockup_ds' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'><feGaussianBlur in='SourceGraphic' stdDeviation='25' result='lockup_blur' /><feOffset dx='0' dy='0' result='lockup_blurOffset'/><feComponentTransfer><feFuncA type='linear' slope='3'/></feComponentTransfer></filter></defs><g filter='url(#lockup_ds)'><image id='logo_ds_svg' xlink:href='images/logo_ko.png' x='20' y='25' width='100' height='140' /></g></svg>");var tl=new TimelineMax({delay:0});tl.call(consoleLog,["FRAME 01 BEGIN!!!"],"frame01").fromTo([bottle],animDuration02,{scale:1.5,autoAlpha:0},{scale:1,autoAlpha:1,ease:Power3.easeOut},"frame01 +=0").fromTo([bg],animDuration02,{scale:0.75,autoAlpha:0},{scale:1,autoAlpha:1,ease:Power3.easeOut},"frame01 +=0").call(consoleLog,["FRAME 02 BEGIN!!!"],"frame02").to([bg,bottle],animDuration04,{x:-70,ease:Power3.easeOut},"frame02 +=0.5").staggerFromTo(stripeW.find("div"),animDuration02,{cycle:{y:[-250,250]},ease:Power3.easeOut},{y:0,ease:Power3.easeOut},staggerDelay*3,"frame02 +=0.5").staggerFromTo(stripeP.find("div"),animDuration02,{cycle:{y:[250,-250]},ease:Power3.easeOut},{y:0,ease:Power3.easeOut},staggerDelay*3,"frame02 +=0.5").fromTo([lockup,lockup_ds],animDuration06,{autoAlpha:0,ease:Power3.easeOut},{autoAlpha:1,ease:Power3.easeOut},"frame02 +=1.25").call(consoleLog,["FRAME 02 END!!!"],"frame02 +=1.25");sym.$("border").click(function(){tl.restart();})
console.log("timing = "+tl.duration()+" secs");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${border}","click",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})})(AdobeEdge.$,AdobeEdge,"JC_SUCRE_27801");

console.log = function() {}