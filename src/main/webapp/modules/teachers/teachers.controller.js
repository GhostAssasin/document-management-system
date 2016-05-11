app.controller('TeachersCtrl',['$scope','$http','TeachersService','$rootScope','ngDialog','BufferService',function ($scope,$rootScope,TeachersCtrlService,$http,ngDialog,BufferService){
  var refreshTaskList=function(){
    $scope.Visible=true;
    $scope.visibleMessageDel=false;
    $scope.dateForFilter={};

    for(var l=0; l<=3;l++) {
      var success = function (response) {
        $scope.allTeachers = response.data;
        $scope.totalItems = response.data.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.maxSize = 5;
      };
      TeachersCtrlService.GetAll(success);
    }
    }

  refreshTaskList();

  $scope.clickToTryDelTask = function (taskId) {
    BufferService.setFirstLastNameForDel($scope.allTeachers,taskId);
    ngDialog.open({
      template: 'modules/teachers/responseBeforDelete.template.html',
      controller: ['$scope', 'BufferService', function($scope, BufferService) {
        $scope.FLNameDel=BufferService.getFirstLastNameForDel();
        $scope.deletedTask=function(){
          TeachersCtrlService.Delete(BufferService.getTeacherIdDeleted());
          refreshTaskList();
          $scope.closeThisDialog('');
        }
      }]
    });
  };


  $scope.changeOrCreateTask=function (id,save){
    BufferService.setDataForTeacher($scope.allTeachers,id);
    ngDialog.open({
      showClose:false,
      className:'ngdialog-theme-for-editor',
      template: 'modules/teachers/changeOrCreateTeachers.template.html',
      controller: ['$scope', 'BufferService', function($scope, BufferService) {
        if(id<0){
          BufferService.resetDataForTask();
        }
        $scope.whatDo=true;
        $scope.changed={"a":false,"b":false,"c":false,"d":false};
        $scope.teacher=BufferService.getDataForTask();
        $scope.first_name=$scope.teacher.first_name;
        $scope.last_name=$scope.teacher.last_name;
        $scope.subject=$scope.teacher.subject;
        $scope.last_activity=$scope.teacher.last_activity;
        $scope.groups=$scope.teacher.groups;
        $scope.saveTask=function(){
          $scope.teacher.first_name=$scope.first_name;
          $scope.teacher.last_name=$scope.last_name;
          $scope.teacher.subject=$scope.subject;
          $scope.teacher.last_activity= $scope.last_activity;
          $scope.teacher.groups=$scope.groups;
          if(save){
            TeachersCtrlService.Update($scope.teacher);
            refreshTaskList();
          }
          else{
            TeachersCtrlService.Create($scope.teacher);
            refreshTaskList();
          }
          $scope.closeThisDialog('');
        };
        $scope.beenChanges= function(){
          if(id<0){
            if($scope.changed.a && $scope.changed.b && $scope.changed.c && $scope.changed.d){$scope.whatDo=false;}
          }
          else{
            if($scope.changed.a || $scope.changed.b || $scope.changed.c || $scope.changed.d){$scope.whatDo=false;}
          }
        };
      }]
    });
  };
  
  }]);
