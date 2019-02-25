var $ = jQuery;
function pasarLista() {

    $.ajax({
		url:"http://localhost:3000/pasar_lista",
        type:'POST',
        contentType: 'application/javascript; charset=utf-8',
		data:{
			alumno:{
                "nombre":$('#nombre').val(),
                "matricula":$('#matricula').val(),
                "correo":$('#correo').val()
            }
		},
		success:function(r){
            console.log(r);
            document.location.href = "http://localhost:3000/";
            console.log('Success !!!!!');
		},
		error:function(e){
            console.error(e);
		}
	});
}

console.log("main.js");