app.controller('userController', function ($scope, userservice) {
	userservice.get().then(function (res) {
		$scope.userobj = res.data;
			
	});
});

app.controller('projectController', function ($scope, projectservice) {
	projectservice.get().then(function (res) {
		$scope.projectobj = res.data;
			
	});
});

app.controller('taskController', function ($scope, taskservice) {
	taskservice.get().then(function (res) {
		$scope.taskobj = res.data;
			
	});
});



app.controller('allController', function ($scope, allservice) {
	allservice.getusers().then(function (res) {
		$scope.userdata = res.data;
			
	});
	allservice.getprojects().then(function (res) {
		$scope.projectdata = res.data;
			
	});
	allservice.gettasks().then(function (res) {
		$scope.taskdata = res.data;
			
	});
});

app.controller('paramController',function($scope ,$routeParams,paramService){
	$scope.id = $routeParams.id;
	paramService.get($scope.id).then(function (res) {
		$scope.paramobj = res;
		console.log($scope.paramobj);
	});
	
})