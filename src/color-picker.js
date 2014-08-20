var colorPicker = (function () {
	var primaryColor = 'p',
		secundaryColor = 's';

	var o = {
		p: '#000000',
		s: '#ffffff',

		order:['primary', 'secundary'],
		render: function () {

		},
		attached: function () {
			this.digest();
		},
		switchColors: function () {
			switchOrder();

			transitional = primaryColor;

			primaryColor = secundaryColor;
			secundaryColor = transitional;

			//this.digest();
		},
		digest: function () {
			this.primary = this[primaryColor];
			this.secundary = this[secundaryColor];

			p = color2color(this.primary, 'hex');
			s = color2color(this.secundary, 'hex');
		}
	};

	var switchOrder = function(){
		var transitional = o.order[0];

		o.order[0] = o.order[1];
		o.order[1] = transitional;
	};

	Object.defineProperty(o, 'primary', {
		get: function () {
			return this[primaryColor];
		},
		set: function (value) {
			this[primaryColor] = color2color(value, 'hex');
		}
	});

	Object.defineProperty(o, 'secundary', {
		get: function () {
			return this[secundaryColor];
		},
		set: function (value) {
			this[secundaryColor] = color2color(value, 'hex');
		}
	});

	return o;
})();
