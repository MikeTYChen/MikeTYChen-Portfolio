angular.module('projectCtrl', ['ui.bootstrap'])
.controller('projectController', function($scope,$log) {
	$scope.activeProject = 0;
	$scope.projects=[
	{title:"PackHire",img:"assets/images/PackHire-Big.png",url:"http://www.packhire.com", role:"Software Engineering (Full Stack)",
    slides:[
      {image:"assets/images/HatchGood/hatch-1.jpeg"},
      {image:"assets/images/HatchGood/hatch-2.jpeg"},
      {image:"assets/images/HatchGood/hatch-3.jpeg"},
      {image:"assets/images/HatchGood/hatch-4.jpeg"}
    ]
  },
	{title:"HatchGood",img:"assets/images/HatchGood-Big.png",url:"http://www.hatchgood.com", role:"Software Engineering (Full Stack)",
    slides:[
      {image:"assets/images/HatchGood/hatch-1.jpeg"},
      {image:"assets/images/HatchGood/hatch-2.jpeg"},
      {image:"assets/images/HatchGood/hatch-3.jpeg"},
      {image:"assets/images/HatchGood/hatch-4.jpeg"}
    ]
  },
	{title:"SEAM",img:"assets/images/SEAM-Big.png",url:"http://seam.herokuapp.com", role:"Software Engineering (Full Stack)",
    slides:[
      {image:"assets/images/HatchGood/hatch-1.jpeg"},
      {image:"assets/images/HatchGood/hatch-2.jpeg"},
      {image:"assets/images/HatchGood/hatch-3.jpeg"},
      {image:"assets/images/HatchGood/hatch-4.jpeg"}
    ]
  },
	{title:"Twitter Filter",img:"assets/images/Twitter-Big.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)",
    slides:[
      {image:"assets/images/HatchGood/hatch-1.jpeg"},
      {image:"assets/images/HatchGood/hatch-2.jpeg"},
      {image:"assets/images/HatchGood/hatch-3.jpeg"},
      {image:"assets/images/HatchGood/hatch-4.jpeg"}
    ]
  },
	{title:"Front End",img:"assets/images/Front.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)",
    slides:[
      {image:"assets/images/Front/front-1.jpeg"},
      {image:"assets/images/Front/front-2.jpeg"},
      {image:"assets/images/Front/front-3.jpeg"},
      {image:"assets/images/Front/front-4.jpeg"}
    ]
  },
	];
  $scope.emitCategoryInfo = function($event) {
      $scope.$emit("category", {
        category: angular.element($event.target)[0].dataset.category
      });
  };

   $scope.$on("category", function(event, data) {
      $scope.clicks +=1;
      var slides = $scope.allSlides;
      var result = [];
      $scope.slides = $scope.projects[4].slides;;
  });

	$scope.setActiveProject = function(num){
		$scope.activeProject = num;
    $log.log($scope.activeProject);
    $scope.slides = $scope.projects[$scope.activeProject].slides;
    $log.log($scope.slides);
	}

	$scope.isActive = function(project){
        return $scope.projects.indexOf(project) == $scope.activeProject;
    }
})
.controller('CarouselCtrl', function ($scope,$log) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = true;
  $log.log($scope.activeProject);
  $scope.slides =$scope.projects[$scope.activeProject].slides;
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