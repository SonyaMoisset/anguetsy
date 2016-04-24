angular
  .module('app.routes', [])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRoutes]);

function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
    url: '/',
    templateUrl: '/app/components/home/home.html',
    controller: 'HomeController as home'
  })

  .state('shop', {
    url: '/shop/{name}',
    templateUrl: '/app/components/shop/shop.html',
    controller: 'ShopController as shop'
  })

  .state('product', {
    url: '/listing/{id}/{name}',
    templateUrl: '/app/components/product/product.html',
    controller: 'ProductController as product'
  })

  .state('authenticate', {
    url: '/authenticate',
    templateUrl: '/app/components/authenticate/authenticate.html',
    controller: 'AuthenticateController as authenticate'
  })

  .state('profile', {
    url: '/profile/{user_name}',
    templateUrl: '/app/components/profile/profile.html',
    controller: 'ProfileController as profile'
  })

  .state('checkout', {
    url: '/checkout/{id}',
    templateUrl: '/app/components/checkout/checkout.html',
    controller: 'CheckoutController as checkout'
  })

  .state('admin', {
    url: '/admin',
    templateUrl: '/app/components/admin/admin.html',
    controller: 'AdminController as admin'
  });
}
