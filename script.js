const calcular = document.getElementById('calcular');

function vf () {
    const nome = document.getElementById('nome').value;
    const p = document.getElementById('mensal').value;
    const i = (document.getElementById('taxa').value)/100;
    const n = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && i !== '' && n !== '' && mensal !== '') 
    {
        const vf = ((((1+i)**n)-1)/(i)*p).toFixed(2);
        
        resultado.textContent = `${nome} se você aplicar ${p}, à taxa de renda de ${i}% ao mês, durante ${n}, acumulará uma poupança de  R$${vf}.`

        
        
    }
    else
    {
        resultado.textContent = 'Para calcular o seu Valor Futuro , preencha todos os campos.';
    }

}
calcular.addEventListener('click', vf);