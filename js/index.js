/*在访问这个页面的时候需要验证是否已经登陆*/
$(function()
{
	console.log('login check');
	if (typeof(Storage)!=='undefined')
	{
		console.log(sessionStorage.isLogin)
		if ((!sessionStorage.isLogin)||(sessionStorage.isLogin == 'false'))
		{
			console.log('tz');
			location.href = 'login.html';
			/*var userName = sessionStorage.userName;
			$('#nav_user_btn').html('<i class="Hui-iconfont">\&\#xe62c;</i> 
			'+userName+'<i class="Hui-iconfont">\&\#xe6d5;</i>');*/
			/*layer.open({
				type: 2,
				area: ['100%', '100%'],
				fix: true, //不固定
				maxmin: false,
				shade:0.4,
				title: '登录',
				content: 'login.html',
				closeBtn:0,
			});*/
		} else 
		{
			//alert('welcome '+sessionStorage.userName+" !");
		}
	}
});