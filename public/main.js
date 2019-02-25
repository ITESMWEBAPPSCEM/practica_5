function pasarLista() {
    $.ajax({
        url:"http://localhost:3000/pasar_lista",
        type:'POST',
        data:{
            "alumno":{
                "nombre":$('#nombre').val(),
                "matricula":$('#matricula').val(),
                "correo":$('#correo').val()
            }
        },
        success(r){
            console.log(r);
        },
        error(e){
            console.log(error);
        }
    });
}

console.log("main.js");