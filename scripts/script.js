let textoAreaTexto = document.getElementById("areatexto");
let botaoCodificar = document.getElementById("codificar");
let botaoDecodificar = document.getElementById("decodificar");
let botaoApagar = document.getElementById("apagar");
let resultadoAreaResultado = document.getElementById("arearesultado");
let botaoCopiar = document.getElementById("copiar");

botaoCodificar.onclick = codificarTexto;
botaoDecodificar.onclick = decodificarTexto;
botaoApagar.onclick = apagarTexto;
botaoCopiar.onclick = copiarTexto;

function codificarTexto() {
    let textoResultado = textoAreaTexto.value.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    resultadoAreaResultado.value = textoResultado;
}

function decodificarTexto() {
    let textoResultado = textoAreaTexto.value.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    resultadoAreaResultado.value = textoResultado;
}

function apagarTexto() {
    textoAreaTexto.value = "";
    resultadoAreaResultado.value = "";
}

function copiarTexto() {
    navigator.clipboard.writeText(resultadoAreaResultado.value);
    resultadoAreaResultado.select();
}

textoAreaTexto.addEventListener("keydown", function(verificacaoEnter) {
    if (verificacaoEnter.key == "Enter") {
        verificacaoEnter.preventDefault();
    }
});

textoAreaTexto.addEventListener('beforeinput', function(verificacaoTexto) {
    if (/[^a-z\s.,?!;]/.test(verificacaoTexto.data)) {
        verificacaoTexto.preventDefault();
        alert("Caractere não permitido! Leia a notificação!");
    }
});