function mostrar()
{

	
	// declarar variables
	var pregunta=prompt("ingrese una respuesta: ");
	var nMin;
	var nMax;
	var valor;
	
		
	
		while(pregunta=="si")
	{

		

			do
			{

				valor=prompt("un numero; ");
						        
				if(nMin>nMax)			
							     
 		        {valor=nMin;} 
		
			    				  										  
					
				{nMax=valor;}
			
				  

					
					
				pregunta=prompt("ingrese una respuesta: ");
			
			}
			while(pregunta=="si")
		
			
	}
	
	
	
	nMin=document.getElementById("minimo").value=nMin;
    nMax=docuement.getElementById("maximo").value=nMax;
	
	




}//FIN DE LA FUNCIÓN