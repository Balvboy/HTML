require.config({
    paths: {
        jquery: 'jquery.min',
       	flat: 'flat-ui.min',
        //bootstrap:'bootstrap.min'
        modal: 'modal'
    },
    shim : {  
    			flat : {
    				deps : ['jquery']
    			},
	            modal: {  //设置依赖，表示bootstrap需要依赖jquery
	                deps : [ 'jquery' ]
	               // exports : 'bootstrap'  
	            }  
          }  
});
require(['jquery','modal'], function($) {
    $(".list-group-item").click(function(e){
		if($(e.target).attr("id")=="addbtn"){
			$('#add').modal();
		}else{
			$(".active").removeClass("active");
			$(e.target).addClass("active");
			$(".content h2").text($(e.target).text());
		}
	});
	$(".version li a").click(function(e){
		var content = $(e.target).text();
		var versiondata = $(e.target).attr("version-data");
		$(".version-drop").html(content+"<span class='caret'></span>");
		$(".alert-info").text(versiondata);
	});

	$(".list-group-item").dblclick(function(e){
		$('#update').modal()
	});

	$("#signamp").click(function(){
		window.location.href="./content.html";
	});

	$(".signin").click(function(){
		window.location.href="./signin.html";
	});

	$(".signup").click(function(){
		window.location.href="./signup.html";
	});

	$(".navbar-brand").click(function(){
		window.location.href="./login.html";
	})
});

require(['jquery','flat'],function($){
	$("select").select2({dropdownCssClass: 'dropdown-inverse'});
})