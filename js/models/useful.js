app.factory('userservice', function ($http) {
	return {
		get: function () {
			return $http.get('js/modules/Users.json');
        		}
    	};
});

app.factory('projectservice', function ($http) {
	return {
		get: function () {
			return $http.get('js/modules/Projects.json');
        		}
    	};
});

app.factory('taskservice', function ($http) {
	return {
		get: function () {
			return $http.get('js/modules/Tasks.json');
        		}
    	};
});

app.factory('allservice', function ($http) {
	var fun = {};
	var fData;
	fun.getusers = function () {
		return $http.get('js/modules/Users.json');
	}

	fun.getprojects = function () {
		return $http.get('js/modules/Projects.json').success(function(res){
			console.log("hihihih")
			fun.setProjects(res);
		});
	}

	fun.gettasks = function () {
		return $http.get('js/modules/Tasks.json');
	}

	fun.setProjects = function(data){
		console.log("Ya i ma here.....")
		fData = data;
	}

	fun.projects = function(){
		return fData;
	}


    return fun;
});

app.factory('paramService',function($http, allservice){
	var obj =[];
		return {
				get: function(info){
					console.log(allservice.projects())
					return allservice.projects();
				}
			// get:function(info) {
			//  	return $http.get('js/modules/Projects.json').success(function(data){
	  //               for(var i=0; i < data.projects.length; i++){
			// 			for(var j=0; j < data.projects[i].projectMembers.userId.length; j++){
			// 				if(info  == data.projects[i].projectMembers.userId[j]){
			// 					console.log(data.projects[i]);
			// 					obj.push(data.projects[i]); 
			// 				}
			// 			}
			// 		}
			// 		return obj;
	  //           });
			// }
		};

});					