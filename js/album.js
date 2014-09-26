var album={
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
		new ImagesLazyLoad({
				mode: "vertical",
				holder: "../img/loading.png"
			});
	}
};

album.loadImg();