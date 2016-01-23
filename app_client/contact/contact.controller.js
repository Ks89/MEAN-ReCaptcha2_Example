(function () {

	angular
	.module('mySiteApp')
	.controller('contactCtrl', contactCtrl);

	contactCtrl.$inject = ['$window', '$scope', 'contactData'];
	function contactCtrl ($window, $scope, contactData) {
		var vm = this;
		vm.pageHeader = 'Contact page';	

        //write here your publickey
        //not secret, no problem ;)
        //be careful to use the PUBLIC key and NOT the PRIVATE key!!!!!
		vm.publicKey = '- insert your public key from https://www.google.com/recaptcha/admin -'; 

    vm.onSubmit = function () {
    	console.log(vm.formData);

        var response = $window.grecaptcha.getResponse("");

        console.log('Response is: ' + response);

        // Build the post data with the emailFormData and the response string
        var data = {
            response: response,
            emailFormData: vm.formData
        };

        //send the form with the captcha
        //if the result is "succes" display a message
        //otherwise print an error
        contactData.sendTheFormWithCaptcha(data)
            .success(function (result) {
                vm.formResultMessage = "Success! Captcha is valid, thank you.";
                vm.error = "success";
            })
            .error(function (result) {
                vm.formResultMessage = "Invalid Captcha!";
                vm.error = "danger";
            });
    };
  }
})();