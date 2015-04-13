// alert("Don't ever use alert boxes. They're stupid and amateurish.");

/*
window.onload = function() {



var btnPressMe = document.createElement("button");
btnPressMe.innerHTML = "Press Me";
var statusBar = document.getElementById("status");

statusBar.innerHTML = "Customer Saved."

var bodyTag = document.getElementsByTagName("body")[0];
bodyTag.appendChild(btnPressMe);

btnPressMe.addEventListener("click", function(e) {
  statusBar.innerHTML += "<br/>Pressed@" + new Date();
});



};

*/
var customer = new Customer();


$(document).ready(function() {
	// var currentContent = $("#status").html(); // Getter
	// $("#status").html("Customer Saved."); // setter
	// var btnPressMe = document.createElement("button");
	// $(btnPressMe).html("Save Customer");
	$("#txtCustomerId").change(function(e) {
		customer.setCustomerId($("#txtCustomerId").val());
	});

	$("#txtFirstName").on("change", function(e) {
		customer.setFirstName($(this).val());
	});


	$("#txtLastName").change(function(e) {
		customer.lastName = $(this).val();
	});

	$("#txtPhoneNumber").change(function(e) {
		customer.phoneNumber = $(this).val();
	});

	$("#txtEmail").change(function(e) {
		customer.email = $(this).val();
	});

	$(document).on('firstNameChange', function(e, data) {
		console.log("first name changed");
		console.log(e);
		console.log(data);
		if ($("#txtFirstName").val() != data) {
			$("#txtFirstName").val(data);
		}
	});


	$("#btnSaveCustomer").click(function(e) { // $("#...").on('click', function(e) ...
		// var customerId = $("#txtCustomerId").val();
		// var firstName = $("#txtFirstName").val();
		// var lastName = $("#txtLastName").val();
		// var phoneNumber = $("#txtPhoneNumber").val();
		// var email = $("#txtEmail").val();

		// var customer = new Customer(customerId, firstName, lastName, phoneNumber);
		// var customer = {
		// 	"customerId" : customerId,
		// 	"firstName" : firstName,
		// 	"lastName" : lastName,
		// 	"phoneNumber" : phoneNumber,
		// 	"email" : email
		// }

		console.log("customer saved to REST Server (NOT): ");
		console.log(customer);
		$("#status").append("<br/>Saved Customer@" + new Date());
	});
	// $("body").append(btnPressMe);
});





