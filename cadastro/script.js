function dados_p () {
    var nome = document.getElementById('nome').value;
    var data = new Date();
    var ano = data.getFullYear();
    var ano_nac = document.getElementById('idade').value;
    var res = document.getElementById('res_dp');

    if (ano_nac == 0 || ano_nac > ano){
        alert ('[ERRO!] Verifique se o ano está correto e digite novamente!');
    }

    else {
        var idade = ano - Number(ano_nac);
        var sexo = document.getElementsByName('radsex');
        var genero = "";
        var idade_tipo = "";
        var est_civil = document.getElementById('est_cv').value;
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked){
            genero = 'masculino';
                if (idade <= 12) {
                    img.setAttribute('src', 'imagens/menino.png');
                    idade_tipo = 'um menino';
                }
                else if (idade < 21) {
                    img.setAttribute('src', 'imagens/jovem_homem.png');
                    idade_tipo = 'um jovem'
                }
                else if (idade < 60) {
                    img.setAttribute('src', 'imagens/adulto.png');
                    idade_tipo = 'um adulto';
                }
                else {
                    img.setAttribute('src', 'imagens/idoso.png');
                    idade_tipo = 'um idoso';
                }
        }
        else {
            genero = 'feminino';
            if (idade <= 12) {
                img.setAttribute('src', 'imagens/menina.png');
                idade_tipo = 'uma menina';
            }
            else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem_mulher.png');
                idade_tipo = 'uma jovem';
            }
            else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulta.png');
                idade_tipo = 'uma adulta';
            }
            else {
                img.setAttribute('src', 'imagens/idosa.png');
                idade_tipo = 'uma idosa';
            }
        }
    }
        res.innerHTML = `Olá ${nome.toUpperCase()}!! Você tem ${idade} anos, é do 
        sexo ${genero} e é ${idade_tipo} ${est_civil}.`;
        res.appendChild(img);
}

function limpa() {
    document.getElementById('nome').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('est_cv').value = "";
    document.getElementById('res_dp').innerHTML = "";
}

function endereco() {
    var cidade = document.getElementById('cidade').value;
    var pais = document.getElementById('pais').value;
    var nacionalidade = '';
    var imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto2');
    var res_endereco = document.getElementById('res_end');

    if (pais == 'brasil') {
        nacionalidade = 'brasileiro';
        imagem.setAttribute('src', 'imagens/brasileiro.jpg');
    }
    else {
        nacionalidade = 'estrangeiro';
        imagem.setAttribute('src', 'imagens/estrangeiros.png');
    }

    res_endereco.innerHTML = `Você mora em ${cidade}, ${pais}, e é ${nacionalidade}.`;
    res_endereco.appendChild(imagem);
}
 function limpa_endereco() {
     document.getElementById('rua').value = "";
     document.getElementById('num').value = "";
     document.getElementById('bairro').value = "";
     document.getElementById('cidade').value = "";
     document.getElementById('pais').value = "";
     document.getElementById('res_end').innerHTML = "";
 }

 function contato() {
     var email = document.getElementById('email').value;
     var fone01 = document.getElementById('fone1').value;
     var fone02 = document.getElementById('fone2').value;
     var imag = document.createElement('img');
     imag.setAttribute('id', 'foto_cont');
     imag.setAttribute('src', 'imagens/legal.png');
     var res_contato = document.getElementById('res_fnal');

     res_contato.innerHTML = `Seus dados foram salvos com sucesso!`;
     res_contato.appendChild(imag);
 }

 function limpa_contato() {
    document.getElementById('email').value = "";
    document.getElementById('fone1').value = "";
    document.getElementById('fone2').value = "";
    document.getElementById('res_final').innerHTML = "";
 }