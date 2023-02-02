$(function(){
// 京东隐私政策
	$('#policy').click(function(){
		alert("《京东隐私政策》更新了！");
	});

// 鼠标移入qrcode-box"
	$("#qrcode-box").mouseenter(function(){
		$("#qrcode-img").css("margin-left","0px");
		$("#scanTip-bg").css("display","block");
	}).mouseleave(function(){
		$("#qrcode-img").css("margin-left","66px");
		$("#scanTip-bg").css("display","none");
	});

// login-form tab切换
	// 点击切换
	$(".login-tab a").each(function(index){
		$(this).click(function(){
			$(".checked").removeClass("checked");
			$(".show").removeClass("show");
			$(".login-ways").eq(index).addClass("show");
			$(this).addClass("checked");
		});
	});

// 登录
	$("#login-btn").click(function(){
	// 验证账号
		var loginname=$("#loginname").val();
	// 验证邮箱/用户名/手机号码
		var flag1=false;
		var flagNull1=false;
		var regEmail = /^\w+@[a-z0-9]+\.[a-z]+$/i;
		var regUserName =/^\w{3,16}$/i;
		var regPhone = /^((\d{3}-\d{8}|\d{4}-\d{7,8})|(1[3|5|7|8][0-9]{9}))$/;
		function checkName(obj){
			if(obj==""){
				flagNull1=true;
			}else if ((regEmail.test(obj))||(regUserName.test(obj))||(regPhone.test(obj))) {
				flag1=true;
			}
		}	
	//验证密码
		var loginpwd = $("#loginpwd").val();
		var flag2=false;
		var flagNull2=false;
		var regPwd = /^\w{5,18}$/i;
		function checkPassword(obj){
			if(obj==""){
				flagNull2=true;
			}else if(regPwd.test(obj)){
				flag2=true;
			}
		}
	//点击登录时验证		
		checkName(loginname);
		checkPassword(loginpwd);
		// console.log(loginname,loginpwd,flag1,flag2);
		// console.log(flagNull1,flagNull2);
		if (flagNull1){
			alert("请输入账号！");
		}
		else if (flagNull2) {
			alert("请输入密码！");
		}
		else if(!flag1){
			alert("账号有误！");
		}
		else if (!flag2) {
			alert("密码有误！");
		}
		else{
			alert("登录成功！");
		}
	});

// 忘记密码
	$("#forget-pw").click(function(){
		alert("忘了就让它过去吧，重新注册一个吧！");
	});
});

