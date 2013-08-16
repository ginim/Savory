// Add New Ingredient Field
$('#add_ingredient a').on('click', function(){
	$('#ingredients').append('<div class="ingredient"><input type="text" /><span class="delete_field"> x </span></div>');
});

// Remove Ingredient Field
$('body').delegate('.delete_field', 'click', function(){
   $(this).parent().remove();
});

// Create Recipe
$("#create_recipe a").on('click', function() {	
	$("#prepare").text($("#preparation").val());
	$("#cook").text($("#cooking").val());
	$("#serve").text($("#serving").val());

	$(".ingredient input").each(function() {
		listIngredient = $(this).val();
		$("#ingredients_list ul").append("<li>" +listIngredient+ "</li>");
	});
});