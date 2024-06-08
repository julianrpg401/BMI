let barra_peso = document.getElementById("barra_peso");
let peso = document.getElementById("peso");
let barra_estatura = document.getElementById("barra_estatura");
let estatura = document.getElementById("estatura");

//Actualizar el contenido de peso
barra_peso.oninput = () =>
{
    peso.innerHTML = barra_peso.value;
}

//Actualizar el contenido de barra_peso
peso.addEventListener("input", function(){
    let pesoIngresado = parseInt(peso.textContent);

    if (!isNaN(pesoIngresado) && pesoIngresado >= 30 && pesoIngresado <= 150)
    {
        barra_peso.value = pesoIngresado;
    }
})

//Actualizar el contenido de estatura
barra_estatura.oninput = () =>
{
    estatura.innerHTML = barra_estatura.value;
}

//Actualizar el contenido de barra_estatura
estatura.addEventListener("input", function(){
    let estaturaIngresado = parseInt(estatura.textContent);

    if (!isNaN(estaturaIngresado) && estaturaIngresado >= 130 && estaturaIngresado <= 200)
    {
        barra_estatura.value = estaturaIngresado;
    }
})

//Funcion que calcula el IMC
function Calcular(){
    let variablePeso;
    let variableEstatura;
    let variableEstaturaMetros;
    let resultado;

    variablePeso = document.getElementById("peso").textContent;
    variableEstatura = document.getElementById("estatura").textContent;
    variableEstaturaMetros = variableEstatura / 100;

    resultado = parseFloat(variablePeso / (variableEstaturaMetros * variableEstaturaMetros)).toFixed(2);

    if (resultado >= 0 && resultado < 30)
    {
        if (resultado < 18.5)
        {
            document.getElementById("resultado").textContent = "Su IMC es de " + resultado + " BAJO PESO";
        }
        else if (resultado < 25)
        {
            document.getElementById("resultado").textContent = "Su IMC es de " + resultado + " NORMAL";
        }
        else
        {
            document.getElementById("resultado").textContent = "Su IMC es de " + resultado + " SOBREPESO";
        }
    }
    else
    {
        document.getElementById("resultado").textContent = "Su IMC es de " + resultado + " OBESIDAD";
    }
}

//Funcion que obtiene el sexo seleccionado por el usuario
function GetInputRadio()
{
    if (document.getElementById("hombre").checked)
    {
        genero = document.getElementById("hombre");    
    }
    if (document.getElementById("mujer").checked)
    {
        genero = document.getElementById("mujer");  
    }

    console.log(genero.value);
}





