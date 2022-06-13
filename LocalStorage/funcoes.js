//login
function logar() {
	//busca os dados inseridos nos campos de login
	var usuario = document.getElementById('usuario').value;
	var senha = document.getElementById('senha').value;

 // verifica se os dados estão corretos
 if(usuario == "root@gmail.com" && senha == 123){

	// caso sim redireciona o usuario para lista.html
	location.href = "lista.html";
	} else { 
	// caso não exibe um alerta solicitando verificação dos dados
	alert('Verifique seus dados e tente novamente');
}
}

// carregar produtos (função utilizada para exibir os produtos em tela html)
function carregarprod () {
	for(y = 0; y < mercadoria.length; y++ ){ 
		//criar os elementos para exibir os valores obtidos em localStorage
		//usar inner text para refatoração
		var container = document.querySelector('#tabela1');
		var novoTr = document.createElement('tr');
		var novoTd = document.createElement('td');
		var novoTd1 = document.createElement('td');
		var novoTd2 = document.createElement('td');
		var novoTd3 = document.createElement('td');
		var novoTd4 = document.createElement('td');
		var novoTd5 = document.createElement('td');
		var novoTd6 = document.createElement('td');
		//concatenar os ids com o y do for para obter elementos com ids diferentes
		novoTd.id = "codigo".concat(y);
		novoTd1.id = "nome".concat(y);
		novoTd2.id = "valor".concat(y);
		novoTd3.id = "categoria".concat(y);
		novoTd4.id = "descricao".concat(y);
		novoTd5.id = "datacriacao".concat(y);
		novoTd6.id = "datamodificacao".concat(y);
		//seta-los como pai do elemento "container" nesse caso defini como a table
		container.appendChild(novoTd);
		container.appendChild(novoTd1);
		container.appendChild(novoTd2);
		container.appendChild(novoTd3);
		container.appendChild(novoTd4);
		container.appendChild(novoTd5);
		container.appendChild(novoTd6);
		container.appendChild(novoTr);
		//inserir no html dos elementos criados  os dados das mercadorias 
		document.getElementById(novoTd.id).innerHTML = mercadoria[y].codigo;
		document.getElementById(novoTd1.id).innerHTML = mercadoria[y].nome;
		document.getElementById(novoTd2.id).innerHTML = mercadoria[y].valor+" R$";
		document.getElementById(novoTd3.id).innerHTML = mercadoria[y].categoria;
		document.getElementById(novoTd4.id).innerHTML = mercadoria[y].descricao;
		document.getElementById(novoTd5.id).innerHTML = mercadoria[y].dtcriacao;
		document.getElementById(novoTd6.id).innerHTML = mercadoria[y].dtmod;

		

	}
	
}
	
// função utilizada para inserir os elementos do formulário em um LocalStorage como array de objetos 
function cadastraProduto(){
	// aqui estou armazenando os dados de cada campo do formulário em uma variavel 
	var produtoId= document.getElementById("Id");
	var produtoNome= document.getElementById("Nome");
	var produtoValor= document.getElementById("Valor");
	var produtoCategoria= document.getElementById("Categoria");
	var produtoDescricao= document.getElementById("Descricao");
	var produtoDtCriacao= document.getElementById("DataCriacao");
	var produtoDtMod= document.getElementById("Datamodificacao");

	//aqui atribuo o localStorage com os dados de "dadosProduto" 
	var dados= JSON.parse(localStorage.getItem("dadosProduto"));

	 //caso ele retorne null ele criará
	 //um "dadosProduto" com valor de "[]" pré-definido para dentro dele armazenar um array de objetos
	 if(dados == null){
		 localStorage.setItem("dadosProduto", "[]");
		 dados= [];
	 }

	 //está variavel serve para inserir previamente a chave com nome pré-definido e atribuir o valor dos elementos
	 //que estavam no formulario de cadastramento de produtos
	 var auxRegistro={
		 codigo: produtoId.value,
		 nome: produtoNome.value,
		 valor: produtoValor.value,
		 categoria: produtoCategoria.value,
		 descricao: produtoDescricao.value,
		 dtcriacao: produtoDtCriacao.value,
		 dtmod: produtoDtMod.value
	 }

	 //o metodo push() insere na variavel dados os objetos que foram armazenados na variavel auxRegistro
	 dados.push(auxRegistro);

	 //aqui inserimos a variavel dados para "dadosProduto" no localStorage transformando a variavel dados
	 //em string com o JSON.stringify
	 localStorage.setItem("dadosProduto", JSON.stringify(dados));
}

// variavel para buscar dados especificos do localStorage por meio de mercadoria[x].codigo, mercadoria[x].nome, etc.
// com ela foi possivel inserir os dados corretos em cada campo da tabela
var mercadoria = JSON.parse(localStorage.getItem("dadosProduto"));