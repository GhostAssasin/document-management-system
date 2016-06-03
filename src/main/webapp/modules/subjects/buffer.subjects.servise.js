/**
 * Created by gregory on 26.05.16.
 */
'use strict';

app.service('BufferServiceSubject', function () {
    var subject={};
    var sub_name;
    return {
        setDataForSubject: function(allSubjects,id){
            for(var i=0; i<allSubjects.length; i++){
                var ob=allSubjects[i];
                if(id==ob.id){
                    subject = allSubjects[i];
                    break;
                }
            }
        },
        getDataForSubject: function () {
            return subject;
        },
        resetDataForSpecialty: function () {
            return subject;
        }
    }
});