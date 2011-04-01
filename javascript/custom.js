function del(id) {
	f_twitter.tid.value = id;
	f_twitter.submit();
}

function checkit() {
	msg = document.getElementById('message').value;
	if(msg == '')
		return false;
}

function showReply(tid) {
	tid = 'f_twitter_reply_' + tid;
	obj = document.getElementById(tid);
	obj.style.visibility = 'visible';
}

function hideReply(tid) {
	tid = 'f_twitter_reply_' + tid;
	obj = document.getElementById(tid);
	obj.style.visibility = 'hidden';
}

$(function(){
	$('#btn1').click(function(){
		$.ajax({
		   url: "ajax_info.txt",
		   success: function(msg){
		     $('#myDiv')[0].innerHTML = msg;
   		});
	});
	$('#btn2').click(function(){
		$('#myDiv').fadeToggle('slow', function() {
    			// Animation complete.
  		});
	});
});

