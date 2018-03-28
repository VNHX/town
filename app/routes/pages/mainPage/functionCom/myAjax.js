module.exports={
	myAjax : function(obj,callbackparam){
		$.ajax({
		  	url: 'http://116.62.33.209:9090/'+obj.url,
		  	data: obj.requireData,
		  	dataType: 'json',
		  	type: obj.requireType,
		  	timeout: 10000, 
		  	async: obj.async,
		  	success: callbackparam,
		  	error: function(XMLHttpRequest, textStatus, errorThrown){
		  		if(textStatus=='timeout'){
		  			alert('请求超时')
		  		}
		  	}
		})
	}
}