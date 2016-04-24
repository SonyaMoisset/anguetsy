angular
    .module('etsyApp', ['ngStamplay', 'ui.router', 'UserService', 'app.routes', 'app.admin', 'app.authenticate', 'app.checkout', 'app.home', 'app.product', 'app.profile', 'app.shop'])
    .controller('MainController', ['User', '$rootScope', MainController]);

function MainController(User, $rootScope) {
  var main = this;
  main.logout = logout;
  $rootScope.currentUser = {};

  User.getCurrent()
    .then(function(data) {
      if (data.get('_id')) {
        $rootScope.currentUser.id    = data.get('_id');
        $rootScope.currentUser.name  = data.get('displayName');
        $rootScope.currentUser.image = data.get('profileImg');
      } else {
        $rootScope.currentUser = {};
      }
    });
  }

  function logout() {
    User.logout();
    $rootScope.currentUser = {};
  } 

}
