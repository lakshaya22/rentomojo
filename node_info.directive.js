angular.module("app").directive('viewmode',function(){
    return {
        restrict:'E',
        template:'<div class="card">'+
        '<div class="container">'+
        '<h4><b>{{teamName}}</b></h4>'+
        '<p>{{personName}}</p>'+ 
        '</div>'+
        '</div>',
        scope:{
        teamName:'=',
        personName:'=',
        // designation:'=',
        // reportingEmployees:'=',
        // assignedEmployess:'='
     },
     link:function(scope){
    
     }
    }
})