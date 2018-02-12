function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(i = 0 ; i < arr.length ; i++){
	  let alt = arr[i].avgAlt;
	  let total_alt = earthRadius + alt;
	  let t_square =(Math.pow(total_alt,3))/GM;
	  let orbital_t = Math.round(2*Math.PI*Math.pow(t_square,0.5));
	  let key = Object.keys(arr[i]);
	  delete arr[i]['avgAlt'];
	  arr[i]['orbitalPeriod']=orbital_t ;
  }
  return arr;
}

//console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));