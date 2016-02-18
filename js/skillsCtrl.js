angular.module('skillsCtrl', []).controller('skillsController', function($scope,$log) {
	$scope.activeProject = 0;
	$scope.skillsSet=[
		{category:"front-end ",
			skills:[
				{title:"HTML",img:"assets/images/PackHire.png",url:"http://www.packhire.com"},	
				{title:"HTML",img:"assets/images/PackHire.png",url:"http://www.packhire.com"},
				{title:"HTML",img:"assets/images/PackHire.png",url:"http://www.packhire.com"},
				{title:"HTML",img:"assets/images/PackHire.png",url:"http://www.packhire.com"},
			]
		},

	];


});