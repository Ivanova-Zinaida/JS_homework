'use strict'
export let myUtils = { 
	findeMinNumber: function (arr){
		let minNumber = Math.min(...arr);
		return minNumber;
	},
	findeMaxNumber: function (arr){
		let maxNumber = Math.max(...arr);
		return maxNumber;
	},
	calculateArithmeticMean: function (arr){
		let arithmeticMean = 0;
		for(let i = 0; i < arr.length; i++){
			arithmeticMean = arithmeticMean + arr[i];
		}
        arithmeticMean = Math.floor(arithmeticMean/arr.length)
		return arithmeticMean; 			
	},
	cloneArr: function(arr){
		let cloneArr = arr.splice(0);
		
		return cloneArr;
	},
};
