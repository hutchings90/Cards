function assertEquals(a, b, m) {
	console.assert(a === b, m || JSON.stringify(a) + ' is not ' + JSON.stringify(b) + '.');
}

function assertPropertyEquals(o, key, val) {
	assertEquals(o[key], val);
}

function assertArrayEquals(arr1, arr2, itemLabel, arrLabel, checkOrder) {
	if (!arrLabel) arrLabel = 'array';
	assertArrayLength(arr1, arr2.length, arrLabel);
	for (var i = arr1.length - 1; i >= 0; i--) {
		if (checkOrder) assertItemIndex(arr1, arr2[i], i, itemLabel, arrLabel);
		else {
			var item = arr1[i];
			assertEquals(item, arr2[arr2.indexOf(item)]);
		}
	}
}

function assertArrayLength(arr, len, label) {
	if (!label) label = 'array';
	assertEquals(len, arr.length, 'Unexpected ' + label + ' length.');
}

function assertItemIndex(arr, item, i, itemLabel, arrLabel) {
	if (!itemLabel) itemLabel = 'Item';
	if (!arrLabel) arrLabel = 'array';
	assertEquals(item, arr[i], itemLabel + ' at unexpected index of ' + arrLabel + '.');
}