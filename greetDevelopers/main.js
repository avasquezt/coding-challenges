function greetDevelopers(list) {
  return list.map(guest => ({...guest, greeting:`Hi ${guest.firstName}, what do you like the most about ${guest.language}?`}))
}