document.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        if (event.key === 'a' || event.key === 'A') {
            event.preventDefault();
            selecionarConteudoPrincipal();
        }
    }
});

function selecionarConteudoPrincipal() {
    var conteudoPrincipal = document.querySelector('main');
    
    if (conteudoPrincipal) {
        var range = document.createRange();
        range.selectNodeContents(conteudoPrincipal);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
}