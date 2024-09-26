// Criação da Função de Consulta de cep;
function consultaViaCep() {

   // A função irá analisar o documento, pegar o valor do elemento correspondente ao ID e atribuí-la a variável cep;
   cep = document.getElementById("cep").value;

   // Condição para validar o cep
   if (cep.length !== 8) {
      alert("Este CEP é inválido");
      return;
   }

   // Depois a variável urlviacep receberá o link da consulta + o valor da variável cep concatenado;
   urlviacep = "https://viacep.com.br/ws/" + cep + "/json/"; // também pode-se usar: ${cep} no lugar de: + cep +;

   fetch(urlviacep).then(function (response) {
      response.json().then(finalizarEndereco);
      /*response.json().then(function(data) {
      console.log(data);
      finalizarEndereco(data);
      })*/
   });
};

// Criação da Função para finalizar a busca e mostrar os Resultados encontrados na div do HTML;
function finalizarEndereco(dados) {
   resultado = document.getElementById("resultado");

   // Condição para verificar possível erro, caso o CEP não seja encontrado;
   if (dados.erro) {
      resultado.innerHTML = "Não foi Possível Encontrar CEP"
      alert("CEP não encontrado!");

      // No caso do CEP ser encontrado, o resultado.innerHTML irá exibir todas as informações abaixo na div do HTML;
   } else {
      resultado.innerHTML = `<p>Bairro: ${dados.bairro}</p>
                              <p>CEP: ${dados.cep}</p>
                              <p>Complemento: ${dados.complemento}</p>
                              <p>DDD: ${dados.ddd}</p>
                              <p>Estado: ${dados.estado}</p>
                              <p>Gia: ${dados.gia}</p>
                              <p>IBGE: ${dados.ibge}</p>
                              <p>Endereço: ${dados.logradouro}</p>
                              <p>Localidade: ${dados.localidade}</p>
                              <p>Logradouro: ${dados.logradouro}</p>
                              <p>Região: ${dados.regiao}</p>
                              <p>UF: ${dados.uf}</p>
                              <p>Unidade: ${dados.unidade}</p>`
   }
}