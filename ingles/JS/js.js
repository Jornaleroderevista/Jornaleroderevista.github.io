function validar()
{
    var nome = contato.nome.value;
    var email = contato.email.value;
    var motivo = contato.motivo.value;

    if(nome=='')
    {
        alert('Por favor informe seu nome');
        contato.nome.focus();
        return false;
    }
    if(email=='')
    {
        alert('Por favor informe seu email');
        contato.email.focus();
        return false;
    }
    if(motivo=='')
    {
        alert('Por favor informe seu motivo para nos contatar');
        contato.motivo.focus();
        return false;
    }
    return true;
}