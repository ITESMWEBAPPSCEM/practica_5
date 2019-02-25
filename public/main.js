var $ = jQuery;
function pasarLista() {

    $.ajax({
		url:"http://localhost:3000/pasar_lista",
        type:'POST',
		data:{
			alumno:{
                "nombre":$('#nombre').val(),
                "matricula":$('#matricula').val(),
                "correo":$('#correo').val()
            }
		},
		success:function(r){
			console.log(r);
		},
		error:function(e){
            console.log(e);
		}
	});
}

console.log("main.js");