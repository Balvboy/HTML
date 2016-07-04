$(function(){
	$(".list-group-item").click(function(e){
		$(".active").removeClass("active");
		$(e.target).addClass("active");
		$(".content h2").text($(e.target).text());
	});
	$(".version li a").click(function(e){
		var content = $(e.target).text();
		var versiondata = $(e.target).attr("version-data");
		$(".version-drop").html(content+"<span class='caret'></span>");
		$(".alert-info").text(versiondata);
		//window.location.reload();

	});
})