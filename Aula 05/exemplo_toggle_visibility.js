

<button id="btn">Oculta</button>

<div id="coisa">
    <p>Clique no bot&atilde;o acima para me ocultar.</p>
</div>

<p>Mais coisas no documento...</p>

<script>
var div = document.getElementById('coisa');
var btn = document.getElementById('btn');

btn.onclick = function(){

    if(div.style.visibility != 'hidden') {
        div.style.visibility = 'hidden';
        btn.innerHTML = 'Mostrar';
    } else {
        div.style.visibility = 'visible';
        btn.innerHTML = 'Oculta';
    }

}

</script>