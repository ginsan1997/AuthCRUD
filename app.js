$(document).ready(function(){


$("#formLog").on("submit", function(){
	$.ajax({
		url: '/loginCheck.php',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
			$('#loginCheck').html(data);
		}
	});
});
$("#formReg").on("submit", function(){
	$.ajax({
		url: '/registerCheck.php',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
			$('#registerCheck').html(data);
		}
	});
});





})
