//botao do Ver mais
const verMais = document.getElementById("verMais")
const verMaisEdital = document.getElementById("verMaisEdital")

//pega os dois dialogs
const sexoDialog = document.getElementById("sexoDialog")
const tipoDialog = document.getElementById("tipoDialog")

//botoes de dialog sexo
const btnSexoMasculino = document.getElementById("btnSexoMasculino")
const btnSexoFeminino = document.getElementById("btnSexoFeminino")
const btnCancelarSexo = document.getElementById("btnCancelarSexo")

//botoes de dialog tipo
const btnTipoOfical = document.getElementById("btnTipoOficial")
const btnTipoSoldado = document.getElementById("btnTipoSoldado")
const btnCancelarTipo = document.getElementById("btnCancelarTipo")

//variavel que guarda escolha do sexo
let sexoSelecionado = null; // "M" | "F"


