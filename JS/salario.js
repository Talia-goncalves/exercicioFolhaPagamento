var salarioBruto = document.getElementById('salario').value
var dependentes = document.getElementById('dependente').value

switch(salarioBruto){
    case salarioBruto <= 1212.00:
        var c1 = 1212*0.075

        break
    case salarioBruto <= 2427.35:
        var c2 = 2427.35*0.09

        break
    case salarioBruto <= 3641.03:
        var c3 = 3641.03*0.12

        break
    case salarioBruto <= 7087.22:
        var c4 = 7087.22*0.14
        
        break
    default:
        var c5 = 7087.22*0.14

        break
}



function checkbox(){
    let checkbox = document.getElementById('checkbox');

    if(checkbox.checked) {
        var vale = salarioBruto*0.6
        
    } else {
        
    }
}

