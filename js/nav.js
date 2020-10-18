$('#nav-icon').click(function(event) {
	if ($('#nav-menu').attr('class') === "nav") {
		// console.log('tes ga');
		$('#nav-menu').addClass('responsive');
		$(".menu").addClass('responsive');
		$("#menu-list").addClass('responsive');
	} else {
		$('#nav-menu').attr('class', 'nav');
		$(".menu").removeClass('responsive');
		$("#menu-list").removeClass('responsive');
	}
});
