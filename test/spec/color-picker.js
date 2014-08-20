'use strict';

describe('Color-picker', function () {
	it('should start with black and white', function () {
		expect(colorPicker.primary).toBe('#000000');
		expect(colorPicker.secundary).toBe('#ffffff');
	});
	it('should set primary and secundary color', function(){
		colorPicker.primary = 'red';
		expect(colorPicker.primary).toBe('#ff0000');
		colorPicker.primary = 'blue';
		expect(colorPicker.primary).toBe('#0000ff');
	});
	it('should aways have internal color as HHEEXX', function(){
		colorPicker.primary = '#000'
		expect(colorPicker.p).toBe('#000000');
	});
	it('should have the same primary internal and external color', function(){
		expect(colorPicker.p).toBe(colorPicker.primary);
		expect(colorPicker.s).toBe(colorPicker.secundary);
	});
	it('should switch color order', function(){
		expect(colorPicker.order[0]).toBe('primary');
		expect(colorPicker.order[1]).toBe('secundary');

		colorPicker.switchColors();

		expect(colorPicker.order[0]).toBe('secundary');
		expect(colorPicker.order[1]).toBe('primary');

	});
	it('should switch external color', function(){
		colorPicker.primary = 'red';
		colorPicker.secundary = 'blue';

		expect(colorPicker.p).toBe(colorPicker.primary);

		colorPicker.switchColors();

		expect(colorPicker.p).toBe(colorPicker.secundary);
	});
	it('should switch internal color', function(){
		colorPicker.primary = 'red';
		colorPicker.secundary = 'blue';

		colorPicker.switchColors();

		expect(colorPicker.p).toBe('#0000ff');
		expect(colorPicker.s).toBe('#ff0000');
	});
});
