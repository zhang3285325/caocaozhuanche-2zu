$(function(){
	//公司历程
	var index = 0;
	var time = null;
	showFn()
	$("#prev").click(function(){
		prev()
	})
	function prev(){
		index++;
		if (index > 3) {index = 0}
		showFn()
	}
	$("#next").click(function(){
		index--;
		if (index < 0) {index = 3}
		showFn()
	})
	function showFn(){
		$('.cleft1').eq(index).show();
		$('.cleft1').eq(index).siblings().hide();
		$('.img').eq(index).fadeIn();
		$('.img').eq(index).siblings().hide();
		$('.circle').eq(index).css({'fill':'green','stroke':'green','r':'10'})
		$('.circle').not($('.circle').eq(index)).css({'fill':'blue','stroke':'blue','r':'7'})
	}
	$('.circle').click(function(){
		index = $(this).parent().index()-2;
		if (index == 2) {
			index = 1
		}else if(index == 4){
			index = 2
		}else if(index == 6){
			index = 3
		}
		console.log(index)
		showFn()
	})
	time = setInterval(function(){
		prev();
	},2000)
	$('#centent .centent2').mouseover(function(){
		clearInterval(time) 
	})
	$('#centent .centent2').mouseout(function(){
		time = setInterval(function(){
			prev();
		},1000)
	})
	//新闻中心分页
	
	$('#centent .centent3 .span1').click(function(){
		//console.log($(this).index());
		if ($(this).index() == 0) {
			$('#centent .centent3 .table1').show().siblings().hide();
			$('#centent .centent3 .span1:eq(1)').addClass('select').siblings().removeClass('select');;
		}else if($(this).index() == 1) {
			$(this).addClass('select').siblings().removeClass('select');
			$('#centent .centent3 .table1').show().siblings().hide();
		}else if($(this).index() == 2){
			$(this).addClass('select').siblings().removeClass('select');
			$('#centent .centent3 .table2').show().siblings().hide();
		}else if($(this).index() == 3){
			$('#centent .centent3 .table2').show().siblings().hide();
			$('#centent .centent3 .span1:eq(2)').addClass('select').siblings().removeClass('select');;

		}
	})
})