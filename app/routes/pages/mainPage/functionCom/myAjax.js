module.exports={
	myAjax : function(obj,callbackparam){
		$.ajax({
		  	url: 'http://116.62.33.209:9090/'+obj.url+"callback="+callbackparam,
		  	data: obj.data,
		  	dataType: obj.dataType,
		  	type: obj.type,
		  	timeout: 10000, 
		  	error: function(XMLHttpRequest, textStatus, errorThrown){
		  		if(textStatus=='timeout'){
		  			alert('请求超时')
		  		}
		  	}
		})
	}
}