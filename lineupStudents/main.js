function lineupStudents(students){
  return students.split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a));
}