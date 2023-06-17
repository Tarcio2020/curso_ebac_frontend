const form = document.getElementById('#formulario');


function validaCampos(numeros) {
    const numerosNoCampo = Number;
    return numerosNoCampo >= 1;

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();
    
    const formularioA = document.getElementById('#campoA');
    const formularioA = document.getElementById('#campoB');
    
    
    
    
    formEvalido = validaNome(formularioA.value);
    if (formEvalido) {
        alert(mensagemSucesso);
        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositado.value = '';

    } else{
        alert('O nome não está completo');
    }
    
} )



/*
function validaCampos(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;





const nomeBeneficiario = document.getElementById('nome-beneficiario');
const numeroContaBeneficiario = document.getElementById('numero-conta');
const valorDepositado = document.getElementById('valor-deposito');
const mensagemSucesso = `motante de: ${valorDepositado.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;
*/