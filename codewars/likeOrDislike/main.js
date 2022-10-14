// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  return buttons.reduce((ans, element) => element === ans ? 'Nothing' : element ,'Nothing')
}