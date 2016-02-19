'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolioApp', [
  'ngRoute',
  'projectCtrl',
  'skillsCtrl',
  'ui.bootstrap'
])
.controller('mainController', function($scope,$log,$location,anchorSmoothScroll) {	
	$scope.gotoElement = function (eID){
		$log.log("going");
      // set the location.hash to the id of
      // // the element you wish to scroll to.
      // $location.hash(eID);
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };
})
<<<<<<< Updated upstream
=======
.controller('homeController', function($scope,$log) {	
	
})
>>>>>>> Stashed changes
.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'main.html'
	});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}])
.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 55);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});