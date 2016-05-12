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
        getDataForTeacher: function () {
          return teacher;
        },
        resetDataForTeacher: function () {
            delete (teacher.first_name);
            delete (teacher.last_name);
            delete (teacher.subject);
            delete (teacher.last_activity);
            delete (teacher.groups);
            delete (teacher.id);
            delete (teacher.$$hashKey);
                return teacher;
        }
}
});
