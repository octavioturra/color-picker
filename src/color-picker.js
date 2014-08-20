var colorPicker = {
	p: '#000000',
	s: '#FFFFFF',
	primary: '',
	secundary: '',
	primaryColor: 'p',
	secundaryColor: 's',
	pClass: 'primary',
	cClass: 'secundary',
	observe: {
		primary: 'digest',
		secundary: 'digest',
		p: 'render',
		s: 'render'
	},
	render: function () {

	},
	attached: function () {
		this.digest();
	},
	switchColor: function () {
		var transitional = this.pClass;

		this.pClass = this.sClass;
		this.sClass = transitional;

		transitional = this.primaryColor;

		this.primaryColor = this.secundaryColor;
		this.secundaryColor = transitional;

		this.digest();
	},
	digest: function () {
		this.primary = this[this.primaryColor];
		this.secundary = this[this.secundaryColor];

		p = color2color(this.primary, 'hex');
		s = color2color(this.secundary, 'hex');

		console.log(this.primary, this.secundary)
	}
};
