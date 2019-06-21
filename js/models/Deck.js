function Deck(cards) {
	this.cards = cards;
}

Deck.prototype.draw = function() {
	return this.take(this.cards.length - 1);
};

Deck.prototype.put = function(card) {
	return this.give(card, this.cards.length);
};

Deck.prototype.take = function(i) {
	if (isNaN(i)) return removeAtRandomIndex(this.cards);
	if (isValidIndex(this.cards, i)) return removeAtIndex(this.cards, i);
	return null;
};

Deck.prototype.give = function(card, i) {
	if (isNaN(i) || i >= this.cards.length) {
		this.cards.push(card);
		return this.cards.length - 1;
	}
	if (isValidIndex(this.cards, i)) {
		this.cards.splice(i, 0, card);
		return i;
	}
	return -1;
};

Deck.prototype.shuffle = function() {
	shuffle(this.cards);
};

// Test Deck
(function() {
	var card1 = new Card('First', 'Somewhere');
	var card2 = new Card('Second', 'Elsewhere');
	var card3 = new Card('Third', 'Here');
	var card4 = new Card('Fourth', 'There');
	var card5 = new Card('Fifth', 'Everywhere');
	var cards = [ card1, card2, card3, card4, card5 ];
	var cardToGive = new Card('Given', 'to ya')
	var cardToPut = new Card('Putten', 'Somethin');
	var cardLabel = 'Card';
	var deckLabel = 'Deck';
	var giveIndex = 3;

	// Test constructor
	var deck = new Deck([ card1, card2, card3, card4, card5]);
	assertArrayEquals(deck.cards, cards, cardLabel, deckLabel, true);

	// Test give
	deck.give(cardToGive, giveIndex);
	assertArrayEquals(deck.cards, [ card1, card2, card3, cardToGive, card4, card5 ], cardLabel, deckLabel, true);

	// Test put
	deck.put(cardToPut);
	assertArrayEquals(deck.cards, [ card1, card2, card3, cardToGive, card4, card5, cardToPut ], cardLabel, deckLabel, true);

	// Test take
	assertEquals(cardToGive, deck.take(giveIndex));
	assertArrayEquals(deck.cards, [ card1, card2, card3, card4, card5, cardToPut ], cardLabel, deckLabel, true);

	// Test draw
	assertEquals(cardToPut, deck.draw());
	assertArrayEquals(deck.cards, cards, cardLabel, deckLabel, true);

	// Test shuffle
	deck.shuffle();
	assertArrayEquals(deck.cards, cards, cardLabel, deckLabel, false);
})();