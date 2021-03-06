(function() {

  angular
  .module('mySiteApp')
  .service('contactData', contactData);

  contactData.$inject = ['$http'];
  function contactData ($http) {

    var sendTheFormWithCaptcha = function(data) {
      console.log("Service called with data:");
      console.log(data);

      return $http.post('/api/verifyCaptcha', data);
    };

    return {
      sendTheFormWithCaptcha: sendTheFormWithCaptcha
    };
  }

})();