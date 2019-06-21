function Card(name, imageSrc) {
	this.name = name;
	this.imageSrc = imageSrc;
}

// Test Card
(function() {
	var name = 'TestName';
	var imageSrc = 'TestSrc';
	var card = new Card(name, imageSrc);
	assertPropertyEquals(card, 'name', name);
	assertPropertyEquals(card, 'imageSrc', imageSrc);
})();