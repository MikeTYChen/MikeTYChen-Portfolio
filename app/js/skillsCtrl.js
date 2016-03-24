angular.module('skillsCtrl', [])
.controller('skillsController', function($scope,$log) {
	$scope.activeProject = 0;
	$scope.skillsSet=[
		{category:"front-end  &nbsp;",
			skills:[
				{title:"HTML",img:"assets/images/Front/front-0.jpg",url:"http://www.packhire.com"},	
				{title:"CSS & SASS",img:"assets/images/PackHire/pack-0.jpg",url:"http://www.packhire.com"},
				{title:"Javascript",img:"assets/images/SEAM/seam-0.jpg",url:"http://www.packhire.com"},
				{title:"Angular.JS",img:"assets/images/HatchGood/hatch-0.jpg",url:"http://www.packhire.com"},
				{title:"Gulp & Grunt",img:"assets/images/Front/front-0.jpg",url:"http://www.packhire.com"},

			]
		},
		{category:"back-end &amp;&nbsp;<br>databases",
			skills:[
				{title:"Node.JS",img:"assets/images/SEAM/seam-0.jpg",url:"http://www.packhire.com"},	
				{title:"Ruby On Rails",img:"assets/images/PackHire/pack-0.jpg",url:"http://www.packhire.com"},
				{title:"MongoDB",img:"assets/images/HatchGood/hatch-0.jpg",url:"http://www.packhire.com"},
				{title:"MySQL",img:"assets/images/PackHire/pack-3.jpg",url:"http://www.packhire.com"},
				{title:"PostgreSQL",img:"assets/images/PackHire/pack-5.jpg",url:"http://www.packhire.com"},
			]
		},
		{category:"general <br> programming" ,
			skills:[
				{title:"Java",img:"assets/images/DataScience/data-0.jpg",url:"http://www.packhire.com"},	
				{title:"Python",img:"assets/images/DataScience/data-3.jpg",url:"http://www.packhire.com"},
				{title:"C++",img:"assets/images/DataScience/data-4.jpg",url:"http://www.packhire.com"},
			]
		},


	];
})
.filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);