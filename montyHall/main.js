function montyHall(correctDoorNumber, participantGuesses) {
  return Math.round(participantGuesses.filter(choice => choice !== correctDoorNumber).length * 100/ participantGuesses.length);
}