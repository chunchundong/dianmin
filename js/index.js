var names = ["小敏", "小于", "小孩", "后一个", "会放假", "更好的", "烦人精","投入也","还有人","儿童提供","考虑决","好地方","交话费"];
window.onload = function() {
	//将名字循环添加到盒子中
	for(var i = 0; i < names.length; i++) {
		var spans = document.createElement("span");
		spans.innerText = names[i];
		spans.className = "span_style";
		my$("box").appendChild(spans);
	}
};

//函数给随机一个span添加类
function setSpanStyle() {
	var num = parseInt(Math.random() * names.length);
	var spanObj = my$("box").getElementsByTagName("span");
	for(var i = 0; i < spanObj.length; i++) {
		spanObj[i].className = "span_style";
		spanObj[num].className = "span_style active";
	}
}

//函数给随机两个span添加类
function setSpanStyle2() {
	var num1 = parseInt(Math.random() * names.length);
	var num2 = parseInt(Math.random() * names.length);
	var spanObj = my$("box").getElementsByTagName("span");
	for(var i = 0; i < spanObj.length; i++) {
		spanObj[i].className = "span_style";
		spanObj[num1].className = "span_style active";
		spanObj[num2].className = "span_style active";
	}
}

var flag = 0;
//给开始按钮添加点击事件
addEventListener(my$("start"), "click", function() {
	//设置定时器，每隔1毫秒执行一次setSpanStyle函数
	flag = window.setInterval(setSpanStyle, 50);

});

//给开始2按钮添加点击事件
addEventListener(my$("start2"), "click", function() {
	//设置定时器，每隔1毫秒执行一次setSpanStyle函数
	flag = window.setInterval(setSpanStyle2, 50);

});

//给结束按钮添加点击事件
addEventListener(my$("stop"), "click", function() {
	window.clearInterval(flag);
});