function mostrar()
{
    
	var contador=0;
	var acumulador=0;
    var valor=0;
		while(contador<5)
	{
		valor=prompt("ingrese su numero");
		acumulador=acumulador+parseInt(valor);
		contador++;
		//contador=contador+1//
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN