describe("Calculator", function() {

	beforeEach(function() {
		calc = new Calculator();
	});

	describe("Addition function", function() {
		it("should add two numbers together and return the result", function() {
			calc.add(2);
			calc.add(2);
			expect(calc.value).toBe(4);
		});

		it("should not return 4 if the parameteres given don't add up to 4", function() {
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.add();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});

	describe("Subtract function", function() {
		it("should subtract one number from a second number and return the result", function() {
			calc.sub(12,6);
			expect(calc.value).toBe(6);
		});
		it("should return a minus if the second number is greater than the first number", function() {
			calc.sub(5,10);
			expect(calc.value).toBe(-5);
		});
		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.sub();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});

	describe("Multiply function", function() {
		it("should multiply one number with a second number and return the result", function() {
			calc.multi(2,10);
			expect(calc.value).toBe(20);
		});

		it("should not return 20 if the parameteres given don't multiply to 20", function() {
			calc.multi(3,10);
			expect(calc.value).toBe(30);
		});

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.multi();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});

	describe("Divide function", function() {
		it("should divide one number by a second number and return the result", function() {
			calc.div(100,10);
			expect(calc.value).toBe(10);
		});

		it("should not return 10 if the parameteres given don't divide to 10", function() {
			calc.div(50,10);
			expect(calc.value).toBe(5);
		});

		it("should have called the alert function if either number is zero", function() {
			spyOn(window, "alert");
			calc.div(0,5);
			expect(window.alert).toHaveBeenCalledWith("You can not divide by zero");
		});

		it("should have called the alert function if either number is undefined", function() {
			spyOn(window, "alert");
			calc.div();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	})
});