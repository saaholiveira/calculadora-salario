$("#calcular").click(function () {
    var nome = $("#txtnome").val();
    var idade = parseFloat($("#txtidade").val());
    var sbruto = parseFloat($("#txtsbruto").val());
    var dependentes = parseFloat($("#txtdependentes").val());

    if (isNaN(idade) || isNaN(sbruto) || isNaN(dependentes)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var bonus = (idade > 50) ? sbruto + 300 : sbruto + 200;

    var inss = 0.08;
    var vt = 0.05;
    var acrescimo = (sbruto * inss) * vt;
    var valorDependentes = dependentes * 50;
    var sliquido = (sbruto + bonus - acrescimo + valorDependentes).toFixed(2);

    var moeda = parseFloat(sliquido).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    $("#res_nome").text("Nome: " + nome)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

    $("#res_sbruto").text("Salário bruto: " + sbruto)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

    $("#res_dependentes").text("Dependentes: " + dependentes)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

    $("#res_inss").text("INSS: " + inss)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

    $("#res_vt").text("Vale transporte: " + vt)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

    $("#res_sliquido").text("Salário líquido: " + moeda)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);
});