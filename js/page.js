/*var productInformation = {
	"Product Name":"Test",
	"Product Price":200,
	"Product Image":"images/test.png",
	"Product URL":"#"
	}

$(document ).ready( function(){
	alert(productInformation["Product Name"]);
	productInformation["Product Name"] = prompt("Enter the product name","")
	alert(productInformation["Product Name"]);
	var keys = Object.keys(productInformation);
	alert(keys);
});*/
/*$(document ).ready( function(){
	var createdProducts = [];
	for(var i = 0; i < 4; i++){
		createdProducts[i] = createProduct();
	}
	console.log(createdProducts.length);
});*/


$(document).on('DOMNodeInserted', function(){
	var index;
	$(".product-detail, .product-model").click(function () {
		var productArraySize = document.getElementsByClassName('product').length;
		var productModelsArray = document.getElementsByClassName('product-model');
		var productDetailArray = document.getElementsByClassName('product-detail');
		var productDescriptionArray = document.getElementsByClassName('product-description');
		var productImageArray = document.getElementsByClassName('product-image');
		index = $(this).parent().index() -1;
		for(var i = 0; i < productArraySize; i++){
			if(this.className == "product-model"){
				if(i == index){
					productModelsArray[index].style["background-color"] = '#fff';
					productModelsArray[index].style["color"] = '#000';
					productDetailArray[index].style["color"] = '#fff';
					productDetailArray[index].style["background-color"] = '#0064BB';
					productImageArray[index].style.display = 'block';
					productDescriptionArray[index].style.display = 'none';
				}else{
					productModelsArray[i].style["background-color"] = '#fff';
					productModelsArray[i].style["color"] = '#000';
					productDetailArray[i].style["color"] = '#fff';
					productDetailArray[i].style["background-color"] = '#0064BB';
					productImageArray[i].style.display = 'block';
					productDescriptionArray[i].style.display = 'none';
				}
			}else{
				if(i == index){
					productModelsArray[index].style["background-color"] = '#0064BB';
					productDetailArray[index].style["background-color"] = '#fff';
					productModelsArray[index].style["color"] = '#fff';
					productDetailArray[index].style["color"] = '#000';
					productImageArray[index].style.display = 'none';
					productDescriptionArray [index].style.display = 'block';
				}else{
					productModelsArray[i].style["background-color"] = '#fff';
					productDetailArray[i].style["background-color"] = '#0064BB';
					productDetailArray[i].style["color"] = '#fff';
					productModelsArray[i].style["color"] = '#000';
					productImageArray[i].style.display = 'block';
					productDescriptionArray[i].style.display = 'none';
				}
			}
		}
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