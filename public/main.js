var $ = jQuery;
function pasarLista() {

    $.ajax({
		url:"http://localhost:3000/pasar_lista",
        type:'POST',
		data:{
			alumno:{
                "nombre":"Artur",
                "matricula":"A01374406",
                "correo":"A01374406@itesm.mx"
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