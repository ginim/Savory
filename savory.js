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
	$("#recipe_title").html("<h2>"+($("#recipe_name").val())+"</h2>");

	if($("#preparation").val()) {
		$("#prepare").prepend("<h3>Preparation</h3>");
		$("#prepare p").text($("#preparation").val());
	}
	if($("#cooking").val()) {
		$("#cook").prepend("<h3>Cooking Instructions</h3>");
		$("#cook p").text($("#cooking").val());
	}
	if($("#serving").val()) {
		$("#serve").prepend("<h3>Serving Notes</h3>");
		$("#serve p").text($("#serving").val());
	}

	$(".ingredient input").each(function() {
		listIngredient = $(this).val();
		$("#ingredients_list ul").append("<li>" +listIngredient+ "</li>");
	});
});