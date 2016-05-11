'use strict';

app.service('BufferService', function () {
   var firstLastName;
   var teacherIdDeleted;
   var teacher={};

   return {
       setFirstLastNameForDel: function (allTeachers,id) {
         teacherIdDeleted=id;
           for(var i=0;i<allTeachers.length;i++){
             var obj = allTeachers[i];
             if(id==obj.id){
               firstLastName=obj.first_name + " " + obj.last_name;
                 break;
             }
           }
        },
        setDataForTeacher: function(allTeachers,id){
          for(var i=0;i<allTeachers.length;i++){
            var ob=allTeachers[i];
            if(id==ob.id){
              teacher = allTeachers[i];
              break;
            }
          }
        },
       getFirstLastNameForDel: function () {
         return firstLastName;
        },
        getTeacherIdDeleted: function () {
          return teacherIdDeleted;
        },
        getDataForTask: function () {
          return teacher;
        },
        resetDataForTask: function () {
          teacher.first_name='';
          teacher.last_name='';
          teacher.subject='';
          teacher.last_activity='';
          teacher.groups='';
        }
}
});
