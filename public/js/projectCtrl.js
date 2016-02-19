angular.module('projectCtrl', ['ui.bootstrap'])
.controller('projectController', function($scope,$log) {
	$scope.activeProject = 0;
	$scope.projects=[
	{title:"PackHire",img:"assets/images/PackHire-Big.png",url:"http://www.packhire.com", role:"Software Engineering (Full Stack)"},
	{title:"HatchGood",img:"assets/images/HatchGood-Big.png",url:"http://www.hatchgood.com", role:"Software Engineering (Full Stack)"},
	{title:"SEAM",img:"assets/images/SEAM-Big.png",url:"http://seam.herokuapp.com", role:"Software Engineering (Full Stack)"},
	{title:"Twitter Filter",img:"assets/images/Twitter-Big.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)"},
	{title:"Front End",img:"assets/images/Front.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)"},
	];


	$scope.setActiveProject = function(num){
		$scope.activeProject = num;
	}

	$scope.isActive = function(project){
        return $scope.projects.indexOf(project) == $scope.activeProject;
    }
})
.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [{image:"assets/images/PackHire-Big.png"},{image:"assets/images/HatchGood-Big.png"}];
  var currIndex = 0;
})
.config(['$provide', Decorate]);
  function Decorate($provide) {

  //Override UI Bootstrap Carousel Directive's Template
  $provide.decorator('uibCarouselDirective', function($delegate) {
    var directive = $delegate[0];  
    directive.templateUrl = "partials/general/carousel.tpl.html";
    
    return $delegate;
  });
};