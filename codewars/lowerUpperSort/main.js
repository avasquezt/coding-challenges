function findChildren(dancingBrigade) {
	return dancingBrigade.split('').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a)).join('');
}

// function findChildren(dancingBrigade){

//   return dancingBrigade.split("")
//                        .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
//                        .join("");
  
// };