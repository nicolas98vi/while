function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var pregunta=prompt("ingresamos numeros? :");
		while(pregunta==respuesta)
            {	
				do
				{				
				valor=prompt("ingrese su numero");                 
		        acumulador=acumulador+parseInt(valor);
				contador++;		
				pregunta=prompt("ingresamos numeros? :");
				}
				while(pregunta==respuesta)

			}
            

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN