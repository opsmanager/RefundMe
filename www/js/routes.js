angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('myReceipts', {
    url: '/my-receipts',
    templateUrl: 'templates/myReceipts.html',
    controller: 'myReceiptsCtrl'
  })

  .state('receiptDetails', {
    url: '/receipt-details',
    templateUrl: 'templates/receiptDetails.html',
    controller: 'receiptDetailsCtrl'
  })

  .state('cameraView', {
    url: '/camera-view',
    templateUrl: 'templates/cameraView.html',
    controller: 'cameraViewCtrl'
  })

  .state('addReceiptDetails', {
    url: '/add-receipt-details',
    templateUrl: 'templates/addReceiptDetails.html',
    controller: 'addReceiptDetailsCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});