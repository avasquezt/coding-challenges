/**
 * Returns a function that throws an error when receiving duplicate parameters
 * @returns {Function}
 */
function gifts() {
    const set = new Set();
    return (name) => {
      if (set.has(name)) throw new Error("Already exists");
      set.add(name);
    }
}
  
let handOutGift = gifts();