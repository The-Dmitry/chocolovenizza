(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var s=i.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"assets/c5713b2f2c54298810be.jpg",i=e.p+"assets/ff342f31363e2142b8d0.jpg",s=e.p+"assets/16cf13043ad225a8e4b5.jpg",a=document.querySelector(".about-image"),g=[t,i,s];!function e(t=0){const i=t>=g.length?0:t,s=new Image;s.src=g[i],s.onload=()=>{a.style.backgroundImage=`url(${g[i]})`,setTimeout((()=>{e(i+1)}),1e4)}}();class l{constructor(e){this.node=this.createNode(e)}getNode(){return this.node}createNode(e){return this.node=document.createElement(e.tag),e.cssClasses&&this.setClassNames(e.cssClasses),e.textContent&&this.setTextContent(e.textContent),e.callback&&this.setCallback(e.callback),e.id&&this.setId(e.id),e.attribute&&this.setAttribute(e.attribute),this.node}setClassNames(e){e&&(this.node.className="",this.node.classList.add(...e))}setTextContent(e){e&&(this.node.textContent=e)}setCallback(e,t="click"){this.node.addEventListener(t,e)}setId(e){e&&(this.node.id=e)}setAttribute(e,t){e&&this.node.setAttribute(t,e)}addInnerNode(...e){e.forEach((e=>{e instanceof l?this.node.append(e.getNode()):this.node.append(e)}))}prependInnerNode(...e){e.forEach((e=>{e instanceof l?this.node.prepend(e.getNode()):this.node.prepend(e)}))}removeAllChildren(){for(;this.node.firstChild;)this.node.removeChild(this.node.firstChild)}removeNode(){this.node.remove()}}class n{modal=null;constructor(e){this.viewNode=new l(e)}getElement(){return this.viewNode.getNode()}addViewInside(...e){e.forEach((e=>this.viewNode.addInnerNode(e.getElement())))}showModal(e){this.modal&&this.modal.removeNode(),document.body.classList.add("blocked");const t=new l({tag:"div",cssClasses:["modal"],callback:()=>{this.modal.removeNode(),document.body.classList.remove("blocked")}}),i=new l({tag:"div",cssClasses:["modal-close"]});t.addInnerNode(i,e),this.modal=t,document.body.append(t.getNode())}}const c="Набор конфет из молочного шоколада Master Martini (Италия).",d=["миндаль","пекан","фундук","цукаты","тыквенные","семечки"],p=250,o=[18,18],h={title:"14 февраля",products:[{image:e.p+"assets/17459f2968f62bf76c43.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/7ab2b08016f734c25319.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/51cd2ff00242dba947f1.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/6bb1622e2b7c58a7e5ea.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/886cf9bbf9c464c98cf4.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/7c664e7b5c2fe928b647.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/16f50d6d759f5adc5869.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/93f53a3cbcb9e3ac9ff4.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/4e5bb8d98f2d8b719987.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/acdb338fdb1492133c49.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/b219eb27a4292faa0a0f.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/72f2df7617ef2b12c4eb.jpg",title:c,filling:d,weight:p,packageSize:o}]},r={title:"23 февраля",products:[{image:e.p+"assets/b6f75b74dc5b559a1d48.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/c2ef4707f99571404b97.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/693e0a6f168f04edf09c.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/be5d2e4f579d410400c3.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/6ebd9c1bd0d27051988a.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/f8c9e67b48f91dbddd06.jpg",title:c,filling:d,weight:p,packageSize:o}]},f=[{title:"8 Марта",products:[{image:e.p+"assets/c8a56f5b0ff4609430a3.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/ffd334766c5687c3a357.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/ddb80d40d49a2ee87db2.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/f1e36c90be5e549fbd52.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/3957d0b5f3c79e071956.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/b49a0da0fbae60d828e0.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/99303a3ad580d0dc65b4.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/0eba97c6c3d0386ce0bb.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/f4b933acbe0cf155b70e.jpg",title:c,filling:d,weight:p,packageSize:o}]},h,r,{title:"Шокобомбы",products:[{image:e.p+"assets/bf0ed71b82d46c3e945f.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/4180bb72ab7d2ee84ed0.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/626f4ee63e85c7aaf6a1.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/c7854ad8265e82aba2ed.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/c4d5bd7e7866d05c06ce.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/a3b626e6190968615af1.jpg",title:c,filling:d,weight:p,packageSize:o}]},{title:"Шоколадный букет",products:[{image:e.p+"assets/394c16a26ad6de536d59.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/43e295c7b8890af63ff2.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/b624b74cd5849128172c.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/916d99dc0d5417031dfd.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/5ef5ac834b63d7277d35.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/b4b121c0c6db2995a7e4.jpg",title:c,filling:d,weight:p,packageSize:o}]},{title:"Шоколад",products:[{image:e.p+"assets/d14a3e3997ca400ef63f.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/0eba97c6c3d0386ce0bb.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/99303a3ad580d0dc65b4.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/0ce673a3be6b3bb84deb.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/8728122f6bacda21305e.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/cf6bb58fe99f0e585f67.jpg",title:c,filling:d,weight:p,packageSize:o}]},{title:"Пасха",products:[{image:e.p+"assets/ebf88a762833751351d2.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/bf56f312981e71c9f51b.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/2e70238dd836da79586f.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/e04ee3d6c757ee04ea61.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/998f7e584311acb587da.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/82530f56ba5a857adf76.jpg",title:c,filling:d,weight:p,packageSize:o}]},{title:"Для пап",products:[{image:e.p+"assets/2d55c8ede8d2e1779b60.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/86ef5490b92e34d02016.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/6ebd9c1bd0d27051988a.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/793d6b2815331e9f9451.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/fb7a1ba5b5404598f5e9.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/f8c9e67b48f91dbddd06.jpg",title:c,filling:d,weight:p,packageSize:o}]},{title:"Для мам",products:[{image:e.p+"assets/8f2cefb5f71b7620c9ab.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/4963bbfc7a19fa13df75.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/b925f4e2e16d2984f0d8.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/c00cb4c6cbe0c32ed697.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/240b01afc95871298d76.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/72f2df7617ef2b12c4eb.jpg",title:c,filling:d,weight:p,packageSize:o}]},{title:"Для детей",products:[{image:e.p+"assets/d27872a36eea706e006a.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/a51f93c019f96df787fd.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/7b29ff4944845218cf41.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/297d066a6f1e2253626a.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/448bf17acd6080365541.jpg",title:c,filling:d,weight:p,packageSize:o},{image:e.p+"assets/95edc30f5e24a4f82bec.jpg",title:c,filling:d,weight:p,packageSize:o}]}];class b{static instanceEventEmitter=new b;listeners=new Map;static getInstance(){return this.instanceEventEmitter}subscribe(e,t){const i=this.listeners.get(e)||new Set;i.add(t),this.listeners.set(e,i)}unsubscribe(e,t){const i=this.listeners.get(e);i&&i.delete(t)}dispatch(e,t=null){const i=this.listeners.get(e);i&&i.size&&i.forEach((e=>e(t)))}}class m extends n{constructor(e,t){super({tag:"ul",cssClasses:["assortment-list"]}),this.observer=b.getInstance(),this.configureView(e,t)}configureView(e,t){e.forEach(((e,i)=>{const s=new l({tag:"li",cssClasses:["assortment-list__item"]}),a=new l({tag:"button",cssClasses:["assortment-list__button"],textContent:e.title,callback:()=>{t(i),this.observer.dispatch("assortment-button"),a.getNode().classList.add("assortment-list__button_active")}});0===i&&a.getNode().classList.add("assortment-list__button_active"),this.observer.subscribe("assortment-button",(()=>{a.getNode().classList.remove("assortment-list__button_active")})),s.addInnerNode(a),this.viewNode.addInnerNode(s)}))}}class w extends n{limit=6;constructor(e,t){super({tag:"div",cssClasses:["assortment-grid"]}),this.page=0,this.cache=t,this.products=e,this.addSmallCards()}setPageNumber(e){this.page=e,this.addSmallCards()}addSmallCards(){this.viewNode.removeAllChildren();const e=this.page*this.limit;this.products.slice(e,e+this.limit).forEach(((e,t)=>{const i=new l({tag:"div",cssClasses:["products-list__item"],callback:this.showLargeCard.bind(this,t)});this.loadImage(i,e.image),this.viewNode.addInnerNode(i)}))}showLargeCard(e){const t=new l({tag:"div",cssClasses:["modal-container"],callback:e=>e.stopPropagation()}),i=new l({tag:"button",cssClasses:["modal__prev","modal-button"],callback:this.showLargeCard.bind(this,e-1)}),s=new l({tag:"button",cssClasses:["modal__next","modal-button"],callback:this.showLargeCard.bind(this,e+1)});s.getNode().disabled=e+1>=this.products.length,i.getNode().disabled=e<=0;const a=new l({tag:"div",cssClasses:["modal__content"]}),g=new l({tag:"div",cssClasses:["modal__image"]}),n=new l({tag:"div",cssClasses:["modal__info"]}),c=new l({tag:"p",cssClasses:["modal__sequence"],textContent:`${e+1} / ${this.products.length}`});n.addInnerNode(...this.createDescription(this.products[e]),c),this.loadImage(g,this.products[e].image,!0),a.addInnerNode(g,n),t.addInnerNode(i,a,s),this.showModal(t)}createDescription(e){const t=new l({tag:"p",cssClasses:["modal__title"],textContent:e.title}),i=new l({tag:"ul",cssClasses:["modal__filling"]}),s=new l({tag:"li",textContent:"Состав:"});i.addInnerNode(s),e.filling.forEach((e=>{const t=new l({tag:"li",textContent:e});i.addInnerNode(t)}));const a=new l({tag:"p",cssClasses:["modal__weight"],textContent:`Вес: ${e.weight}г`}),g=new l({tag:"p",cssClasses:["modal__size"],textContent:`Размер упаковки: ${e.packageSize.join("x")} см`});return[t,i,a,g]}loadImage(e,t,i=null){if(e.addInnerNode(this.spinner()),this.cache.has(t)){if(e.removeAllChildren(),i)return void e.addInnerNode(this.cache.get(t).cloneNode(!0));e.addInnerNode(this.cache.get(t))}else{const i=new Image;i.src=t,i.onload=()=>{this.cache.set(t,i),e.removeAllChildren(),e.addInnerNode(this.cache.get(t))}}}spinner(){return new l({tag:"div",cssClasses:["spinner"]})}}class u extends n{constructor(e,t){super({tag:"div",cssClasses:["pagination"]}),this.max=e,this.callback=t,this.configureView(0,t)}configureView(e,t=this.callback){this.viewNode.removeAllChildren();const i=new l({tag:"button",cssClasses:["pagination-button"],callback:()=>t(-99)}),s=new l({tag:"button",cssClasses:["pagination-button"],callback:()=>t(-1)}),a=new l({tag:"p",cssClasses:["pagination-page"],textContent:`${e}`}),g=new l({tag:"button",cssClasses:["pagination-button"],callback:()=>t(1)}),n=new l({tag:"button",cssClasses:["pagination-button"],callback:()=>t(99)});e<=0&&(i.getNode().disabled=!0,s.getNode().disabled=!0),e>=this.max-1&&(g.getNode().disabled=!0,n.getNode().disabled=!0),this.viewNode.addInnerNode(i,s,a,g,n)}}class k extends n{imageCache=new Map;constructor(){super({tag:"div",cssClasses:["assortment-products"]}),this.grid=null,this.pagination=null,this.page=0,this.max=0}configureView({products:e}){this.max=Math.ceil(e.length/6),this.page=0,this.viewNode.removeAllChildren(),this.grid=new w(e,this.imageCache),e.length>6&&(this.pagination=new u(this.max,this.switchPage.bind(this)),this.addViewInside(this.grid,this.pagination)),this.addViewInside(this.grid)}switchPage(e){this.page+=e,this.page<0&&(this.page=0),this.page>this.max&&(this.page=this.max-1),this.grid.setPageNumber(this.page),this.pagination.configureView(this.page)}}const S=document.querySelector(".assortment");new class extends n{constructor(){super({tag:"div",cssClasses:["assortment-container","container"]}),this.navigationView=new m(f,this.setProducts.bind(this)),this.productsView=new k(f),this.configureView(),this.setProducts(0)}configureView(){S.append(this.viewNode.getNode()),this.addViewInside(this.navigationView,this.productsView)}setProducts(e){this.productsView.configureView(f[e])}}})();