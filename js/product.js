var index;
$(window).on( "load", function(){
	var product = document.getElementsByClassName('product').length;
	var productModels = document.getElementsByClassName('product-model');
	var productDetails = document.getElementsByClassName('product-detail');
	var productDescription = document.getElementsByClassName('product-discription');
	var productImage = document.getElementsByClassName('product-image');
	/*$(".product-model").click(function () {
		index = $(".product-model").index(this);
		for(var i = 0; i < productImage.length; i++){
			if(i == index){
				productModels[i].style["background-color"] = '#fff';
				productDetails[i].style["background-color"] = '#f9f9f9';
				productDescription[i].style.display = 'none';
				productImage[i].style.display = 'block';
			}else{
				productModels[i].style["background-color"] = '#fff';
				productDetails[i].style["background-color"] = '#f9f9f9';
				productDescription[i].style.display = 'none';
				productImage[i].style.display = 'block';
			}	
		}
	});*/
	$(".product-detail, .product-model").click(function () {
		index = $(this).parent().index() -1;
		for(var i = 0; i < product; i++){
			if(this.className == "product-model"){
				if(i == index){
					productModels[index].style["background-color"] = '#fff';
					productDetails[index].style["background-color"] = '#e1e1e1';
					productImage[index].style.display = 'block';
					productDescription[index].style.display = 'none';
				}else{
					productModels[i].style["background-color"] = '#fff';
					productDetails[i].style["background-color"] = '#e1e1e1';
					productImage[i].style.display = 'block';
					productDescription[i].style.display = 'none';
				}
			}else{
				if(i == index){
					productModels[index].style["background-color"] = '#e1e1e1';
					productDetails[index].style["background-color"] = '#fff';
					productImage[index].style.display = 'none';
					productDescription[index].style.display = 'block';
				}else{
					productModels[i].style["background-color"] = '#fff';
					productDetails[i].style["background-color"] = '#e1e1e1';
					productImage[i].style.display = 'block';
					productDescription[i].style.display = 'none';
				}
			}
		}
		/*for(var i = 0; i < productImage.length; i++){
			if(i == index){
				
				productDescription[i].style.display = 'block';
				productImage[i].style.display = 'none';
			}else{
				productModels[i].style["background-color"] = '#fff';
				productDetails[i].style["background-color"] = '#f9f9f9';
				productDescription[i].style.display = 'none';
				productImage[i].style.display = 'block';
			}
		}*/
	});
});
		
var isOpen = false;
function onClickSide() {
	if(isOpen == false){
		document.getElementById("sidenav").style.width = "10%";
		document.getElementById("_section_m_product_holder").style.marginLeft = "20%";
		document.getElementById("_section_m_product_holder").style.width = "70%";
		isOpen = true;
	}else{
		document.getElementById("sidenav").style.width = "0px";
		document.getElementById("_section_m_product_holder").style.marginLeft = "10%";
		document.getElementById("_section_m_product_holder").style.width = "80%";
		isOpen = false;
	}
}