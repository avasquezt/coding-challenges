//Adds a new property to every object in the array
questions = questions.map(e => Object.assign(e, e, {usersAnswer: null}));