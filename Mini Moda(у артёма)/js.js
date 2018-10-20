document.getElementById("linkid").onclick = function(){
	document.getElementById("searchid").submit();
}



$(document).ready(function(){
		// Checkbox
	// Отслеживаем событие клика по диву с классом check
	$('.checkboxes').find('.check').click(function(){
		// Пишем условие: если вложенный в див чекбокс отмечен
		if( $(this).find('input').is(':checked') ) {
			// то снимаем активность с дива
			$(this).removeClass('active');
			// и удаляем атрибут checked (делаем чекбокс не отмеченным)
			$(this).find('input').removeAttr('checked');
		
		// если же чекбокс не отмечен, то
		} else {
			// добавляем класс активности диву
			$(this).addClass('active');
			// добавляем атрибут checked чекбоксу
			$(this).find('input').attr('checked', true);
		}
	});
});


	$('.product').each(function(i, el){
		$(el).click(function(){
			var carousel = $(this).parent().parent().find(".carousel");
			var img = carousel.find('img').eq(carousel.attr("rel"))[0];						
			var position = $(img).offset();	

			var productName = $(this).parent().find('h4').get(0).innerHTML;				
	
			$("body").append('<div class="floating-cart"></div>');		
			var cart = $('div.floating-cart');		
			$("<img src='"+img.src+"' class='floating-image-large' />").appendTo(cart);
			
			$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
			setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
			
			setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+img.src+"' alt='' /></div><span>"+productName+"</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();			
			$("#cart").append(cartItem);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
			
			
		});
	})