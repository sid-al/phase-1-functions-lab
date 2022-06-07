// Code your solution in this file!
//const distanceFromHQ = 42;
//const fromHQ = num2;
// function distanceFromHqInBlocks(currentLocationInBlocks){
//      let distanceInBlocks = distanceFromHQ - currentLocationInBlocks ;
//      return Math.abs(distanceInBlocks);
//}

const distanceFromHqInBlocks = (block) => Math.abs(block - 42);

// function distanceFromHqInFeet(currentLocationInFeet){
//     let distanceInFeet = ((distanceFromHQ - currentLocationInFeet)*264);
//     return Math.abs((distanceInFeet));
// }

const distanceFromHqInFeet = (block) => distanceFromHqInBlocks(block)* 264; 


// function distanceTravelledInFeet(distanceFromHQ , dTravelledInFeet){
//     let TravelledInFeet = ((distanceFromHQ - dTravelledInFeet)*264);
//     return Math.abs(TravelledInFeet);

// }

const distanceTravelledInFeet = (start, stop) => Math.abs(start - stop) * 264


const calculatesFarePrice = (start, stop)=>{
     let fare = distanceTravelledInFeet(start, stop);
     if (fare <= 400){
         return 0;
     }else if(fare >400 && fare <=2000 ){
        return (fare -400)*0.02;
     }else if(fare >2000 && fare < 2500){
         return 25;
     }else if(fare >= 2500){
         return 'cannot travel that far'
     }

}

console.log(calculateFarePrice(42, 50))


//callback
