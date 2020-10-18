function modalShow() {
	$("#id_modal").show();
	$("#id_modal").css('animation-name', 'show_modal');
}

function modalHide() {
	$("#id_modal").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 300);
}

function show_error(pesan) {
	$("#error_modal").find('b').html(pesan);
	$("#error_modal").show();
	$("#error_modal").css('animation-name', 'show_modal');

	$("#close_error_form").click(function(event) {
		$("#error_modal").css('animation-name', 'hide_modal');
		setTimeout(function function_name() {
			$("#error_modal").hide();
		}, 300);
	});

	window.onclick = function(event) {
		var modal = document.getElementById('error_modal');
		if(event.target == modal){
			$("#error_modal").css('animation-name', 'hide_modal');
			setTimeout(function function_name() {
				$("#error_modal").hide();
			}, 300);
		}
	};
}

//Validasi input kosong
$.fn.validateEmpty = function () {
	var form = this;

	form.on('submit', function (event) {
		event.preventDefault();
		var inputan = form.find("input,select");
		// console.log(inputan);
		var kosong = false;
		inputan.each(function(index, el) {
			if ($(el).val() == "") {
				kosong = true;
			}
		});

		if(kosong){
			show_error("Harap lengkapi data isian");
		}
		else{
			form.off('submit').trigger('submit');
		}
	});
}

//Validasi form register
$.fn.validasiRegister = function () {
	var form = this;

	form.on('submit', function(event) {
		event.preventDefault();
		var nama = $("input[name='nama']").val();
		var email = $("input[name='email']").val();
		var username = $("input[name='username']")
		var password = $("input[name='password']").val();
		var konfirm_password = $("input[name='konfirm_password']").val();
		var jenisKelamin = $("select[name='jenisKelamin']:checked").val();
		var paketPendidikan = $("select[name='paketPendidikan']").val();

		//RegEx
		var namaReg = /^[a-zA-Z' ]+$/; //alfabet(besar atau kecil), petik ('), dan spasi saja
		var angka = /^\d+$/; //angka saja

		if (nama == "" || email == "" || username == "" || password == "" || konfirm_password == "" || jenisKelamin == "" || paketPendidikan == "") {
			show_error('Harap lengkapi data diri untuk melakukan pendaftaran');
		}
		else if (!namaReg.test(nama)) {
			show_error("Nama hanya boleh menggunakan huruf dan tanda petik (')");
		}
		else if (password.length < 6) {
			show_error("Password harus minimal 6 karakter");
		}
		else if (password != konfirm_password) {
			show_error("Konfirmasi password tidak sesuai");
		}
		else{
			// document.location.href = "dashboard.html";
			$(this).off('submit').trigger('submit');
		}
	});
}

//Validasi Login
$.fn.validasiLogin = function () {
	var form = this;

	this.on("submit", function(event) {
		event.preventDefault();
		var username = $("input[name='username']").val();
		var password = $("input[name='password']").val();

		if(username == "" || password == ""){
			show_error('Harap isi username dan password untuk login');
		}
		else if (password.length < 6) {
			show_error("Password harus minimal 6 karakter");
		}
		else{
			// document.location.href = "dashboard.html";
			$(this).off("submit").trigger("submit");
		}
	});
}


// Canvas Diagram Nilai
window.addEventListener('load',function(){
		console.log('document ready');
		drawCanvas();
})
function drawCanvas(){
		console.log('start draw to canvas');
		var canvas = document.getElementById("canvasnilai")
		console.log('canvas', canvas);

		var ctx = canvas.getContext('2d');
		console.log('ctx', ctx);

		ctx.font = '10px sans-serif';

		ctx.fillStyle='rgb(231, 187, 187)';
		ctx.fillRect(10,30,30,200);
		ctx.fillText('BAB 1', 10, 25);

		ctx.fillStyle='rgb(146, 203, 230)';
		ctx.fillRect(70,50,30,180);
		ctx.fillText('BAB 2', 70, 45);

		ctx.fillStyle='rgb(233, 221, 170)';
		ctx.fillRect(130,35,30,190);
		ctx.fillText('BAB 3', 130, 30);

		ctx.fillStyle='rgb(221, 192, 211)';
		ctx.fillRect(190,30,30,170);
		ctx.fillText('BAB 4', 190, 25);

		ctx.fillStyle='rgb(252, 206, 188)';
		ctx.fillRect(250,45,30,310);
		ctx.fillText('BAB 5', 250, 40);
}
