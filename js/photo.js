var photo={
	mySwipe:null,
	init:function(){	
		new ImagesLazyLoad({
				mode: "vertical",
				holder: "../img/loading.png"
			});
		this.loadImg();
	},
	loadImg:function(){
		/*var imgs=document.getElementsByTagName("img");
		for(var i=0,len=imgs.length;i<len;i++){
			var img=imgs[i];
			//img.onload=function(){
				var data_src=img.getAttribute("data-src");
				var width=img.offsetWidth;
				var height=img.offsetHeight;
				console.log(data_src+"---width="+width+",height="+height);
				if(data_src){
					img.src=data_src;
					img.style.width=width+"px";
					img.style.height=height+"px";
				}
			//};			
		}*/
		var pic_show=document.getElementById("pic_show");
		var photos=document.querySelectorAll(".photo ul li");
		for(var i=0,len=photos.length;i<len;i++){
			var photo=photos[i];
			var that=this;
			//that.i=i;
			photo.onclick=(function(j){
				//that.mySwipe.currPageX=3;
				//that.mySwipe.scrollToPage("next",0);
				return function(){
					if(pic_show){
						pic_show.style.display="block";
						that.loadPhotoView(j);
					}
				}
			})(i);
		}
		
		var close_view=document.getElementById("close_view");
		if(close_view){
			close_view.onclick=function(){
				//document.body.style.overflow="auto";
				if(pic_show){
					pic_show.style.display="none";
				}
			};
		}
	},
	loadPhotoView:function(startSlide){
		this.caculate();
		var current=document.getElementById("current");
		var total=document.getElementById("total");
		var swipe_wraps=document.querySelectorAll(".swipe_wrap_test img");
		if(total){
			total.innerHTML=swipe_wraps.length;
		}
		/*this.mySwipe = new iScroll(slider, {snap: "li",momentum: false,hScrollbar: false,useTransform: true,checkDOMChanges: true,onScrollEnd: function() {
			var swipe = document.querySelector(".swipe_wrap li:nth-child(" + (this.currPageX + 1) + ")");
			if(current){
				current.innerHTML=(this.currPageX + 1);
			}
		}});*/
		console.log("startSlide===="+startSlide);
		if(!startSlide){
			startSlide=0;
		}
		if(!this.mySwipe){
			this.mySwipe = Swipe(document.getElementById('slider_test'), {startSlide:startSlide,
			transitionEnd:function(index, element){
				//var swipe = document.querySelector(".swipe_wrap li:nth-child(" + (this.currPageX + 1) + ")");
				if(current){
					current.innerHTML=(index+ 1);
				}
			}});
		}else{
			this.mySwipe.slide(startSlide,1);
		}
	},
	caculate:function(){
		//document.body.style.overflow="hidden";
		var swipe_wraps=document.querySelectorAll(".swipe_wrap_test img");
		var li_width=document.body.clientWidth;
		var li_height=document.documentElement.clientHeight;
		
		var swipe_wrap=document.querySelector(".swipe_wrap_test");
		//var width=swipe_wraps.length*li_width;
		//swipe_wrap.style.width=width+"px";
		var slider=document.getElementById("slider_test");
		slider.style.top=((li_height/2-swipe_wraps[0].offsetHeight/2))+"px";
	}
};

photo.init();
//photo.loadPhotoView();