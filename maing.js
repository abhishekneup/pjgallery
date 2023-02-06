
 let fullBox= document.getElementById("fullBox");
 let fullImg= document.getElementbyid("fullImg");
   
   function openImg(pic)
   {
   	fullBox.style.display="flex";
   	fullImg.src=pic;
   }

   function close
   {
   	 fullBox.style.display="none";
   }