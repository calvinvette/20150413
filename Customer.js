var Customer = function() {
	this.customerId = -1;
	this.firstName = "";
	this.lastName = "";
	this.phoneNumber = "";
	this.email = "";
}

Customer.prototype.getCustomerId = function() {
	return this.customerId;
};

Customer.prototype.setCustomerId = function(customerId) {
	this.customerId = customerId;
};

Customer.prototype.getFirstName = function() {
	return this.firstName;
};

Customer.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};

Customer.prototype.toString = function() {
	return "Customer ID# " + this.getCustomerId()
			+ ": " + this.getFirstName() + " " + this.lastName;
}


