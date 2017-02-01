$(function(){
	console.log('jQuery is working!');
	var discoPower = null;
	$('#disco').click(function(){
		if(discoPower === null){
			discoPower = setInterval(function(){
				$('.cell').each(function(){
					let color = getColor();
					$(this).css('background-color', color);
				})
			},100)
		} else {
			clearInterval(discoPower);
			discoPower = null;
		}
	})
	$('.cell').hover(function(){
		let color = getColor();
		$(this).css('background-color', color);
	})
	$('#reset').click(function(){
		$('.cell').css('background-color', '');
	})
})

function getColor(){
	colorsArray = ["#FFFF00", "#FFFF33", "#F2EA02", "#E6FB04", "#FF0000", "#FD1C03", "#FF3300", "#FF6600", "#00FF00", "#00FF33", "#00FF66", "#33FF00", "#00FFFF", "#099FFF", "#0062FF", "#0033FF", "#FF00FF", "#FF00CC", "#FF0099", "#CC00FF", "#9D00FF", "#CC00FF", "#6E0DD0", "#9900FF"];
	var length = colorsArray.length;
	var randomIndex = Math.floor(Math.random() * length);
	return colorsArray[randomIndex];
}
