app.controller('TeachersCtrl',['$scope','$http','TeachersService','$rootScope','ngDialog','BufferService',function ($scope,$rootScope,TeachersCtrlService,$http,ngDialog,BufferService){

  var refreshTaskList=function(){
    $scope.Visible=true;
    $scope.visibleMessageDel=false;
    $scope.dateForFilter={};


    for(var l=0; l<=5;l++) {
      var success = function (response) {
        delete ($scope.allSpecialty);
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
      controller: ['$scope', 'BufferService', 'SubjectsService', 'SpecialtyService', function($scope, BufferService, SubjectsService, SpecialtyService) {
        var success1=function (response) {
          $scope.allSubjectss=response.data;
        };
        SubjectsService.GetAll(success1);
        var success2=function (response) {
          $scope.allSpecialtyy=response.data;
        };
        SpecialtyService.GetAll(success2);
        $scope.countSubjects=0;
        $scope.countGroups=0;
        $scope.whatDo=true;
        $scope.changed={"a":false,"b":false,"c":false,"d":false};
        if(id<0){
          $scope.first_name="";
          $scope.last_name="";
          $scope.subject=[];
          $scope.last_activity="";
          $scope.groups=[];
          $scope.teacher1=BufferService.resetDataForTeacher();
        } else {
          $scope.teacher2 = BufferService.getDataForTeacher();
          $scope.first_name = $scope.teacher2.first_name;
          $scope.last_name = $scope.teacher2.last_name;
          $scope.subject = $scope.teacher2.subject;
          $scope.last_activity = $scope.teacher2.last_activity;
          $scope.groups = $scope.teacher2.groups;
        }
        $scope.saveTask=function(){
          if(save){
            $scope.teacher2.first_name=$scope.first_name;
            $scope.teacher2.last_name=$scope.last_name;
            $scope.teacher2.subject=$scope.subject;
            $scope.teacher2.last_activity= $scope.last_activity;
            $scope.teacher2.groups=$scope.groups;
            TeachersCtrlService.Update($scope.teacher2);
            refreshTaskList();
          }
          else{
            $scope.teacher1.first_name=$scope.first_name;
            $scope.teacher1.last_name=$scope.last_name;
            $scope.teacher1.subject=$scope.subject;
            $scope.teacher1.last_activity= $scope.last_activity;
            $scope.teacher1.groups=$scope.groups;
            TeachersCtrlService.Create($scope.teacher1);
            refreshTaskList();
          }
          $scope.closeThisDialog('');
        };
        $scope.compareSub=function (num){
          if($scope.countSubjects>num){
            return true;
          } else {
            return false;
          }
        };
        $scope.compareSpe=function (num){
          if($scope.countGroups>num){
            return true;
          } else {
            return false;
          }
        };
        $scope.addSubject= function () {
          $scope.countSubjects++;
        };
        $scope.addSpecialty= function () {
          $scope.countGroups++;
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
