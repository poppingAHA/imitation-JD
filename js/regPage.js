$(function(){
// 验证手机号
	//点击按钮进行验证
	$("#check-phoneNum").click(function(){
		var rePhoneNum = /^((\d{3}-\d{8}|\d{4}-\d{7,8})|(1[3|5|7|8][0-9]{9}))$/;
		var flag=false;
		var flagNull=false;
		// 定义验证手机号的函数
		function checkPhoneNum(obj){
			if (obj=="") {
				flagNull=true;
			}else if(!(rePhoneNum.test(obj))){
				flag=true;
			}
		}	
		// console.log($("#phoneNum").val());
		checkPhoneNum($("#phoneNum").val());	
		if(flagNull){
			alert("请输入手机号！");
		}else if(flag){
			alert("输入的手机号格式有误！");
			$("#phoneNum").val("");
		}else{
			$("#code-box").css("display","block");
			$("#check-phoneNum").css("display","none");
			$("#correct-icon").css("display","block");
		}
	});

// 验证码验证
	var code ="";
	// 定义生成验证码的函数
	function createCode(){
		var codeLength = 6;
		code = "";
		var codeArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g',
		'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
		'w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
		'V', 'W', 'X', 'Y', 'Z'];
		for(var i=0; i<codeLength; i++){
			var r = Math.floor(Math.random()*codeArr.length);
			code = code + codeArr[r];
		}
		// console.log(code);
		$("#code span").text(code);
		// console.log($("#code span").text(code));
	}
	createCode();
	// 点击下一步开始验证
	$(".nextstep").click(function(){
		if($("#code-input").val()==""){
			alert("请输入验证码！");
		}else if ($("#code-input").val().toUpperCase() == code.toUpperCase()) {
			// alert("验证成功！");
			$(".form").eq(0).css("display","none");
			$("#form-reg").css("display","block");
			$(".line").eq(0).css("background","url(./images/reg-icon.png) 0px -128px");
			$(".step-index").eq(1).css("background","url(./images/reg-icon.png) 0px -200px").addClass("index-now");
		}else{
			alert("验证失败！请重新输入验证码。");
			createCode();
		}
	});
	// 清空内容
	$("#code-input").focus(function(){
		if($("#code-input").val()!=""){
			$("#code-input").val("");
		}
	});
	// 点击清空
	$("#clear").click(function(){
		if($("#code-input").val()!=""){
			$("#code-input").val("");
		}
	});
	// 按下回车验证
	document.onkeydown = function(){
		var e = event || window.event;
		if(e && e.keyCode == 13){
			$(".nextstep").click();
		}
	}

// 注册
	// 验证用户名	
	$("#setpwd").click(function(){
		function checkUserName(obj){
			var regUserName =/^\w{3,16}$/i;
			if(obj==""){
				alert("请输入用户名！");
			}else if(!regUserName.test(obj)){
				alert("用户名格式为3至16位字符（数字、字母、下划线）。");
			}else{
				$(".okIcon").eq(0).css("display","block");
			}
		}
		var username = $("#username").val();
		checkUserName(username);
	});
	// 验证密码	
	$("#pwdRepeat").click(function(){
		function checkpwd(obj){
			var regPwd = /^\w{5,18}$/i;
			if(obj=="" || !regPwd.test(obj)){
				alert("请输入5至18位字符（数字、字母、下划线）！");
			}else{
				$(".okIcon").eq(1).css("display","block");
			}
		}
		var setpwd = $("#setpwd").val();
		checkpwd(setpwd);
	});
	// 立即注册
	$("#reg-btn").click(function(){
		// 确认密码
		function comPwd(obj1,obj2){
			if(obj1!=obj2){
				alert("密码有误！请重新输入！");
			}else{
				$("#form-reg").css("display","none");
				$("#regSucceed").css("display","block");
				$(".line").eq(1).css("background","url(./images/reg-icon.png) 0px -128px");
				$(".step-index").eq(2).css("background","url(./images/reg-icon.png) 0px -200px").addClass("index-now");
			}
		}
		comPwd($("#setpwd").val(),$("#pwdRepeat").val());
	});		
});