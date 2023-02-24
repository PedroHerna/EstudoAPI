async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML="";
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const convert = await consultaCEP.json();
        if (convert.erro){
            throw Error('CEP inexistente!');
        }
        
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro');


        cidade.value = convert.localidade;
        logradouro.value = convert.logradouro;
        estado.value = convert.uf;
        bairro.value = convert.bairro;

        console.log(convert)  
        return convert;
    } catch(erro){
        mensagemErro.innerHTML=`<p>CEP Inválido</p>`;
        console.log(erro)
    }

}

let cep = document.getElementById('cep');

cep.addEventListener('focusout', ()=>{
    let busca = buscaEndereco(cep.value);

});
