function createProduct(){
	var productHolder = document.getElementById('_section_m_product_holder'); //-1
	var productElements = [];
	var productDescriptionDetailsli = [];
	var productDescriptionSpecsli = [];
	var productDescriptionSpecsList = ['SIZE','WEIGHT','CPU','RAM','GPU','STORAGE','DISPLAY','CAMERA','BATTERY','PLATFORM','COLOR','REPAIRED'];
	var productDescriptionSpecsText = [];
	var productDescriptionDetailsText = [];
	var productElementsText = [];
	var productTextParent = 0;
	
	var productNodeClassParents= [									//Index Value in the Array ProductElements
	['div', 'product'], 											//0 
	['a', 'product-model', 0, 'Model'],		 						//1		
	['a', 'product-detail', 0, 'Details'], 							//2			
	['p', 'product-heading', 0, 'TEMP HEADING'],					//3			
	['div', 'product-description', 0], 								//4
	['ul', 'product-description-details', 4], 						//5	
	['ul', 'product-description-specs', 4], 						//6
	['a', 'product-image', 0], 										//7		
	['img', 'product-image-img', 7], 								//8	
	['a', 'product-description-view-details', 4, 'View More Details'],//9
	['a', 'product-add', 0], 										//10			
	['p', 'product-price', 10, '$200'],								//11
	['p', 'product-cart', 10, 'Add to cart'], 						//12	
	['p', 'product-sale', 10, '$100'] 								//13	
	]; 																//END
	
	for(var i = 0; i < productNodeClassParents.length; i++){
		productElements[i] = document.createElement(productNodeClassParents[i][0]); // Creates an invisible element with a node retrived from the [i] element of  0th productNodeClassParents
		productElements[i].className = productNodeClassParents[i][1]; // Assigns that element a class name based on what was stored in the array
		if(i == 0){ // initial element being created
			productHolder.appendChild(productElements[0]);
		}else{
			productElements[productNodeClassParents[i][2]].appendChild(productElements[i]);// parents the source parent in productNodeClassParents[i][2] to connect the elment that was just created
			if(productElements[i].className == 'product-image'){
				productElements[i].setAttribute('href', '#');
			}
			if(productElements[i].nodeName == 'IMG'){
				productElements[i].setAttribute('src', 'images/phone-image.png');
			}
			if(productElements[i].className == 'product-description-view-details'){
				productElements[i].setAttribute('href', '#');
			}
		}
		if(productNodeClassParents[i].length == 4){
			productElementsText[productTextParent] = document.createTextNode(productNodeClassParents[i][3]);
			productElements[i].appendChild(productElementsText[productTextParent]);
			productTextParent++
		}
		
	}
	
	for(var i = 0; i < 12; i++){
		productDescriptionDetailsli[i] = document.createElement('li');
		productDescriptionSpecsli[i] = document.createElement('li');
		productElements[5].appendChild(productDescriptionDetailsli[i]);
		productElements[6].appendChild(productDescriptionSpecsli[i]);
		productDescriptionDetailsText[i] = document.createTextNode(productDescriptionSpecsList[i]);
		var input = 'N/A';
		if(input == ""){
			input = 'N/A';
		}
		productDescriptionSpecsText[i] = document.createTextNode(input);
		productDescriptionDetailsli[i].appendChild(productDescriptionDetailsText[i]);
		productDescriptionSpecsli[i].appendChild(productDescriptionSpecsText[i]);
	}
}