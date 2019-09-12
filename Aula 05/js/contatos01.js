/* JAVASCRIPT USADO EXCLUSIVAMENTE PARA O FORMULÁRIO DE CONTATOS DO SITE */
/*
    IMPORTANTE!
    Este documento depende de 'global.js'. No HTML, carregue 'global.js' antes de carregar este arquivo.
*/

/* VALIDANDO FORMULÁRIO DE CONTATOS */

/* REFERÊNCIAS */
var form = $('#contatos'); // Formulário
var errocaixa = $('#errocaixa'); // Caixa de erros
var erromsg = $('#erromsg'); // Mensagem de erro
var feedback = $('#feedback'); // Mensagem de agradecimento

form.onsubmit = function() {

    // Desabilita botão de envio para evitar mais de um click nele
    $('#contato_enviar').disabled = true;

    // Variável que armazena as mensagens de erro
    var erro = '';
    
    // Variável que contém o feedback do erro
    var out = '';

    // Campos do formulário
    var nome = sanitiza($('#contato_nome').value);
    var email = sanitiza($('#contato_email').value);
    var assunto = sanitiza($('#contato_assunto').value);
    var mensagem = sanitiza($('#contato_mensagem').value);

    // Atualizando os campos do formulário com dados sanitizados
    $('#contato_nome').value = nome;
    $('#contato_email').value = email;
    $('#contato_assunto').value = assunto;
    $('#contato_mensagem').value = mensagem;

	// Validando nome
	if (nome.length < 3) {
		erro += '<li>Seu nome está muito curto.</li>';
	} else if (!soLetras(nome)) {
		erro += '<li>Seu nome tem caracteres inválidos.</li>';
	}

	// Validando e-mail
	if (email.indexOf('@') < 1) {
        erro += '<li>Seu e-mail não é válido.</li>';
    } else if (!isMail(email)) {
        erro += '<li>Seu e-mail não é válido.</li>';
    }

    // Validando assunto com pelo menos 5 caracteres
    if(assunto.length < 5){
        erro += '<li>O assunto está muito curto.</li>';
    };

    // Validando mensagem com pelo menos 5 caracteres
    if(mensagem.length < 5){
        erro += '<li>A mesagem está muito curta.</li>';
    };  

    if(erro == ''){
        // Quebra o nome em um array (nomes[0], nomes[1], nomes[2]...)
        var nomes = nome.split(' ');
        // nomes[0] contém o primeiro nome sempre
        out = `<h3>Olá ${nomes[0]}!</h3>
                <blockquote>Seu contato foi enviado para a equipe do site.</blockquote>
                <p><i>Obrigado...</i></p>
                <p class="text-center"><a href="JavaScript:history.go(0)">&larr; Voltar</a></p>
        `;
        feedback.innerHTML = out; // Escrevo a mensagem na DIV
        form.style.display = 'none'; // Oculto o formulário
        feedback.style.display = 'block'; // Mostro a DVI
        return true; // Sai e envia o formulário
    } else {
        out = `<big><strong>Oooops!</strong></big>
                <p>Ocorreram erros que impedem o envio do contato.</p>
                <ul>${erro}</ul>
                <p>Por favor, corrija e tente novamente...</p>
        `;
        erromsg.innerHTML = out; // Escrevo a mensagem na DIV
        errocaixa.style.display = 'table'; // Mostro a DVI
    }
    // Reabilita botão de envio
    $('#contato_enviar').disabled = false;
    return false; // Sai sem enviar o formulário
}

// Fecha caixa de mensagem
errocaixa.onclick = function(){
    errocaixa.style.display = 'none';
}

/* AJUDA DO CONTEXTO DOS CAMPOS DO FORMULÁRIO */

// Função que exibe a mensagem de ajuda do contexto
function toggleAjuda(objId) {
    var ajudas = $('.ajudaMsg');

    // Se a ajuda já está visível, simplesmente oculta ela
    if ($(objId).style.display === "block")
        exibe = false;
    else
        exibe = true;

    // Fecha todas as ajudas
    for(a = 0; a < ajudas.length; a ++){
        ajudas[a].style.display = 'none';
    }

    // Só mostra se ele estiver
    if (exibe) {
        $(objId).style.display = "block";
    }
}

// Monitora click na ajuda do contexto
$('#toggleNome').onclick = function(){
    toggleAjuda('#'+this.getAttribute('data-target'));
}
$('#toggleEmail').onclick = function(){
    toggleAjuda('#'+this.getAttribute('data-target'));
}
$('#toggleAssunto').onclick = function(){
    toggleAjuda('#'+this.getAttribute('data-target'));
}
$('#toggleMensagem').onclick = function(){
    toggleAjuda('#'+this.getAttribute('data-target'));
}