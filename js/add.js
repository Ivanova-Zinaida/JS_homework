
let weights = [2,7,4,1,8,1];

function annihilation(weights){
    
    let firstMol = weights[0];
    let secondMol = weights[0];
    let number = 0;
    let number2 = 0;
    let sun = 0;
    
    for(let i = 0; i< weights.length; i++){
        if(firstMol < weights[i]){
            firstMol=weights[i];
            number = i;    
        }
    }
     
    weights.splice(number, 1);
    
    for(let j = 0; j < weights.length; j++){
        if(secondMol < weights[j]){
            secondMol=weights[j];
            number2=j; 
        }
    }
    
    weights.splice(number2,1);
    sun = firstMol-secondMol;
    
    if(sun>0){
      weights.push(sun);
    }
    
    return weights;   
}
while(weights.length>1){
     annihilation(weights);
}

if(weights.length==1){
    console.log(weights[0]); 
}else{
    console.log('молекул не осталось');     
} 






