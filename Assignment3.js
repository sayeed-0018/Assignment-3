function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

function brickCalculator(firstTenthLvl, secondTenthLvl, thirdTenthLvl) {
    var firstTenthLvlCount = firstTenthLvl * 15 * 1000;
    var secondTenthLvlCount = secondTenthLvl * 12 * 1000;
    var thirdTenthLvlCount = thirdTenthLvl * 10 * 1000;
    var wholeBuilding = firstTenthLvlCount + secondTenthLvlCount + thirdTenthLvlCount;

    return wholeBuilding;
}

function tinyFriend(friends){
    var tiny = friends[0];
    for(var i = 0; i < friends.length; i++){
        var currentFriend = friends[i];
        if (currentFriend < tiny) {
            tiny = currentFriend;
        }
    }
    return tiny;
}
var tiniestFriend = tinyFriend([11, 88, 99, 55 , 54, 33, 52, 10, 99])
console.log(tiniestFriend);


    

