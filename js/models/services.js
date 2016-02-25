app.factory('allservice', function ($http) {
	return {
		getusers: function () {
			return $http.get('js/modules/Users.json');
        	},
		getprojects: function () {
			return $http.get('js/modules/Projects.json');
        	},
		gettasks: function () {
			return $http.get('js/modules/Tasks.json');
        	}
    };
});



app.factory('userservice', function ($http ,allservice) {
	return {
		get: function () {
			//return allservice.get('js/modules/Users.json');
			return allservice.getusers();
        }
    };
});

app.factory('projectservice', function ($http,allservice) {
	return {
		get: function () {
			//return $http.get('js/modules/Projects.json');
			return allservice.getprojects();
        	
        }
    };
});

app.factory('taskservice', function ($http,allservice) {
	return {
		get: function () {
			//return $http.get('js/modules/Tasks.json');
			return allservice.gettasks();
        		
        }
    };
});


app.factory('paramService',function($http,$q,allservice){
	return {
		get:function(info) {
			var obj = [];
			var defered = $q.defer();
		   	allservice.getprojects().success(function(data){
	            for(var i=0; i < data.projects.length; i++){
					for(var j=0; j < data.projects[i].projectMembers.userId.length; j++){
						if(info  == data.projects[i].projectMembers.userId[j]){
							obj.push(data.projects[i]); 
						}
					}
				}
				defered.resolve(obj);
            });
            return defered.promise;
		}
	};
});