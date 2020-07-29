// feetToMile
function feetToMile(feet){
    if(feet<0){
        return "Feet value must be positive. Please enter a positive value.";
    }
    else{
        var mile= feet/5280; /**1mile= 5280 feet*/
        return mile;
    }
    
}

var feet= 25;
var getMile=feetToMile(feet);
console.log(getMile);

// woodCalculator
function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "Please enter positive value"
    }
    else{
        var totatlWood= chair*1 + table*3 + bed*5;
        return totatlWood;
    }
    
}
var chairNumber =5;
var tableNumber =2;
var bedNumber = 6;
var woodCount= woodCalculator(chairNumber,tableNumber,bedNumber);
console.log(woodCount);

// brickCalculator
function brickCalculator(floor){
    if(floor<=0)
        return "Please enter a positive value";
    else if(floor<11 && floor>0){
        var totalBrick= floor*15*1000;
    }
    else if(floor>10 && floor<21){
        var totalBrick= (10*15*1000) + (floor-10)*12*1000;
    }
    else{
        var totalBrick= (10*15*1000) + (10*12*1000) + (floor-20)*10*1000;
    }
    return totalBrick;
}

var floorNumber= 36;
var brickCount= brickCalculator(floorNumber);
console.log(brickCount);

// tinyFriend
function tinyFriend(array){
    if(array.length==0)
        return "Null array. Please enter name of friends."
    else{
        var smallest= array[0];
        for(var i=1; i<array.length; i++){
            var element = array[i];
            if(element.length<smallest.length){
                smallest= element;
            }
        }
    }
    
    return smallest;
}

var friendName =["Arif", "Deepto","Jeesaan","Bappi"]
var smallestName= tinyFriend(friendName);
console.log(smallestName);