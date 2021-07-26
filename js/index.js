

 var encuesta1 = prompt ("Elige un medio de transporte: Auto, Moto o Avion") ;
 
 //condicional simple   //operadores logicos
 
 if ((encuesta1 !="" ) && (encuesta1 == "Moto" || encuesta1 == "moto"|| encuesta1 == "Auto" || encuesta1 == "auto" || encuesta1 == "Avion" || encuesta1 == "avion")) {
    alert ("Elegiste " + encuesta1);
 }  
 if (encuesta1 == "Moto" || encuesta1 == "moto" ) {
    (encuesta2 = prompt ( "que tipo de moto prefieres?")); {
        alert ("Elegiste " + encuesta2);
    }

}  if (encuesta1 == "auto" || encuesta1 == "Auto") {
        (encuesta3 = prompt ("Prefieres auto o camioneta?")) ;{
            alert ("Elegiste " + encuesta3) ;
        }

 }  if (encuesta1 == "avion" || encuesta1 == "Avion") {
     (encuesta4 = prompt ("Prefieres ventanilla o pasillo en el avión?")) ;{
         alert ("Elegiste " + encuesta4) ;
     }
 }
