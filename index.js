function distanceFromHqInBlocks(number){
    if (number >= 42){
    return number-42;
    } else if (number < 42){
        return 42 - number;
    }
}

function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number) *264;
}

function distanceTravelledInFeet(start,destination) {
   /*  if (destination > start){
    return (destination-start)*264;
    } else if (start < destination){
        return (start-destination)*264;
    } else {
        return ((start-destination)-42)*264;
    } */
    const block = 264;
    const difference = Math.abs(start - destination);
    return block * difference;
}

function calculatesFarePrice(start,destination) {
  /*  if ((start-destination)*264 < 400){
      return 'gives customers a free sample';
   } else if ((destination-start)*264> 400){
       return ((destination-start)*264)-400;
   } */
   const block = 264;
   const difference = Math.abs(start - destination);
   const distance = block * difference;
   if (distance > 2500) {
       return "cannot travel that far";
   } else if (distance < 400) {
       return 0;
   }

   if (distance > 400 && distance <= 2000){
       return (distance - 400)*0.02;
   } else if (distance > 2000 && distance < 2500) {
       return 25;
   }
}
