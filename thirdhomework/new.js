function all()
{
	var navs=document.getElementById("num").getElementsByTagName("a");
    var img=document.getElementById("demo").getElementsByTagName("li");
    var index=0;
    function active()
    {
	    for(var i=0;i<navs.length-1;i++)
        {
	        var nav_item=navs[i];
	        nav_item.onmouseover=function()
	        {
		        for(var m=0;m<navs.length-1;m++)
		        {
			       if(this.title==navs[m].title)
			       {
				        index=m;
				        break;			
			        }
		        }
		        for(var j=0;j<navs.length-1;j++)
		        {
			        img[j].style.display="none";
			        //navs[j].style.background="white";
		        }
		        img[index].style.display="";
		       // navs[index].style.background="red";
	        }
        }
    }
    active();

    function scroll()
    {   
	    for(var n=0;n<navs.length;n++)
	    {
		    img[n].style.display="none";
		   // navs[j].style.background="white";
	    }
	    img[index].style.display="";
	    //navs[index].style.background="red";
	    index++;
	    if(index>=navs.length)
	    {
		    index=0;
	    }	
	   
    }
    
    var timer=setInterval(scroll,2000);
    demo.onmouseover=function()
    {
        clearInterval(timer);  
    }

    demo.onmouseout=function()
    {
        timer=setInterval(scroll,2000);
    }

}
window.onload=all;