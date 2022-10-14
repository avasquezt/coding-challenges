function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
return sharkDistance / (sharkSpeed * (dolphin ? 0.5 : 1)) < pontoonDistance / youSpeed ? 'Shark Bait!' : 'Alive!'
}