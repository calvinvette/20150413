var Customer = function() {
	this.customerId = -1;
	this.firstName = "";
	this.lastName = "";
	this.phoneNumber = "";
	this.email = "";

	this.getCustomerId = function() {
		return this.customerId;
	};

	this.setCustomerId = function(customerId) {
		this.customerId = customerId;
	};

}

