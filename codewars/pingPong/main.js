function pingPong(sounds) {
  //console.log(sounds);
  // Your code here!
  let server, scores = {ping:0, pong:0}, lastHit;
  sounds.split('-').forEach(sound => {
    if (sound === 'ping' || sound === 'pong'){
      if (!server){
        server = sound;
      }
      lastHit = sound;
    }else{
      if(server && server !== lastHit){
        scores[server]++;
      }
      server = '';
    }
  })
  console.log(scores)
  return scores['ping'] > scores['pong'] ? 'ping' : scores['ping'] < scores['pong'] ? 'pong' : Object.keys(scores).filter(score => score !== lastHit)[0];
}
