(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={app:"App_app__3wwpd",loader:"App_loader__2YhgJ"}},24:function(e,a,t){e.exports={imageGallery:"ImageGallery_imageGallery__jP6DF"}},25:function(e,a,t){e.exports={button:"Button_button__2ChpP"}},27:function(e,a,t){e.exports=t(72)},7:function(e,a,t){e.exports={searchbar:"Searchbar_searchbar__7f5ZI",searchForm:"Searchbar_searchForm__O6W3S",searchFormButton:"Searchbar_searchFormButton__2WWAW","searchForm-button":"Searchbar_searchForm-button__3pc4Y",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__1drhx",searchFormInput:"Searchbar_searchFormInput__eWqWW","searchForm-input":"Searchbar_searchForm-input__1OCc7"}},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),i=t(3),s=t(4),m=t(6),u=t(5),h=t(22),g=t.n(h),p=t(23),d=t.n(p),f="18315258-08803af9f502906e62634bec0",b=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return d.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=t(7),_=t.n(y),I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:_.a.searchbar},r.a.createElement("form",{className:_.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:_.a.searchFormButton},r.a.createElement("span",{className:_.a.searchFormButtonLabel},"Search")),r.a.createElement("input",{className:_.a.searchFormInput,type:"text",onChange:this.handleChange,value:this.state.inputValue,placeholder:"Search images and photos"})))}}]),t}(n.Component),v=t(26),S=t(8),w=t.n(S),E=function(e){var a=e.id,t=e.webformatURL,n=e.largeImageURL,o=e.tags,c=e.onClickLargeImg;return r.a.createElement("li",{className:w.a.imageGalleryItem,key:a},r.a.createElement("img",{src:t,alt:o,className:w.a.imageGalleryItemImage,"data-source":n,"data-id":a,onClick:function(e){return c(e.target.dataset.source)}}))},k=t(24),F=t.n(k),C=function(e){var a=e.images,t=e.onImageClick;return r.a.createElement("ul",{className:F.a.imageGallery},a.map((function(e){var a=e.id,n=Object(v.a)(e,["id"]);return r.a.createElement(E,Object.assign({key:a},n,{onClickLargeImg:t}))})))},j=t(25),O=t.n(j),M=function(e){var a=e.onClick;return r.a.createElement("button",{type:"button",onClick:a,className:O.a.button},"Load more")},G=t(9),N=t.n(G),B=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.closeModal()},e.onCloseModal=function(a){a.target===a.currentTarget&&e.props.closeModal()},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement("div",{className:N.a.overlay,onClick:this.onCloseModal},r.a.createElement("div",{className:N.a.modal},r.a.createElement("img",{src:this.props.largeImageURL,alt:""})))}}]),t}(n.Component),L=(t(70),t(10)),x=t.n(L),W=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,showModal:!1,largeImage:null},e.fetchImages=function(){var a=e.state,t=a.searchQuery,n=a.page;e.setState({loading:!0}),b(t,n).then((function(a){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a)),page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(a){e.setState({searchQuery:a,page:1,images:[],error:null,showModal:!1})},e.handleClickImage=function(a){e.openModal(a)},e.openModal=function(a){return e.setState({showModal:!0,largeImage:a})},e.closeModal=function(){return e.setState({showModal:!1,largeImage:""})},e.smoothScrol=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.fetchImages(),this.state.page>2&&a.page!==this.state.page&&this.smoothScrol()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.loading,n=e.error,o=e.showModal,c=e.largeImage;return r.a.createElement("div",{className:x.a.app},r.a.createElement(I,{onSubmit:this.handleSearchFormSubmit}),n&&r.a.createElement("p",null,"Whoops, something went wrong: ",n.message),a.length>0&&r.a.createElement(C,{images:a,onImageClick:this.handleClickImage}),o&&r.a.createElement(B,{largeImageURL:c,closeModal:this.closeModal}),t&&r.a.createElement("div",{className:x.a.loader},r.a.createElement(g.a,{type:"Oval",color:"#00BFFF",height:30,width:30})),a.length>0&&!t&&r.a.createElement(M,{onClick:this.fetchImages}))}}]),t}(n.Component);t(71);c.a.render(r.a.createElement(W,null),document.getElementById("root"))},8:function(e,a,t){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3mIib",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2UBt2","imageGalleryItem-image":"ImageGalleryItem_imageGalleryItem-image__3j1hB"}},9:function(e,a,t){e.exports={overlay:"Modal_overlay__2Ikq0",modal:"Modal_modal__jKq-B"}}},[[27,1,2]]]);
//# sourceMappingURL=main.fd49e522.chunk.js.map