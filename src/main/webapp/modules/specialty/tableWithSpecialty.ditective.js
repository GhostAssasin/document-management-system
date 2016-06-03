app.directive('tableWithSpecialty', function() {
	return {
		restrict: 'E',
		templateUrl: 'modules/specialty/table.specialty.template.html',
		scope: false,
		controller: 'SpecialtyCtrl'
	}
});
