// Code your solution in this file!
const distanceFromHQ = 42;
//const fromHQ = num2;
function distanceFromHqInBlocks(currentLocationInBlocks){
     let distanceInBlocks = distanceFromHQ - currentLocationInBlocks ;
     return Math.abs(distanceInBlocks);
}
function distanceFromHqInFeet(currentLocationInFeet){
    let distanceInFeet = ((distanceFromHQ - currentLocationInFeet)*264);
    return Math.abs((distanceInFeet));
}

function distanceTravelledInFeet(distanceFromHQ , dTravelledInFeet){
    let TravelledInFeet = ((distanceFromHQ - dTravelledInFeet)*264);
    return Math.abs(TravelledInFeet);

}

