angular.module('projectCtrl', ['ui.bootstrap'])
.controller('projectController', function($scope,$log) {
	$scope.activeProject = 0;
	$scope.projects=[
	{title:"PackHire",img:"assets/images/PackHire-Big.png",url:"http://www.packhire.com", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","Javascript","Gulp","Ruby on Rails","PostgreSQL"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    slides:[
      {image:"assets/images/PackHire/pack-0.png"},
      {image:"assets/images/PackHire/pack-1.jpeg"},
      {image:"assets/images/PackHire/pack-2.jpeg"},
      {image:"assets/images/PackHire/pack-3.jpeg"},
      {image:"assets/images/PackHire/pack-4.jpeg"},
      {image:"assets/images/PackHire/pack-5.jpeg"},
      {image:"assets/images/PackHire/pack-6.jpeg"},
    ]
  },
	{title:"HatchGood",img:"assets/images/HatchGood-Big.png",url:"http://www.hatchgood.com", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS/SASS","Javascript","Gulp","Node.JS","MySQL"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    slides:[
      {image:"assets/images/HatchGood/hatch-0.png"},
      {image:"assets/images/HatchGood/hatch-1.jpeg"},
      {image:"assets/images/HatchGood/hatch-2.jpeg"},
      {image:"assets/images/HatchGood/hatch-3.jpeg"},
      {image:"assets/images/HatchGood/hatch-4.jpeg"},
      {image:"assets/images/HatchGood/hatch-5.jpeg"},
    ]
  },
	{title:"SEAM",img:"assets/images/SEAM-Big.png",url:"http://seam.herokuapp.com", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","Javascript","Gulp","Node.JS","MongoDB"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    slides:[
      {image:"assets/images/SEAM/seam-0.png"},
      {image:"assets/images/SEAM/seam-1.jpeg"},
      {image:"assets/images/SEAM/seam-2.jpeg"},
      {image:"assets/images/SEAM/seam-3.jpeg"},
      {image:"assets/images/SEAM/seam-4.jpeg"},
      {image:"assets/images/SEAM/seam-5.jpeg"},
    ]  
  },
	{title:"Twitter Filter",img:"assets/images/Twitter-Big.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","Javascript","Python"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    slides:[
      {image:"assets/images/Twitter/twitter-0.png"},
      {image:"assets/images/Twitter/twitter-1.jpeg"},
      {image:"assets/images/Twitter/twitter-2.jpeg"},
    ]
  },
	{title:"Front End",img:"assets/images/Front.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","SASS","Javascript","Angular.JS","Gulp"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    slides:[
      {image:"assets/images/Front/front-0.png"},
      {image:"assets/images/Front/front-1.jpeg"},
      {image:"assets/images/Front/front-2.jpeg"},
      {image:"assets/images/Front/front-3.jpeg"},
      {image:"assets/images/Front/front-4.jpeg"}
    ]
  },
  {title:"Data Science",img:"assets/images/Front.png",url:"#", role:"Software Engineering & Data Science",
    tech:["Java","Python","C++","MySQL"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    slides:[
      {image:"assets/images/Front/front-0.png"},
      {image:"assets/images/Front/front-1.jpeg"},
      {image:"assets/images/Front/front-2.jpeg"},
      {image:"assets/images/Front/front-3.jpeg"},
      {image:"assets/images/Front/front-4.jpeg"}
    ]
  },
	];


	$scope.setActiveProject = function(num){
		$scope.activeProject = num;
	}

	$scope.isActive = function(project){
        return $scope.projects.indexOf(project) == $scope.activeProject;
    }
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = $scope.projects[$scope.activeProject].slides;
  var currIndex = 0;
  $scope.updateSlide = function(){
    $scope.slides = $scope.projects[$scope.activeProject].slides;
  }
})
.controller('CarouselCtrl', function ($scope,$log) {
  
})