Calculator = function() {
	this.value = 0;
};

Calculator.prototype.add = function(number) {
	if (typeof(number) != "number") {
		alert("Argument must be a number");
	}
	this.value += number;
};

Calculator.prototype.sub = function(firstNumber, secondNumber) {
	if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
		alert("Argument must be a number");
	}
	this.sum = firstNumber - secondNumber;
	this.value += this.sum;
};

Calculator.prototype.multi = function(firstNumber, secondNumber) {
	if(typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
		alert("Argument must be a number");
	}
	this.sum = firstNumber * secondNumber;
	this.value += this.sum;
};

Calculator.prototype.div = function(firstNumber, secondNumber) {
	if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
		alert("Argument must be a number");
	}
	else if (firstNumber === 0 || secondNumber === 0) {
		alert("You can not divide by zero");
	}
	this.sum = firstNumber / secondNumber;
	this.value += this.sum;
};