//--------FUNCIONES---------//

function calculoCoutaCapital (mon,cuo){
    capital = mon/cuo;
} 

function calculoInteres (mon){
    switch (opcion){
            case 1:{
            let tasa=80;
            interes = (((mon/100)*tasa)/365)*30;
            }
            case 2:{
            let tasa=70;
            interes = (((mon/100)*tasa)/365)*30;
            }
            case 3:{
            let tasa=18;
            interes = (((mon/100)*tasa)/365)*30;
            }
            break;
    }
}

function calculoIva(int){
    iva = int*0.21;
}

function calculoCuotaMensual(cap,int,iva){
    cuotaMensual=cap+int+iva;
}

function acuerdo (mon,cap,int,iva,ctaMen,cta){
    console.log("Acordado" +" "+"$"+mon);
    switch (opcion){
            case 1:{
            let tasa=80;
            console.log("TNA "+tasa+"%");
            }
            break;
            case 2:{
            let tasa=70;
            console.log("TNA "+tasa+"%");
            }
            break;
            case 3:{
            let tasa=18;
            console.log("TNA "+tasa+"%");
            }
            break;
    }    
    console.log("Capital a abonar"+" "+"$"+cap.toFixed(2));
    console.log("Interes a abonar por cuota"+" "+"$"+int.toFixed(2));
    console.log("Iva="+" "+"$"+iva.toFixed(2));
    console.log("Cuota total mensual"+" "+"$"+ctaMen.toFixed(2));
    console.log("A pagar en"+" "+cta+" "+"cuotas mensuales, iguales y consecutivas");    
}

//--------FUNCIONES---------//


const OPCION_SALIR = 3;

const lineasPrestamo = [
    {
            id:1,
            nombre:"Sola Firma",
            TNA:80,
            montoMaximo:2000000,
            periodoMaximo:60,
            tipoDeGarantia:"cartera"
    },
    {
            id:2,
            nombre:"Prendario",
            TNA:70,
            montoMaximo:7000000,
            periodoMaximo:24,
            tipoDeGarantia:"Prenda"
    },
    {
            id:3,
            nombre:"Hipotecario",
            TNA:18,
            montoMaximo:25000000,
            periodoMaximo:360,
            tipoDeGarantia:"Hipoteca"
    },
]


const verProductos = () => {
    let mensaje = "Lista de producto: \n";
    lineasPrestamo.forEach(el =>{
                mensaje = mensaje + `${el.id}-${el.nombre}  $${el.montoMaximo} hasta ${el.periodoMaximo} cuotas, TNA ${el.TNA}% \n`
    });

    const opcion = parseInt(prompt(mensaje)); 

    let monto = parseInt(prompt("Ingrese el monto del préstamo a solicitar:"))
    let cuotas = parseInt(prompt("Ingrese el la cantidad de cuotas en que desea pagarlo:"))

    calculoCoutaCapital (monto,cuotas);
    calculoInteres(monto);   
    calculoIva(interes);
    calculoCuotaMensual(capital, interes, iva);
    acuerdo (monto,capital,interes,iva,cuotaMensual,cuotas);


    alert("Solicitado en forma correcta")
}

const calcularIngresos = () => {
    let haberes = prompt("Trabaja en Relacion de depencia? SI o NO");
            switch (haberes){
                    case "SI":
                    alert("A continuacion ingrese los ultimos 3 sueldos netos");
                    let sueldo1 = parseInt(prompt("Ultimo sueldo"));
                    let sueldo2 = parseInt(prompt("Penultimo sueldo"));
                    let sueldo3 = parseInt(prompt("Antepenultimo sueldo"));
                    let afectacion = (((sueldo1+sueldo2+sueldo3)/3)/100)*35;
                    console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                    break;
                    case "NO":
                    let independiente = prompt("Trabaja de manera independiente? SI O NO");
                    switch (independiente){
                            case "SI":{
                            let afip = prompt("En caso de ser responsable inscripto escriba SI,  de lo contrario escriba NO");
                            switch (afip){
                                    case "SI":{
                                    let liquidacionAnual = parseInt(prompt("Ingrese el monto de su liquidacion anual"));
                                    let afectacion = ((liquidacionAnual/12)/100)*35;
                                    console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));                
                                    }break;
                                    case "NO":{
                                    let monotributista = prompt("Escriba su categoria de Monotributista");
                                    switch (monotributista){
                                            case "A":{
                                            let afectacion = (((1400000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "B":{
                                            let afectacion = (((2100000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "C":{
                                            let afectacion = (((2900000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "D":{
                                            let afectacion = (((3600000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "E":{
                                            let afectacion = (((4300000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "F":{
                                            let afectacion = (((5300000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "G":{
                                            let afectacion = (((6400000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "H":{
                                            let afectacion = (((7900000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2)); 
                                            }break;
                                            case "I":{
                                            let afectacion = (((8900000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2)); 
                                            }break;
                                            case "J":{
                                            let afectacion = (((10200000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2));
                                            }break;
                                            case "K":{
                                            let afectacion = (((11300000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion.toFixed(2)); 
                                            }break;
                                    }
                                    }break;            
                            case "NO":{            
                            alert("usted no posee ingresos que puedan ser analizados, muchas gracias por su visita");
                            }break;
                            }
                    }
                    }
            };
    }

let opcion = parseInt(prompt("Elige la operacion que deseas: \n 1-Ver Prestamos \n 2-Calcular afectacion de ingresos \n 3-Salir "))

while(opcion != OPCION_SALIR ){
switch(opcion){
    case 1: 
            verProductos();
            break;
    case 2: 
            calcularIngresos();
            break;
    default:
    alert("Seleccion 1, 2 o 3.");
    break;
}
opcion = parseInt(prompt("Elige la operacion que deseas: \n 1-Ver Prestamos \n 2-Calcular afectacion de ingresos \n 3-Salir "));
}

alert("Gracias por su visita.");
