<!doctype html>
<html>
    <head>
        <style>
            body{font-family:sans-serif;background:rgb(220,220,220);}
            #formulario{width:50%;background:white;margin:auto;padding:20px;box-shadow:0px 10px 20px black;border-radius:10px;}
            #formulario h1{color:rgb(100,100,100);font-size:20px;padding:0px;margin:0px;margin-bottom:30px;}
            #formulario p{text-align:left;font-size:10px;}
            #formulario img{}
            .campo input{padding:5px;background:rgb(230,230,230);border:none;margin:4px;width:95%;}
            .campo{margin-bottom: 20px;}
            .campo label{font-size: 2em;padding:0px;margin:0px;}
            .campo p{font-size: 0.6em;padding:0px;margin:0px;}
            #formulario input[type="submit"]{border:none;padding:10px;width:200px;margin:auto;}
        </style>
    </head>
    <body>
        <div id="formulario">
            <img src="https://jocarsa.com/wp-content/uploads/2023/08/cropped-logo-32x32.png">
            <h1>Introduce los datos en este formulario</h1>
            <p>En este formulario puedes introducir tus datos simplemente rellenando aquellos campos que se te piden</p>
             <?php 
            //include "config.php";
            include "controlador.php";
            $miformulario = new Supercontrolador();
            if(isset($_POST['clave']) && $_POST['clave'] = 'procesaformulario'){
                 $miformulario->procesaformulario("entregas");
            }else{
                 $miformulario->formulario("entregas");
            }
           
            ?>
        </div>
       
    </body>
</html>
