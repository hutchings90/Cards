function isNaN(v) {
	return v !== Number(v);
}

function randInt(range, min) {
	if (isNaN(range)) range = 0;
	if (isNaN(min)) min = 0;
	return min + Math.floor(range * Math.random());
}

function randIndex(arr) {
	if (!Array.isArray(arr)) return -1;
	if (arr.length < 1) return 0;
	return randInt(arr.length - 1);
}

function isValidIndex(arr, i) {
	if (!Array.isArray(arr)) return false;
	if (isNaN(i)) return false;
	if (i != Math.floor(i)) return false;
	return i >= 0 && i < arr.length;
}

function removeAtIndex(arr, i) {
	if (!isValidIndex(arr, i)) return null;
	return arr.splice(i, 1)[0];
}

function removeAtRandomIndex(arr) {
	return removeAtIndex(arr, randIndex(this.cards));
}

function shuffle(arr) {
	if (!Array.isArray(arr)) return;
	for (var i = arr.length - 1; i >= 0; i--) {
		var j = randInt(i + 1);
		var item = arr[i];
		arr[i] = arr[j];
		arr[j] = item;
	}
}