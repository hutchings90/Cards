function Card(name, imageSrc) {
	this.name = name;
	this.imageSrc = imageSrc;
}

// Test for Card
(function() {
	var name = 'TestName';
	var imageSrc = 'TestSrc';
	var card = new Card(name, imageSrc);
	console.assert(card.name === name);
	console.assert(card.imageSrc === imageSrc);
})();