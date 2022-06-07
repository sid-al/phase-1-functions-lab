// Code your solution in this file!
const HQBlocks = 42;
//const fromHQ = num2;
function distanceFromHqInBlocks(currentLocation){
     let distanceInBlocks = HQBlocks - currentLocation ;
     return Math.abs(distanceInBlocks);
}
function distanceFromHqInFeet(currentLocationInFeet){
    let distanceInFeet = ((HQBlocks - currentLocationInFeet)*264);
    return Math.abs((distanceInFeet));
}

func