angular.module('projectCtrl', []).controller('projectController', function($scope,$log) {
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
});