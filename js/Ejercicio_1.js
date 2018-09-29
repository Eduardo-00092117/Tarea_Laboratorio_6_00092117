var datosT = [];
var datosV = [];

function datosProducto(codigo, descripcion, tipo, precioCompra, precioVenta, stock){
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.stock = stock;
}

function datosVentas(codigo, descripcion, tipo, precio, cant){
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.cant = cant;
    this.precio = precio;
    this.total = cant*precio;
}

function datos(codigo, descripcion, tipo, precioCompra, precioVenta, stock){
    var perUno = new datosProducto(codigo, descripcion, tipo, precioCompra, precioVenta, stock);
    datosT.push(perUno);
}

function ventas(codigo, descripcion, tipo, precio, cant){
    var perUno = new datosVentas(codigo, descripcion, tipo, precio, cant);
    datosV.push(perUno);
}

function stockCero(){
    let bandera = false;
    for(let i of datosT){
        if(i.stock == 0){
            console.log("Codigo: " + i.codigo + "\n" +
                        "Descripcion: " + i.descripcion + "\n" +
                        "Tipo: " + i.tipo + "\n" +
                        "Precio Compra: " + i.precioCompra + "\n" +
                        "Precio Venta: " + i.precioVenta + "\n" +
                        "Stock: " + i.stock + "\n");
            bandera = true;
        }
    }
    if(bandera == false){
        console.log("No hay datos de stock en cero");
    }
}

function comprobarCodigo(codigo){
    let bandera = true;
    for(let x of datosT){
        if(x.codigo == codigo){
            bandera = false;
        }
    }
    return bandera;
}

function mostrarDatos(){
    for(let i of datosT){
        console.log("Codigo: " + i.codigo + "\n" +
                    "Descripcion: " + i.descripcion + "\n" +
                    "Tipo: " + i.tipo + "\n" +
                    "Precio Compra: " + i.precioCompra + "\n" +
                    "Precio Venta: " + i.precioVenta + "\n" +
                    "Stock: " + i.stock + "\n");
    }
}

function modificarStock(codigo){
    let stockN = parseInt(prompt("Ingrese el stock del producto"));
    for(let i of datosT){
        if(i.codigo == codigo){
            i.stock = parseInt(i.stock) + stockN;
            console.log("---Stock nuevo---");
            console.log("Codigo: " + i.codigo + "\n" +
                        "Descripcion: " + i.descripcion + "\n" +
                        "Tipo: " + i.tipo + "\n" +
                        "Precio Compra: " + i.precioCompra + "\n" +
                        "Precio Venta: " + i.precioVenta + "\n" +
                        "Stock: " + i.stock + "\n");
        }
    }
}

function ReducirStock(codigo, cant){
    for(let i of datosT){
        if(i.codigo == codigo){
            i.stock = parseInt(i.stock) - parseInt(cant);
        }
    }
}

function hacerVenta(codigo){
    for(let i of datosT){
        if(i.codigo == codigo){
            let cant = parseInt(prompt("Ingrese la cantidad del producto"));
            ventas(i.codigo, i.descripcion, i.tipo, i.precioVenta, cant);
            ReducirStock(codigo, cant);
        }
    }
}

function promVenta(){
    let sum = 0;
    for(let x of datosV){
        sum += parseFloat(x.total);
    }
    return sum/datosV.length;
}

function menu(){
    let opc = parseInt(prompt('1- Agregar producto \n2- Modificar Stock \n3- Registrar venta y reducir Stock \n4- Mostrar Promedio de ventas realizadas \n5- Mostrar productos con stock 0 \n6- Salir del programa'));
    switch (opc) {
        case 1:
            console.log('------------------------------------------------------');
            let codigo1 = parseInt(prompt("Ingrese el codigo del producto"));
            if(comprobarCodigo(codigo1)){
                let descripcion1 = prompt("Ingrese la descripcion del producto");
                let tipo1 = prompt("Ingrese el tipo de producto");
                let precioCompra1 = prompt("Ingrese el precio de compra del producto");
                let precioVenta1 = prompt("Ingrese el precio de venta del producto");
                let stock = prompt("Ingrese el stock del producto");
                datos(codigo1, descripcion1, tipo1, precioCompra1, precioVenta1, stock);
                console.log("Ingresado con exito!!!");
            } else{
                console.log("El codigo del producto ya esta ingresado");
            }
            console.log('------------------------------------------------------');
            menu();
            break;
        case 2:
            if(datosT.length != 0){
                console.log('------------------------------------------------------');
                console.log("--Que datos desea modificar (stock)--");
                mostrarDatos();
                let codigo2 = parseInt(prompt("Que dato desea modificar"));
                if(!comprobarCodigo(codigo2)){
                    modificarStock(codigo2);
                } else{
                    console.log("Producto no encontrado");
                }
                console.log('------------------------------------------------------');
            } else{
                console.log("No tiene datos!!!");
            }
            menu();
            break;
        case 3:
            if(datosT.length != 0){
                console.log('------------------------------------------------------');
                console.log("--Que producto desea vender (stock)--");
                mostrarDatos();
                let codigo3 = parseInt(prompt("Que producto desea vender"));
                if(!comprobarCodigo(codigo3)){
                    hacerVenta(codigo3);
                    console.log("Venta realizada");
                } else{
                    console.log("Producto no encontrado");
                }
                console.log('------------------------------------------------------');
            } else{
                console.log("No tiene datos!!!");
            }
            menu();
            break;
        case 4:
            console.log('------------------------------------------------------');
            console.log("El promedio de ventas es " + promVenta());
            console.log('------------------------------------------------------');
            menu();
            break;
        case 5:
            if(datosT.length != 0){
                console.log('------------------------------------------------------');
                stockCero();
                console.log('------------------------------------------------------');
            } else{
                console.log("No tiene datos!!!");
            }
            menu();
            break;
        case 6:
            console.log('Salio!!');
            break;
    
        default:
            console.log('Opcion no valida!!');
            menu();
            break;
    }
}

menu();