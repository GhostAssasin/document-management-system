app.directive('tableWithTeacher', function() {
	return {
		restrict: 'E',
		templateUrl: 'modules/teachers/table.teachers.template.html',
		scope: false,
		controller: 'TeachersCtrl'
	}
});
