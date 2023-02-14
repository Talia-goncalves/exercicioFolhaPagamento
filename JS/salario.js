    var button = document.getElementById("button");
    const one =  document.getElementById("card2");
    var input = document.querySelector("#name");
    var texto = input.value;
    console.log(texto);
    console.log(card);
    console.log(button);

    var salarioBruto = Number(document.getElementById('salario').value)

    button.addEventListener("click" , function() {

        var b = document.getElementsByTagName("body")[0]
        b.style = "background-image: url(https://thumbs.gfycat.com/ElementaryAnimatedBarebirdbat-size_restricted.gif)"
        var card = document.getElementById("card");
        if (card.style.display === "block") {

        } else {
        
            one.append(card); //adicionei append para mover a card 1 para o lugar da suposta card2
        }

        var card1 = document.getElementById("card1")
        if (card.style.display === "") {
            card1.style.display = "block";
        } else {

            card1.style.display = "none";
        }
        //tirei a var card2 para usar a mesma na primeira instancia
        var botão = document.getElementById("button")
        if (card1.style.display === "block") {
            botão.style.display = "none";
        } else {

            botão.style.display = "none";
        }
    

        
        var dependentes = Number(document.getElementById('dependente').value)
    


        // Esta parte se refere a fazer o calculo do inss de acordo com o sálario colocado 
        switch(true){
            case salarioBruto <= 1212.00:
                var inss = 1212.00 * 0.075
                break
            case salarioBruto <= 2427.35:
                var inss = 2427.35 * 0.09
                break
            case salarioBruto <= 3641.03:
                var inss = 3641.03 * 0.12
                break
            case salarioBruto <= 7087.22:
                var inss = 7087.22 * 0.14
                break
            default:
                var inss = 7087.22 * 0.14
                break
        }

        // Aqui é para fazer o calculo de dependentes (filhos e tals)
        if(dependentes != 0){
            var salarioBaseIR = salarioBruto - inss - dependentes * 189.59
        }

        // Esta parte é para calcular o IRRF (Imposto)
        switch(true){
            case salarioBaseIR <= 1903.98:
                var irrf = 0
                break
            case salarioBaseIR <= 2826.65:
                var irrf = (salarioBaseIR / 100 * 7.5) - 142.80
                break
            case salarioBaseIR <= 3751.05:
                var irrf = (salarioBaseIR / 100 * 15) - 354.80
                break
            case salarioBaseIR <= 4664.68:
                var irrf = (salarioBaseIR / 100 * 22.5) - 636.13
                break
            case salarioBaseIR > 4664.68:
                var irrf = (salarioBaseIR / 100 * 27.5) - 869.36
                break
        }  
        
        document.getElementById('salario').innerHTML = salarioBruto
    });  

    /* Aqui a intenção é conseguir saber se foi selecionado que a pessoa precisa de vale transporte
    para assim ser feito o calculo caso ela tenha solicitado o vale*/
    function checkbox(){
        let checkbox = document.getElementById('checkbox');
        if(checkbox.checked) {
            var vale = salarioBruto*0.6 
        }
    }

    /* Esta parte o professor tinha mostrado o código dele pra gente ver como fazer sumir e 
    aparecer aquele outro bloco/div com a tabela de info, dai só copiei aqui o código dele */
    var btEnviar = document.getElementById("button")
    btEnviar.addEventListener("click", mostrar)

    var btReset = document.getElementById("resetar")
    btReset.addEventListener("click", ocultar)

    function mostrar(){
        document.getElementById("calculo").style.display = "block";
    }

    function ocultar(){
        document.getElementById("calculo").style.display = "none";
    }

    /* teste pra ver se a lógica esta correta

    var salarioLiquido = salarioBruto - inss - irrf

    console.log("O salário é de " + salarioBruto)
    console.log("Pagará o inss no valor de " + inss)
    console.log("O valor do salário base é de  " + salarioBaseIR)
    console.log("E o valor de imposto é de " + irrf)
    console.log("Resultando no salário liquido de " + salarioLiquido) */

