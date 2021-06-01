function mostrarCurriculo(){
    var nome = document.getElementById("nome").value;
    if (nome == "Alexsandra"){
        window.location = "meu_curriculo.html"
    }else{
        alert("Usuário não encontrado!")
        return;
    }
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarCurriculo);
