'use strict';

app.service('BufferServiceSpecialty', function () {
    var specialty={};
   return {
        setDataForSpecialty: function(allSpecialty,id){
          for(var i=0; i<allSpecialty.length; i++){
            var ob=allSpecialty[i];
            if(id==ob.id){
              specialty = allSpecialty[i];
              break;
            }
          }
        },
        getDataForSpecialty: function () {
          return specialty;
        },
        resetDataForSpecialty: function () {
            delete (specialty.first_name);
            delete (specialty.last_name);
              return specialty;
        }
}
});
