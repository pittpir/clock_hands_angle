


function clock (hour,minute) {
	arr = [0,0];

	if (hour > 12 || minute > 60) {
		//console.log();
		return "Invalid options passed";
	}

	//both the minute hand and hour hand muc equal 360.

	//this is good for the hour hand
	let minuteHand = ((360 / 60) * minute);
	let hourDrift = ( ((360/12) * minute) / 60);
	minuteHand = minuteHand - hourDrift;
	console.log("drift = " + hourDrift);
	arr[0] = Math.abs(( ((360/12)*hour) - minuteHand  ));  

	//minute hand
	arr[1] = 360 - arr[0];

	return arr;
}

console.log(clock(6,00));
//[180, 180]

console.log(clock(12, 15));
//[277.5, 82.5]

console.log(clock(9, 45));
//[22.5, 337.5]


console.log(clock(1, 59));
//[294.5, 65.5]

console.log(clock(1000, 59));
//[294.5, 65.5]