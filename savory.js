var i=3;

// Add New Ingredient Field
$('#add_ingredient').on('click', function(){
	i++;
	$add_field = '<div class="ingredient">Ingredient '+i+' <input name="ingredient'+i+'" id="ingredient'+i+'" type="text" /><span class="delete_field"> - </span></div>';
	$('#ingredient_fields2').before($add_field);
});

// Remove Ingredient Field
$('body').delegate('.delete_field', 'click', function(){
   $(this).parent().remove();
});

$("#create_recipe").on('click', function() {	
	$("#prepare").text($("#preparation").val());
	$("#cook").text($("#cooking").val());
	$("#serve").text($("#serving").val());
});