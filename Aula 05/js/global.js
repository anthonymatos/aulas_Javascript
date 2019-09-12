/* JAVASCRIPT USADO EM TODO O SITE */
/*
    Neste documento estão os JavaScript que atendem à todas ou a mais de uma seção.
    Aqui também estão funções que podem ser utilizadas em mais de uma seção do site.
*/

/* FUNÇÕES GLOBAIS USADAS EM QUALQUER PÁGINA QUANDO NECESSÁRIO */

/* A função '$' é um atalho para 'document.getElement*()' */
function $(objSelector, objListIndex = false){
    if(objListIndex) // Se selecionou um índice de uma lista de objetos (o índice é um inteiro >= 0)
        return document.querySelectorAll(objSelector)[objListIndex];
    else if(objSelector.substr(0, 1) != '#') // Vários objetos podem usar a mesma classe, mesmo nome, etc.
        return document.querySelectorAll(objSelector);
    else // Objetos referenciados pelo ID são únicos
        return document.querySelector(objSelector);
}

// Função padrão para 'sanitizar' os valores dos campos de formulário
function sanitiza(texto) { 
	// Limpa espaços antes e depois da string
	texto = texto.trim();

	// Limpa espaços duplicados dentro da string
	while(texto.indexOf('  ') != -1) // 'TRUE' enquanto ocorrerem espaços duplos
		texto = texto.replace('  ', ' '); // Troca espaços duplos por simples

	// Altera caracteres indesejados (usando expressão regular) pelo 'HTML entitie' equivalente
	texto = texto.replace(/&/g, '&amp;'); /* Caractere '&' */
	texto = texto.replace(/</g, '&lt;'); /* Caractere '<' */
	texto = texto.replace(/>/g, '&gt;'); /* Caractere '>' */
	texto = texto.replace(/"/g, '&quot;'); /* Caractere '"' */

	// Retorna string 'limpa'
	return texto;
}

// Função para validar somente letras em campos de formulários (usando expressão regular e match())
function soLetras(texto) { 
    if(texto.match(/[^a-zà-ú ]/gi))
        return false;
    return true;
}

// Função para validar um endereço de e-mail(usando expressão regular e match())
function isMail(texto) { 
    if(texto.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}$/))
        return true;
	return false;
}