function View(e) {
	this.e = e;
}

View.prototype.addClassName = function(className) {
	if (!this.e.className.includes(className)) this.setClassName(this.e.className + (this.e.className.length > 0 ? ' ' : '') + className);
};

View.prototype.removeClassName = function(className) {
	this.setClassName(this.e.className.replace(new RegExp(className, 'g'), '').replace(/\s+/g, ' ').trim());
};

View.prototype.clearClassName = function() {
	this.removeClassName(this.e.className);
};

View.prototype.setClassName = function(className) {
	this.setAttribute('className', className);
};

View.prototype.setAttribute = function(attr, val) {
	this.e[attr] = val;
};

View.prototype.appendChild = function(e) {
	this.e.appendChild(e);
};

View.prototype.removeChild = function(e) {
	this.e.removeChild(e);
};

View.prototype.clearChildren = function() {
	while (this.e.lastChild) this.removeChild(this.e.lastChild);
};

(function() {
	var e = createElement();
	var e2 = createElement();
	var e3 = createElement();
	var e4 = createElement();
	var firstClassName = ' zvc   qwer   asdf qwer ';
	var additionClassName = 'qwer';
	var elementLabel = 'Element';
	var childrenLabel = 'Children';
	e.appendChild(e2);
	e.appendChild(e4);

	// Test
	var view = new View(e);
	assertPropertyEquals(view, 'e', e);

	// Test setAttribute

	// Test setClassName
	view.setClassName(firstClassName);
	assertPropertyEquals(e, 'className', firstClassName);

	// Test addClassName
	view.addClassName(additionClassName);
	assertPropertyEquals(e, 'className', firstClassName);

	// Test removeClassName
	view.removeClassName('qwer');
	assertPropertyEquals(e, 'className', 'zvc asdf');

	// Test clearClassName
	view.clearClassName();
	assertPropertyEquals(e, 'className', '');

	// Test appendChild
	view.appendChild(e3);
	assertArrayEquals(view.e.children, [ e2, e4, e3 ], elementLabel, childrenLabel, true);

	// Test removeChild
	view.removeChild(e3);
	assertArrayEquals(view.e.children, [ e2, e4 ], elementLabel, childrenLabel, true);

	// Test clearChildren
	view.clearChildren();
	assertArrayEquals(e.children, []);
})();