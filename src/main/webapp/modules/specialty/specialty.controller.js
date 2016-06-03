/**
 * Created by gregory on 15.05.16.
 */
app.controller('SpecialtyCtrl',['$scope','SpecialtyService','BufferServiceSpecialty','ngDialog',function ($scope,SpecialtyService,BufferServiceSpecialty,ngDialog){

    $scope.Visible=true;
    $scope.visibleMessageDel=false;

    var refreshSpecialtyList=function(){

        for(var l=0; l<=5;l++) {
            var success = function (response) {
                $scope.allSpecialty=response.data;
            };
            SpecialtyService.GetAll(success);
        }

    };

    refreshSpecialtyList();

    $scope.deleteSpecialty=function (id) {
        SpecialtyService.Delete(id);
        refreshSpecialtyList();
    }

    $scope.changeOrCreateSpecialty=function (id,save){
        BufferServiceSpecialty.setDataForSpecialty($scope.allSpecialty,id);
        
        ngDialog.open({
           showClose:false,
            className:'ngdialog-theme-for-editor',
            template: 'modules/specialty/changeOrCreateSpecialtyTemplate.html',
            controller: ['$scope', 'BufferServiceSpecialty', function($scope, BufferServiceSpecialty) {
                $scope.whatDo=true;
                $scope.changed={"a":false,"b":false};
                if(id<0){
                    $scope.specialty_name="";
                    $scope.specialty_abbreviation="";
                    $scope.specialty1=BufferServiceSpecialty.resetDataForSpecialty();
                } else {
                    $scope.specialty2 = BufferServiceSpecialty.getDataForSpecialty();
                    $scope.specialty_name = $scope.specialty2.specialty_name;
                    $scope.specialty_abbreviation = $scope.specialty2.specialty_abbreviation;
                }
                    $scope.saveSpecialty=function(){
                        if(save){
                            $scope.specialty2.specialty_name=$scope.specialty_name;
                            $scope.specialty2.specialty_abbreviation=$scope.specialty_abbreviation;
                            SpecialtyService.Update($scope.specialty2);
                            refreshSpecialtyList();
                        }
                        else{
                            $scope.specialty1.specialty_name=$scope.specialty_name;
                            $scope.specialty1.specialty_abbreviation=$scope.specialty_abbreviation;
                            SpecialtyService.Create($scope.specialty1);
                            refreshSpecialtyList();
                        }
                        $scope.closeThisDialog('');
                    };
                    
                    $scope.beenChanges= function(){

                        if(id<0){
                            if($scope.changed.a && $scope.changed.b){$scope.whatDo=false;}
                        }
                        else{
                            if($scope.changed.a || $scope.changed.b){$scope.whatDo=false;}
                        }
                    };
                }]

        });
    };



}]);