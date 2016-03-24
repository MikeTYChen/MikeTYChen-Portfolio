angular.module('projectCtrl', ['ui.bootstrap'])
.controller('projectController', function($rootScope,$scope,$log) {
	$rootScope.activeProject = 0;
	$scope.projects=[
	{title:"PackHire",img:"assets/images/PackHire-Big.png",url:"http://www.packhire.com", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","Javascript","Gulp","Ruby on Rails","PostgreSQL"],
    about:"PackHire provides you with platform where you can turn people in your network into the best recruiters for your company",
    desc:"Some of the features include social media integration, referral tracking, algorithmic scoring of candidates and referrals, and intuitive dashboard for campaign managers to manage job listings.",
    slides:[
      {image:"assets/images/PackHire/pack-0.jpg"},
      {image:"assets/images/PackHire/pack-1.jpg"},
      {image:"assets/images/PackHire/pack-2.jpg"},
      {image:"assets/images/PackHire/pack-3.jpg"},
      {image:"assets/images/PackHire/pack-4.jpg"},
      {image:"assets/images/PackHire/pack-5.jpg"},
      {image:"assets/images/PackHire/pack-6.jpg"},
    ]
  },
	{title:"SEAM",img:"assets/images/SEAM-Big.png",url:"http://seam.herokuapp.com", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","Javascript","Gulp","Node.JS","MongoDB"],
    about:"SEAM is a platform that eases the pain of meetings. It helps a user plan for focused discussions, gives the power to move conversations forward and align the team on next steps afterwards.",
    desc:"Some of the features include real-time communication (Socket.IO), auto generation of meeting notes, and auto-scheduling of meeting times.",
    slides:[
      {image:"assets/images/SEAM/seam-0.jpg"},
      {image:"assets/images/SEAM/seam-1.jpg"},
      {image:"assets/images/SEAM/seam-2.jpg"},
      {image:"assets/images/SEAM/seam-3.jpg"},
      {image:"assets/images/SEAM/seam-4.jpg"},
      {image:"assets/images/SEAM/seam-5.jpg"},
    ]  
  },
	{title:"Twitter Filter",img:"assets/images/Twitter-Big.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS","Javascript","Python"],
    about:"The Twitter Filter project was a short project that enables a user to pull any user's tweet and filter based on words or date it was tweeted.",
    desc:"Some of the features include filtering of tweets and requests tweets via Twitter API.",
    slides:[
      {image:"assets/images/Twitter/twitter-0.jpg"},
      {image:"assets/images/Twitter/twitter-1.jpg"},
      {image:"assets/images/Twitter/twitter-2.jpg"},
    ]
  },
	{title:"Front End",img:"assets/images/Front.png",url:"http://twitterfilter-miketychen.herokuapp.com/", role:"Front-End Engineering",
    tech:["HTML","CSS","SASS","Javascript","Angular.JS","Gulp"],
    about:"My front end projects consists of creating multiple sites for clients as well as organizations to display data and content in a meaningful and visually optimized way.",
    desc:"Some of the features include task automation, fully responsive, and form generation to Google Sheets for analysis.",
    slides:[
      {image:"assets/images/Front/front-0.jpg"},
      {image:"assets/images/Front/front-1.jpg"},
      {image:"assets/images/Front/front-2.jpg"},
      {image:"assets/images/Front/front-3.jpg"},
      {image:"assets/images/Front/front-4.jpg"}
    ]
  },
  {title:"Data Science",img:"assets/images/Front.png",url:"#", role:"Software Engineering & Data Science",
    tech:["Java","Python","C++","MySQL"],
    about:"My data science and bioinformatics projects include: developing algorithms to optimize engagement and insights on social ads, create pipelines to sequence the genome and map out 3D architecture of whole genomes interactions.",
    desc:"Some of the features include analyzing 5GB of data and statistically filtering and correcting data, visual analysis of all 23 human chromosomes interactions internally and externally, and utilization of Facebook Graph API.",
    slides:[
      {image:"assets/images/DataScience/data-0.jpg"},
      {image:"assets/images/DataScience/data-1.jpg"},
      {image:"assets/images/DataScience/data-2.jpg"},
      {image:"assets/images/DataScience/data-3.jpg"},
      {image:"assets/images/DataScience/data-4.jpg"}
    ]
  },
  {title:"HatchGood",img:"assets/images/HatchGood-Big.png",url:"http://www.hatchgood.com", role:"Software Engineering (Full Stack)",
    tech:["HTML","CSS/SASS","Javascript","Gulp","Node.JS","MySQL"],
    about:"HatchGood is an e-commerce platform that aims to bring great design and new talent to consumer needs. By providing a platform for designers to sell their ideas, consumers are able to purchase well-designed products with a fraction of the cost.",
    desc:"Some of the features include community driven products, and multiple listings.",
    slides:[
      {image:"assets/images/HatchGood/hatch-0.jpg"},
      {image:"assets/images/HatchGood/hatch-1.jpg"},
      {image:"assets/images/HatchGood/hatch-2.jpg"},
      {image:"assets/images/HatchGood/hatch-3.jpg"},
      {image:"assets/images/HatchGood/hatch-4.jpg"},
      {image:"assets/images/HatchGood/hatch-5.jpg"},
    ]
  },
	];


	$scope.setActiveProject = function(num){
		$rootScope.activeProject = num;
	}

	$scope.isActive = function(project){
        return $scope.projects.indexOf(project) == $scope.activeProject;
    }
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $rootScope.slides = $scope.projects[$scope.activeProject].slides;
  var currIndex = 0;
  $scope.updateSlide = function(){
    $rootScope.slides = $scope.projects[$scope.activeProject].slides;
  }
})
.controller('CarouselCtrl', function ($scope,$log) {
  
})