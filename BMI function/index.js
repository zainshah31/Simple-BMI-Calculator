function BMI(weight,Height){
     
    return weight/Math.pow(Height,2)
}

var totalValue = BMI(10,20);
console.log(totalValue);