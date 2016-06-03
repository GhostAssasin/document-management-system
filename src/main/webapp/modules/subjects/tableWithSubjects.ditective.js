app.directive('tableWithSubjects', function() {
	return {
		restrict: 'E',
		templateUrl: 'modules/subjects/table.subjects.template.html',
		scope: false,
		controller: 'SubjectsCtrl'
	}
});
