window.addEventListener('load',function(){
//J_promotional-top点击关闭
	var ad = document.querySelectorAll('.J_promotional-top')[0];
	// console.log(ad);
	var close = document.querySelector('#close');
	// console.log(close);
	close.onclick = function(){
		ad.style.display = "none";
	}	

// 填充内容函数
	function tianchong(arr,e){
		for(var i=0;i<arr.length;i++){
			e[i].innerHTML = arr[i];
		}
	}

// 鼠标移入显示，移出隐藏
	function toBlock(nav,item){
		for(var i=0;i<nav.length;i++){
			nav[i].index = i;
			nav[i].onmouseenter=function(){
				// console.log(this.index);
				for(var j=0;j<item.length;j++){
					item[j].style.display = "none";
				}
				item[this.index].style.display = "block";
			}
			nav[i].onmouseleave=function(){
				item[this.index].style.display = "none";
			}
		}
	}

// shortcut部分
// 定位部分填充
	var address_one_as =['北京','上海','天津','重庆','河北','山西','河南',
	'辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建',
	'湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏',
	'陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'] 
	var address_one_a = document.querySelector('#address #one').querySelectorAll('a');
	// console.log(address_one_a);
	tianchong(address_one_as,address_one_a);

// 点击选择一个地址，样式改变
	// 默认为福建
	address_one_a[15].style.color = "#FFF";
	address_one_a[15].style.background = "#F10214";
	for(var i=0;i<address_one_a.length;i++){
		address_one_a[i].index = i;
		address_one_a[i].onclick = function(){
			for(var j=0;j<address_one_a.length;j++){
				address_one_a[j].style.color = "#999";
				address_one_a[j].style.background = "#FFF";
			}
			address_one_a[this.index].style.color = "#FFF";
			address_one_a[this.index].style.background = "#F10214";			
		}
	}

// 定位下拉列表
	var dingwei = document.querySelector('#dingwei');
	var address = document.querySelector('#address');
	var fj = document.querySelector('#fj');
	function enter(){
		dingwei.style.paddingLeft = "10px";
		dingwei.style.width = "50px";
		dingwei.style.background = "#fff";
		dingwei.style.border = "1px solid #ccc";
		dingwei.style.borderBottom = "none";
		address.style.display = "block";
		fj.style.color = "#E33333";
	}
	function leave(){
		dingwei.style.background = "#E3E4E5";
		dingwei.style.border = "none";
		fj.style.color = "#999";
		address.style.display = "none";
	}
	dingwei.onmouseenter = function(){
		enter();
	}
	dingwei.onmouseleave = function(){
		leave();
	}
	address.onmouseenter = function(){
		enter();
	}
	address.onmouseleave = function(){
		leave();
	}

//右边菜单栏
	var tabs = document.querySelectorAll('.shortcut_tabs');
	var conts = document.querySelectorAll('.dropdown-layer');
// 鼠标移入时的样式
	function enter2(index){
		index.style.background = "white";
		index.style.borderTop = "1px solid #ccc";
		index.style.borderLeft = "1px solid #ccc";
		index.style.borderRight = "1px solid #ccc";
	}
//鼠标移出时的样式
	function leave2(index1,index2){
		index1.style.background = "#E3E4E5";
		index1.style.border = "none";
		index2.style.display = "none";
	}
// 右边菜单栏鼠标移入时显示，移出时隐藏
	for(var i=0; i<tabs.length; i++){
		tabs[i].index = i;
		tabs[i].onmouseenter = function(){
			enter2(this);
			for(var j=0; j<conts.length; j++){
				conts[j].style.display = "none";
			}
			conts[this.index].style.display = "block";
		}
		tabs[i].onmouseleave = function(){
			leave2(tabs[this.index],conts[this.index]);
		}		
	}
	for(var i=0; i<conts.length; i++){
		conts[i].index = i;
		conts[i].onmouseenter = function(){
			enter2(tabs[this.index]);
		}
		conts[i].onmouseleave = function(){
			leave2(tabs[this.index],this);
		}
	}

// fs部分
// fs_col1
// col1_menu填充col1_menu_lk
	var col1_menu_lks = ['家用电器','手机','运营商','数码','电脑','办公','家居','家具','家装','厨具',
	'男装','女装','童装','内衣','美妆','个护清洁','宠物','女鞋','箱包','钟表','珠宝','男鞋','运动','户外',
	'房产','汽车','汽车用品','母婴','玩具乐器','食品','酒类','生鲜','特产','艺术','礼品鲜花','农资绿植',
	'医药保健','计生情趣','图书','文娱','教育','电子书','机票','酒店','旅游','生活','理财','众筹','白条','保险',
    '安装','维修','清洗','二手','工业品']
	var col1_menu_lk = document.querySelectorAll(".col1_menu_lk");
	// console.log(col1_menu_lk);	
	tianchong(col1_menu_lks,col1_menu_lk);

//鼠标移入col1_menu_item时，显示cate_part；移出时隐藏
	var col1_menu_item = document.querySelectorAll(".col1_menu_item");
	var cate_part = document.querySelectorAll(".cate_part");
	toBlock(col1_menu_item,cate_part);

//填充cate_channel a的内容
	var cate_channel_as = [
	'家电馆<i></i>','家电专卖店<i></i>','家电服务<i></i>','企业采购<i></i>','商用电器<i></i>','以旧换新<i></i>',
	'玩3C<i></i>','手机频道<i></i>','网上营业厅<i></i>','配件频道<i></i>','智能数码<i></i>','影像Club<i></i>',
	'玩3C<i></i>','电脑办公<i></i>','企业采购<i></i>','GAME+<i></i>','装机大师<i></i>','私人定制<i></i>',
	'家装城<i></i>','居家日用<i></i>','精品家具<i></i>','家装建材<i></i>','国际厨具<i></i>','装修服务<i></i>',
	'男装<i></i>','女装<i></i>','内衣','童装童鞋<i></i>',
	'清洁用品<i></i>','美妆馆<i></i>','个护馆<i></i>','妆比社<i></i>','京东国际美妆<i></i>','宠物馆<i></i>',
	'自营鞋靴<i></i>','自营箱包<i></i>','时尚鞋包<i></i>','潮流珠宝<i></i>','奢侈品<i></i>','时尚K金<i></i>',
	'体育服务<i></i>','运动城<i></i>','户外馆<i></i>','健身房<i></i>','骑行馆<i></i>','钟表城<i></i>',
	'全新汽车<i></i>','车管家<i></i>','旗舰店<i></i>','新车装备<i></i>','直营店<i></i>','油卡充值<i></i>',
	'母婴<i></i>','玩具乐器<i></i>','奶粉馆<i></i>','尿裤馆<i></i>','京东国际母婴<i></i>',
	'生鲜<i></i>','食品饮料<i></i>','酒类<i></i>','地方特产<i></i>','京东国际美食<i></i>',
	'京东礼品<i></i>','火机烟具<i></i>','鲜花<i></i>','京东农服<i></i>','同城绿植<i></i>','园林园艺<i></i>',
	'专科用药<i></i>','滋补养生<i></i>','膳食补充<i></i>','健康监测<i></i>','两性情话<i></i>','靓眼视界<i></i>',
	'图书<i></i>','文娱<i></i>','教育培训<i></i>','电子书<i></i>','文娱寄卖商城<i></i>',
	'本周热推<i></i>','精选酒店<i></i>','特惠机票<i></i>','主题乐园<i></i>','电影票<i></i>','会议团建<i></i>',
	'金融首页<i></i>','0元评测<i></i>',
	'京东服务+<i></i>','安装服务<i></i>','维修服务<i></i>','清洗保养<i></i>','企悦服务<i></i>','特色服务<i></i>',
	'企业购<i></i>','工业品<i></i>','京东商用<i></i>','礼品卡<i></i>','元器件<i></i>']
	var cate_channel_a = document.querySelectorAll('.cate_channel a')
	// console.log(cate_channel_a);
	tianchong(cate_channel_as,cate_channel_a);

// 在cate_detail下克隆多个cate_detail_item
	var cate_detail = document.querySelectorAll('.cate_detail');
	var cate_detail_item = document.querySelectorAll('.cate_detail_item');
	var itemNum=[9,8,8,8,6,8,8,8,8,8,5,5,5,5,4,4,4,4];
	for(var i=1;i<18;i++){
		for(var j=0;j<itemNum[i];j++){
			cate_detail[i].appendChild(cate_detail_item[0].cloneNode(true));
		}
	}

//cate_detail_con下创建多个a标签
	var cate_detail_con = document.querySelectorAll('.cate_detail_con');
	var arrA=[9,7,6,7,12,21,17,13,7,9,7,6,7,11,9,10,8,6,7,8,5,8,9,9,5,
	7,7,8,5,8,9,9,5,7,9,8,5,8,7,7,7,8,5,8,9,4,6,6,7,7,5,8,9,9,5,6,7,8,
	5,8,9,9,5,6,7,8,5,8,9,9,5,6,7,8,5,8,9,9,5,6,7,8,5,8,6,7,8,5,8,6,7,
	8,5,8,6,7,8,5,8,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5];
	for(var i=0;i<arrA.length;i++){			
		for(var j=0;j<arrA[i];j++){
			var cate_detail_a=document.createElement('a');
			cate_detail_a.href="javascript:;";
			cate_detail_con[i].appendChild(cate_detail_a);			
		}
	}
	
// 填充cate_detail_item中所有a内容
	var cate_detail_item_a = document.querySelectorAll('.cate_detail a');
	// console.log(cate_detail_item_a);
	var arrA_con = ['电视<i><i>','超薄电视','全面屏电视','智能电视','OLED电视','智慧屏','4K超清电视',
	'55英寸','65英寸','电视配件','空调<i><i>','空调挂机','空调柜机','中央空调','变频空调','一级能效',
	'移动空调','以旧换新','洗衣机<i><i>','滚筒洗衣机','洗烘一体机','波轮洗衣机','迷你洗衣机','烘干机',
	'洗衣机配件','冰箱<i><i>','多门','对开门','三门','双门','冰柜/冰吧','酒柜','冰箱配件', 
	'厨卫大电<i><i>','油烟机','燃气灶','烟灶套装','集成灶','消毒柜','洗碗机','电热水器','燃气热水器',
	'空气能热水器','太阳能热水器','嵌入式厨电','烟机灶具配件','厨房小电<i><i>','破壁机','电烤箱','电饭煲',
	'电压力锅','电炖锅','豆浆机','料理机','咖啡机','电饼铛','榨汁机/原汁机','电水壶/热水壶','微波炉',
	'电火锅','养生壶','电磁炉','面包机','空气炸锅','面条机','电陶炉','煮蛋器','电烧烤炉', '生活电器<i><i>',
	'电风扇','冷风扇','空气净化器','吸尘器','除螨仪','扫地机器人','除湿器','干衣机','蒸汽拖把/拖地机',
	'挂烫机/熨斗','电话机','饮水机','净水器','取暖电器','加湿器','毛球修剪器','生活电器配件','个护健康<i><i>',
	'剃须刀','电动牙刷','电吹风','美容器','洁面仪','按摩器','健康称','卷/直发器','剃/脱毛器','理发器',
	'足浴盆','足疗机','按摩椅','视听影音<i><i>','家庭影院','KTV音响','迷你音响','DVD','功放','回音壁',
	'麦克风','手机通讯<i><i>','手机','游戏手机','5G手机','拍照手机','全面屏手机','老人机','对讲机', 
	'以旧换新','手机维修','运营商<i><i>','合约机','手机卡','宽带','充话费/流量','中国电信','中国移动',
	'中国联通','手机配件<i><i>','手机壳','贴膜','手机存储卡','数据线','充电器','手机耳机','摄影影像<i><i>',
	'数码相机','微单相机','单反相机','拍立得','运动相机','摄像机','镜头','数码配件<i><i>','存储卡',
	'三脚架/云台','相机包','滤镜','闪光灯/手柄','相机清洁/贴膜','机身附件','镜头附件','读卡器','支架',
	'电池/充电器','影音娱乐<i><i>','耳机/耳麦','音箱/音响','智能音箱','便携/无线音箱','收音机','麦克风', 
	'MP3/MP4','专业音频','音频线','智能设备<i><i>','智能手环','智能手表','智能眼镜','智能机器人',
	'运动跟踪器','健康监测','智能配饰','智能家居','体感车','无人机','电子教育<i><i>','学生平板',
	'点读机/笔','早教益智','录音笔','电纸书','电子词典','复读机','翻译机','电脑整机<i><i>','笔记本',
	'游戏本','平板电脑','台式机','一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡',
	'硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘',
	'鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边',
	'网络产品<i><i>','路由器','网络机顶盒','交换机','网络存储','网卡','5G/4G上网','网线','网络配件',
	'办公设备<i><i>','投影机','投影配件','打印机','传真设备','验钞/点钞机','扫描设备','复合机','碎纸机',
	'考勤门禁','文具<i><i>','笔类','本册/便签','办公文具','文件收纳','学生文具','计算器','画具画材',
	'财会用具','文房四宝','耗材<i><i>','墨粉','墨盒','色带','纸类','刻录光盘','厨具<i><i>','水具酒具',
	'烹饪锅具','炒锅','碗碟套装','厨房配件','刀剪菜板','锅具套装','家纺<i><i>','四件套','被子枕芯',
	'毛巾浴巾','蚊帐凉席','地毯地垫','床垫/床褥','抱枕靠垫','生活日用<i><i>','收纳用品','雨伞雨具','净化除味',
	'浴室用品','洗晒/熨烫','缝纫/针织用品','保暖防护','清洁工具','家装软饰<i><i>','装饰字画','装饰摆件',
	'手工/十字绣','相框/照片墙','墙贴/装饰贴','灯具<i><i>','吸顶灯','吊灯','台灯','筒灯','射灯','庭院灯',
	'装饰灯','LED灯','家具<i><i>','客厅','卧室','书房','餐厅','儿童储物','办公家具','阳台','户外',
	'电脑桌','文具<i><i>','笔类','本册/便签','办公文具','文件收纳','学生文具','计算器','画具画材',
	'财会用具','文房四宝','全屋定制<i><i>','定制衣柜','榻榻米橱','柜门室内门','防盗门','淋浴房',
	'女装<i><i>','当季热卖','新品推荐','商场同款','时尚套装','连衣裙','半身裙','T恤','男装<i><i>',
	'当季热卖','新品推荐','T恤','牛仔裤','休闲裤','衬衫','短裤','POLO衫','羽绒服','内衣<i><i>','文胸',
	'睡衣/家居服','男士内裤','女士内裤','吊带/背心文胸','套装','情侣睡衣','塑身美体','配饰<i><i>',
	'女士围巾/披肩','光学镜架/镜片','真皮手套','毛线帽','太阳镜','童装<i><i>','套装','卫衣','裤子',
	'外套/大衣','毛衣/针织衫','衬衫','户外/运动服','T恤','童鞋<i><i>','运动鞋','靴子','帆布鞋','皮鞋',
	'棉鞋','凉鞋','拖鞋','礼盒<i><i>','美白','防晒','面膜','洁面','爽肤水','精华','眼霜','香水彩妆<i><i>',
	'隔离','遮瑕','气垫BB','粉底','腮红','口红/唇膏','唇釉/唇彩','男士护肤<i><i>','控油','洁面','乳液/面霜',
	'面膜','爽肤水','剃须','精华','防晒','洗发护发<i><i>','洗发水','护发素','发膜/精油','造型','染发',
	'口腔护理<i><i>','牙膏','牙粉','牙贴','牙刷','牙线','漱口水','口喷','假牙清洁','身体护理<i><i>',
	'花露水','沐浴露','香皂','洗手液','护手霜','浴盐','润肤','精油','美颈','女性护理<i><i>','卫生巾',
	'卫生棉条','卫生护垫','私处护理','纸品清洗<i><i>','抽纸','卷纸','湿巾','纸类','厨房用纸','湿厕纸',
	'时尚女鞋<i><i>','新品推荐','休闲鞋','凉鞋','单鞋','拖鞋/人字拖','高跟鞋','潮流女包<i><i>','真皮包',
	'单肩包','手提包','斜挎包','双肩包','钱包','手拿包','精品男包<i><i>','男士钱包','双肩包','单肩/斜挎包',
	'商务公文包','男士手包','卡包名片夹','钥匙包','功能箱包<i><i>','拉杆箱','拉杆包','旅行包','电脑包',
	'休闲运动包','奢侈品<i><i>','箱包','钱包','服饰','腰带','鞋靴','太阳镜/眼镜框','饰品','配件',
	'精选大牌<i><i>','GUCCICOACH','雷朋','施华洛','世奇','MK','阿玛尼','菲拉格慕','VERSACE','普拉达',
	'钟表<i><i>','DW','天梭','浪琴','欧米茄','萧邦','阿玛尼','卡西欧','国表','智能手表','珠宝首饰<i><i>',
	'黄金','K金','时尚饰品','钻石','翡翠','电脑整机<i><i>','笔记本','游戏本','平板电脑','台式机',
	'一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡','硬盘','内存','机箱',
	'外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头',
	'游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边','网络产品<i><i>','路由器',
	'网络机顶盒','交换机','网络存储','网卡','5G/4G上网','网线','网络配件','办公设备<i><i>','投影机',
	'投影配件','打印机','传真设备','验钞/点钞机','扫描设备','复合机','碎纸机','考勤门禁','文具<i><i>',
	'笔类','本册/便签','办公文具','文件收纳','学生文具','计算器','画具画材','财会用具','文房四宝',
	'耗材<i><i>','墨粉','墨盒','色带','纸类','刻录光盘','电脑整机<i><i>','笔记本','游戏本','平板电脑',
	'台式机','一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡','硬盘','内存','机箱',
	'外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头',
	'游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边',
	'网络产品<i><i>','路由器','网络机顶盒','交换机','网络存储','网卡','5G/4G上网','网线','网络配件',
	'办公设备<i><i>','投影机','投影配件','打印机','传真设备','验钞/点钞机','扫描设备','复合机','碎纸机',
	'考勤门禁','文具<i><i>','笔类','本册/便签','办公文具','文件收纳','学生文具','计算器','画具画材',
	'财会用具','文房四宝','耗材<i><i>','墨粉','墨盒','色带','纸类','刻录光盘','电脑整机<i><i>','笔记本',
	'游戏本','平板电脑','台式机','一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡',
	'硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫',
	'摄像头','游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边',
	'网络产品<i><i>','路由器','网络机顶盒','交换机','网络存储','网卡','5G/4G上网','网线','网络配件',
	'办公设备<i><i>','投影机','投影配件','打印机','传真设备','验钞/点钞机','扫描设备','复合机','碎纸机',
	'考勤门禁','文具<i><i>','笔类','本册/便签','办公文具','文件收纳','学生文具','计算器','画具画材',
	'财会用具','文房四宝','耗材<i><i>','墨粉','墨盒','色带','纸类','刻录光盘','电脑整机<i><i>','笔记本',
	'游戏本','平板电脑','台式机','一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡',
	'硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘',
	'鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边',
	'网络产品<i><i>','路由器','网络机顶盒','交换机','网络存储','网卡','5G/4G上网','网线','网络配件',
	'电脑整机<i><i>','笔记本','游戏本','平板电脑','台式机','一体机','服务器/工作站','电脑配件<i><i>',
	'显示器','CPU','主板','显卡','硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘','键鼠套装',
	'网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘',
	'游戏软件','游戏周边','网络产品<i><i>','路由器','网络机顶盒','交换机','网络存储','网卡','5G/4G上网',
	'网线','网络配件','电脑整机<i><i>','笔记本','游戏本','平板电脑','台式机','一体机','服务器/工作站',
	'电脑配件<i><i>','显示器','CPU','主板','显卡','硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘',
	'键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机',
	'手柄/方向盘','游戏软件','游戏周边','网络产品<i><i>','路由器','网络机顶盒','交换机','网络存储','网卡',
	'5G/4G上网','网线','网络配件','电脑整机<i><i>','笔记本','游戏本','平板电脑','台式机','一体机',
	'服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡','硬盘','内存','机箱','外设产品<i><i>',
	'鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头','游戏设备<i><i>','游戏机',
	'游戏耳机','手柄/方向盘','游戏软件','游戏周边','网络产品<i><i>','路由器','网络机顶盒','交换机',
	'网络存储','网卡','5G/4G上网','网线','网络配件', '电脑整机<i><i>','笔记本','游戏本','平板电脑',
	'台式机','一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡','硬盘','内存','机箱',
	'外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头',
	'游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边','电脑整机<i><i>','笔记本',
	'游戏本','平板电脑','台式机','一体机','服务器/工作站','电脑配件<i><i>','显示器','CPU','主板','显卡',
	'硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘','键鼠套装','网络仪表仪器','U盘','移动硬盘',
	'鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘','游戏软件','游戏周边',
	'电脑整机<i><i>','笔记本','游戏本','平板电脑','台式机','一体机','服务器/工作站','电脑配件<i><i>',
	'显示器','CPU','主板','显卡','硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘','键鼠套装',
	'网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机','手柄/方向盘',
	'游戏软件','游戏周边','电脑整机<i><i>','笔记本','游戏本','平板电脑','台式机','一体机','服务器/工作站',
	'电脑配件<i><i>','显示器','CPU','主板','显卡','硬盘','内存','机箱','外设产品<i><i>','鼠标','键盘',
	'键鼠套装','网络仪表仪器','U盘','移动硬盘','鼠标垫','摄像头','游戏设备<i><i>','游戏机','游戏耳机',
	'手柄/方向盘','游戏软件','游戏周边'];
	// console.log(arrA_con.length);
	tianchong(arrA_con,cate_detail_item_a);

//fs_col2部分slideBannerWrap的大图轮播
	var bigimg = document.getElementById('bigimg').getElementsByTagName('img')[0];
	// console.log(bigimg);
	var dots = document.getElementById('dots').getElementsByTagName('li');
	// console.log(dots);
	var dot = document.getElementById('dots').getElementsByClassName('dot');
	// console.log(dot);
	var mask = document.getElementById('dots').getElementsByClassName('mask');
	// console.log(mask);
	var gv=0;
	var t;
//手动轮播
	for(var i=0; i<dots.length; i++){
		dots[i].index = i;
		dots[i].onmouseenter = function(){
			clearInterval(t);
			// console.log(this.index);
			bigimg.src = "./images/slideBanner"+(this.index+1)+".webp";
			for(var j=0; j<dot.length; j++){
				dot[j].style.display = "block";
			}
			dot[this.index].style.display = "none";
			for(var j=0; j<mask.length; j++){
				mask[j].style.display = "none";
			}
			mask[this.index].style.display = "block";
			gv = this.index;
		}
		dots[i].onmouseleave = function(){
			t = setInterval(autoplay1,1000);
		}
	}
//自动轮播
	function autoplay1(){
		gv = gv%8;
		gv++;
		bigimg.src = "./images/slideBanner"+(gv)+".webp";
		for(var j=0; j<dot.length; j++){
			dot[j].style.display = "block";
		}
		dot[gv-1].style.display = "none";
		for(var j=0; j<mask.length; j++){
			mask[j].style.display = "none";
		}
		mask[gv-1].style.display = "block";
	}
	t = setInterval(autoplay1,1000);
//点击按钮上下页切换
	var btn1 = document.getElementById('slide1').getElementsByClassName('slider_control');
	// console.log(btn1);
//切换至上一张
	// 当鼠标移动到按钮上时，清除计时器；当鼠标离开按钮时，计时器启动
	btn1[0].onmouseenter=function(){
		clearInterval(t);
	}
	btn1[0].onmouseleave=function(){
		t=setInterval(autoplay1,1000);
	}
	btn1[1].onmouseenter=function(){
		clearInterval(t);
	}
	btn1[1].onmouseleave=function(){
		t=setInterval(autoplay1,1000);
	}
	btn1[0].onclick = function(){
		gv--;
		if(gv==-1){
			gv = dot.length-1;
		}
		bigimg.src = "./images/slideBanner"+(gv+1)+".webp";
		for(var i=0; i<dot.length; i++){
			dot[i].style.display = "block";
		}
		dot[gv].style.display = "none";
		for(var i=0; i<mask.length; i++){
			mask[i].style.display = "none";
		}
		mask[gv].style.display = "block";
		// console.log(gv);
	}
//切换至下一张
	btn1[1].onclick = function(){
		gv++;
		if(gv>=dot.length){
			gv = 0;
		}
		bigimg.src = "./images/slideBanner"+(gv+1)+".webp";
		for(var i=0; i<dot.length; i++){
			dot[i].style.display = "block";
		}
		dot[gv].style.display = "none";
		for(var i=0; i<mask.length; i++){
			mask[i].style.display = "none";
		}
		mask[gv].style.display = "block";
		// console.log(gv);
	}

//fs_col2部分的slideRecommendWrap小图轮播
	var slideimgs = document.getElementsByClassName('slideimgs');
	// console.log(slideimgs);
	var smallimg = document.getElementById('silde2').getElementsByTagName('img');
	// console.log(smallimg);
	var btn2 = document.getElementById('silde2').getElementsByTagName('button');
	// console.log(btn2);
	var count = 0;
	var t2;
//手动切换
	// 当鼠标移动到按钮上时，清除计时器；当鼠标离开按钮时，计时器启动
	btn2[0].onmouseenter=function(){
		clearInterval(t2);
	}
	btn2[0].onmouseleave=function(){
		t2=setInterval(autoplay2,2500);
	}
	btn2[1].onmouseenter=function(){
		clearInterval(t2);
	}
	btn2[1].onmouseleave=function(){
		t2=setInterval(autoplay2,2500);
	}
//切换至上一页
	btn2[0].onclick = function(){
		count--;
		if(count==-1){
			count = slideimgs.length-1;
		}
		for(var i=0; i<slideimgs.length; i++){
			slideimgs[i].style.display = "none";
		}	
		slideimgs[count].style.display = "block";
	}
//切换至下一页
	btn2[1].onclick = function(){
		count++;
		if(count==slideimgs.length){
			count = 0;
		}
		for(var i=0; i<slideimgs.length; i++){
			slideimgs[i].style.display = "none";
		}	
		slideimgs[count].style.display = "block";			
	}
//自动轮播
	function autoplay2(){
		count=count%3;
		count++;
		for(var i=0; i<3; i++){
			slideimgs[i].style.display = "none";
		}	
		slideimgs[count-1].style.display = "block";
	}
	t2 = setInterval(autoplay2,2500);

//seckill倒计时
	var ohour = document.querySelectorAll('.timmer-hour')[0].querySelectorAll('span');
	// console.log(ohour);
	var ominute = document.querySelectorAll('.timmer-minute')[0].querySelectorAll('span');
	// console.log(ominute);
	var osecond = document.querySelectorAll('.timmer-second')[0].querySelectorAll('span');
	// console.log(osecond);
	var totaltime = 5400;
	var timerId = setInterval(function(){
		totaltime--;
		if(totaltime<0){
			clearInterval(timerId);
			return;
		}
		var hour = Math.floor(totaltime/3600);
		var minute = Math.floor(totaltime%3600/60);
		var second = Math.floor(totaltime%60);
		ohour[0].innerHTML = Math.floor(hour/10);
		ohour[1].innerHTML = Math.floor(hour%10);
		ominute[0].innerHTML = Math.floor(minute/10);
		ominute[1].innerHTML = Math.floor(minute%10);
		osecond[0].innerHTML = Math.floor(second/10);
		osecond[1].innerHTML = Math.floor(second%10);
	},1000);

//seckill_inner轮播图
	var seckill_inner = document.querySelectorAll('.slider');
	// console.log(seckill_inner);
	var btn3 = document.querySelectorAll('.seckill-list')[0].querySelectorAll('.slider_control');
	// console.log(btn3);
	var count2=0;
	var t3;
//手动切换
//切换至上一页
	btn3[0].onclick = function(){
		clearInterval(t3);
		count2--;
		if(count2==-1){
			count2 = seckill_inner.length-1;
		}
		for(var i=0; i<seckill_inner.length; i++){
			seckill_inner[i].style.display = "none";
		}	
		seckill_inner[count2].style.display = "block";
		t3 = setInterval(autoplay3,2000);
	}
//切换至下一页
	btn3[1].onclick = function(){
		clearInterval(t3);
		count2++;
		if(count2==seckill_inner.length){
			count2 = 0;
		}
		for(var i=0; i<seckill_inner.length; i++){
			seckill_inner[i].style.display = "none";
		}	
		seckill_inner[count2].style.display = "block";	
		t3 = setInterval(autoplay3,2000);		
	}
//自动轮播
	function autoplay3(){
		count2=count2%3;
		count2++;
		for(var i=0; i<3; i++){
			seckill_inner[i].style.display = "none";
		}	
		seckill_inner[count2-1].style.display = "block";
	}
	t3 = setInterval(autoplay3,2000);

//seckill-brand-slider
	var brandslider = document.querySelectorAll('.seckill-brand-slider');
	// console.log(brandslider);
	var sliderdot = document.querySelectorAll('.sliderdot')[0].querySelectorAll('span');
	// console.log(sliderdot);
	var count3=0;
	var t4;
//手动轮播
	sliderdot[0].onmouseenter = function(){
		clearInterval(t4);
		count3=0;
		brandslider[0].style.display = "block";
		sliderdot[0].style.background = "#E1251B";
		brandslider[1].style.display = "none";
		sliderdot[1].style.background = "#999";
		t4 = setInterval(autoplay4,1000);
	}
	sliderdot[1].onmouseenter = function(){
		clearInterval(t4);
		count3=1;
		brandslider[1].style.display = "block";
		sliderdot[1].style.background = "#E1251B";
		brandslider[0].style.display = "none";
		sliderdot[0].style.background = "#999";
		t4 = setInterval(autoplay4,1000);
	}
//自动轮播
	function autoplay4(){			
		if(count3==0){
			brandslider[0].style.display = "block";
			sliderdot[0].style.background = "#E1251B";
			brandslider[1].style.display = "none";
			sliderdot[1].style.background = "#999";
			count3++;
		}else{
			brandslider[1].style.display = "block";
			sliderdot[1].style.background = "#E1251B";
			brandslider[0].style.display = "none";
			sliderdot[0].style.background = "#999";
			count3--;
		}												
	}
	t4 = setInterval(autoplay4,1000);

//每日特价 	
// 在box_bd_body下克隆body_item
	var box_bd_body=document.querySelectorAll('.box_bd_body');
	for(var i=0;i<4;i++){
		box_bd_body[0].appendChild(document.querySelectorAll('.body_item')[0].cloneNode(true));
	}
//更换body_item下img的图片 
	var bodyItemImg=document.querySelectorAll('.body_item img');
	// console.log(bodyItemImg);
	for(var i=5;i<25;i++){
		if(i<10){
			bodyItemImg[i].src="./images/ia_40000024"+i+".webp";
		}else if(i>9&&i<20){
			bodyItemImg[i].src="./images/ia_40000025"+(i%10)+".webp";
		}else if(i>19){
			bodyItemImg[i].src="./images/ia_40000035"+(i%10)+".webp";
		}
	}
// 切换
	var nav = document.querySelectorAll('.box_bd_nav')[0].querySelectorAll('a');
	// console.log(nav);
	var bodyitem = document.querySelectorAll('.body_item');
	// console.log(bodyitem);
	// console.log(bodyitem.length);
	for(var i=0;i<nav.length;i++){
		nav[i].index = i;
		nav[i].onmouseenter = function(){
			// console.log(this.index);
			for(var j=0;j<nav.length;j++){
				nav[j].style.color = "#999";
				nav[j].style.border = "none";
				bodyitem[j].style.display = "none";
			}
			nav[this.index].style.color = "#C81623";
			nav[this.index].style.borderBottom = "2px solid #C81623";
			bodyitem[this.index].style.display = "block";
		}
	}	

//排行榜
	var nav2 = document.querySelectorAll('.nav')[0].querySelectorAll('a');
	// console.log(nav2);
	var bodyitem2 = document.querySelectorAll('.body_item_list')[0].querySelectorAll('.itemList');
	// console.log(bodyitem2);
	for(var i=0;i<nav2.length;i++){
		nav2[i].index = i;
		nav2[i].onmouseenter = function(){
			// console.log(this.index);
			for(var j=0;j<nav2.length;j++){
				nav2[j].style.color = "#999";
				nav2[j].style.background = "#F6F6F6";
				bodyitem2[j].style.display = "none";
			}
			nav2[this.index].style.color = "#fff";
			nav2[this.index].style.background = "#E1251B";
			bodyitem2[this.index].style.display = "block";
		}
	}

// 客服
	var kefu=document.querySelector('#kefu');
	kefu.onclick=function(){
		alert("抱歉，客服繁忙，请稍候。");
	}

// 反馈
	var fankui=document.querySelector('#fankui');
	fankui.onclick=function(){
		alert("抱歉，有什么问题您先憋着，因为我们接收不到您的反馈。");
	}
});