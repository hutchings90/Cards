function createElement(params) {
	if (!params) params = {};
	var e = document.createElement(params.type || 'div');
	for (var key in params.attrs) {
		e[key] = params.attrs[key];
	}
	return e;
}