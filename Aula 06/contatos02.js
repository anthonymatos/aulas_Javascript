function startApp() {

    // $('#contatos').on('submit', function(){ --> sÃ­ncrono
    $(document).on('submit', '#contatos', function(){

        // Desabilitar botÃ£o de envio
        $('#contato_enviar').attr("disabled", true);

        // VariÃ¡veis do script
        var erro = '';
        var out = '';

        // Obtendo dados dos campos
        var nome = sanitiza($('#contato_nome').val());
        var email = sanitiza($('#contato_email').val());
        var assunto = sanitiza($('#contato_assunto').val());
        var mensagem = sanitiza($('#contato_mensagem').val());

        // Atualizando formulÃ¡rio
        $('#contato_nome').val(nome);
        $('#contato_email').val(email);
        $('#contato_assunto').val(assunto);
        $('#contato_mensagem').val(mensagem);

        // Validando nome
        if (nome.length < 3) {
            erro += '<li>Seu nome estÃ¡ muito curto.</li>';
        } else if (!soLetras(nome)) {
            erro += '<li>Seu nome tem caracteres invÃ¡lidos.</li>';
        }

        // Validando e-mail
        if (email.indexOf('@') < 1) {
            erro += '<li>Seu e-mail nÃ£o Ã© vÃ¡lido.</li>';
        } else if (!isMail(email)) {
            erro += '<li>Seu e-mail nÃ£o Ã© vÃ¡lido.</li>';
        }

        // Validando assunto com pelo menos 5 caracteres
        if(assunto.length < 5){
            erro += '<li>O assunto estÃ¡ muito curto.</li>';
        };

        // Validando mensagem com pelo menos 5 caracteres
        if(mensagem.length < 5){
            erro += '<li>A mesagem estÃ¡ muito curta.</li>';
        };

        // Se nÃ£o ocorreram erros
        if(erro == '') {
            console.log('enviar form');
        } else {
            out = `
<big><b>Oooops!</b></big>
<p>Ocorreram erros que impedem o envio do seu contato:</p>
<ul>${erro}</ul>
<p>Por favor, verifique o formulÃ¡rio e tente enviar novamente.</p>
            `;
            $('#erromsg').html(out); // Escrever mensagem de erro no documento
            $('#errocaixa').show('fast'); // Exibe a mensagem de erro
        }

        // Reabilitar botÃ£o de envio
        $('#contato_enviar').attr("disabled", false);

        // NÃ£o enviar o form pelo HTML
        return false;
    });

    // Fecha caixa de erro ao clicar nela
    $('#errocaixa').click(function(){
        $(this).hide('fast');
    });

    $(document).on('click', '.ajudaBtn', function(){
        var emQuem = $(this).attr('data-target');
        $('#'+emQuem).toggle('fast');
    });

}

$(document).ready(startApp);