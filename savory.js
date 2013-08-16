// Add New Ingredient Field
$('#add_ingredient').on('click', function(){
	$add_field = '<div class="ingredient"><input type="text" /><span class="delete_field"> - </span></div>';
	$('#ingredients').before($add_field);
});

// Remove Ingredient Field
$('body').delegate('.delete_field', 'click', function(){
   $(this).parent().remove();
});

// Create Recipe
$("#create_recipe").on('click', function() {	
	$("#prepare").text($("#preparation").val());
	$("#cook").text($("#cooking").val());
	$("#serve").text($("#serving").val());

/*	var ingredients = $('.ingredient').length;
	for (var i=0; i < ingredients; i++) {
		$("#ingredients_list ul").append("<li>" + ($("#ingredient"+i).val()) + "</li>");
	}
*/
	$(".ingredient input").each(function() {
		listIngredient = $(this).val();
		$("#ingredients_list ul").append("<li>" +listIngredient+ "</li>");
	});
});