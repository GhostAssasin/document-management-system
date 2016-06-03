app.controller('SubjectsCtrl',['$scope','$http','SubjectsService','$rootScope','ngDialog','BufferServiceSubject',function ($scope,$rootScope,SubjectsService,$http,ngDialog,BufferServiceSubject){
  var refreshSubjectsList=function(){
    console.log("as");
    $scope.Visible=true;
    $scope.visibleMessageDel=false;
    $scope.dateForFilter={};

    for(var l=0; l<=5;l++) {
      var success = function (response) {
        delete ($scope.allSubjects);
        $scope.allSubjects = response.data;
        $scope.totalItems = response.data.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.maxSize = 5;
      };
      SubjectsService.GetAll(success);
    }
    };

  refreshSubjectsList();

  $scope.clickToDelSubjects = function (subId) {
    SubjectsService.Delete(subId);
    refreshSubjectsList();
  };


  $scope.changeOrCreateSubjects=function (id,save){
      BufferServiceSubject.setDataForSubject($scope.allSubjects,id)
     ngDialog.open({
      showClose:false,
      className:'ngdialog-theme-for-editor',
      template: "modules/subjects/changeOrCreateSubjectTemplate.html",
      controller: ['$scope', 'BufferServiceSubject', function($scope, BufferServiceSubject) {
        if(id<0){
          $scope.subjects_name="";
          $scope.subject1={};
        } else {
          $scope.subject2 = BufferServiceSubject.getDataForSubject();
          $scope.subjects_name=$scope.subject2.subjects_name;
        }
        $scope.saveSubject=function(){
          if(save){
            $scope.subject2.subjects_name=$scope.subjects_name;
            SubjectsService.Update($scope.subject2);
            refreshSubjectsList();
          }
          else{
            $scope.subject1.subjects_name=$scope.subjects_name;
            SubjectsService.Create($scope.subject1);
            refreshSubjectsList();
          }
          $scope.closeThisDialog('');
        };
      }]
    });
  };
  
  }]);
