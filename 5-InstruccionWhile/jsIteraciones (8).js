function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var valor;
	var respuesta='si';
	do
	{
		contador++;
		valor=prompt("ingrese su numero");
		if(valor>=0)
		{
			positivo=positivo+parseInt(valor);
		}
		else
		{
			negativo=negativo*parseInt(valor);
		}
		respuesta=prompt("desea ingresar otro numero? : ");

	}while(respuesta== "si"||respuesta =="si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN