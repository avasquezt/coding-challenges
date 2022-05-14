function bulbMaze(maze){
  return maze.split('').every((char, index) => char === ' ' || (index % 2 === 0 ? char === 'x' : char === 'o'));
}