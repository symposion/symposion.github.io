jQuery(document).ready(function() { 
    
	
	// Mobile Menu

	// Create the dropdown base
	jQuery("<select />").appendTo("#main-menu-wrapper");
      
	// Create default option "Go to..."
	jQuery("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
	}).appendTo("#main-menu-wrapper select");
      
	// Populate dropdown with menu items
	jQuery("#main-menu a").each(function() {
		var el = jQuery(this);
		jQuery("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#main-menu-wrapper select");
	});
	
	// To make dropdown actually work
	jQuery("#main-menu-wrapper select").change(function() {
		window.location = jQuery(this).find("option:selected").val();
	});
	


	
});

