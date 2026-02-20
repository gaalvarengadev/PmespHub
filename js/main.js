//botao do Ver mais

const verMais = document.getElementById("verMais")

//pega os dois dialogs
const sexoDialog = document.getElementById("sexoDialogo")
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

//evento de clicar no Ver mais e abre o pop de escolha sexo
verMais.addEventListener("click", (e) => {
    e.preventDefault()
    sexoDialog.showModal()
})

//apos o escolha sexo ele abre o pop up do tipo
btnSexoMasculino.addEventListener("click", () => {
    sexoSelecionado = "M"
    sexoDialog.close()
    tipoDialog.showModal()
})