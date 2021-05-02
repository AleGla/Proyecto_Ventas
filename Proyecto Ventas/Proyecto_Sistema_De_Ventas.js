class Producto{

    static contadorProductos=0;
    
    constructor (nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._idProducto=++Producto.contadorProductos;
    }

    get getIdProducto(){
        return this._idProducto;
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre=nombre
    }

    get getPrecio(){
        return this._precio;
    }

    set setPrecio(precio){
        this._precio=precio;
    }

    toString(){
        return "IdProducto: "+ this._idProducto +", Nombre: " + this._nombre + ", Precio: $" + this._precio;
    }

}

 
class Orden{

    static contadorOrdenes=0;
    _contadorProductosAgregados=0;
    _productos=[];
    
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){       
            this._idOrden=++Orden.contadorOrdenes;
        }  
    
    
     agregarProducto(Producto){
        if(this._productos.length<Orden.MAX_PRODUCTOS){
            this._productos.push(Producto);
            ++this._contadorProductosAgregados;
        }else{
            console.log("No se pueden agregar mas de 5 productos");
        } 

    }

     get calcularTotal(){

        let _precioTotal=0;

        for(let i=0;i<this._productos.length;i++){
           _precioTotal+=this._productos[i].getPrecio;
        }
        return _precioTotal;    
    }

    toString(){
       
        console.log("Orden N° " + this._idOrden + " | " + "Productos Agregados en la orden: " + this._contadorProductosAgregados);
        for(let i=0;i<this._productos.length;i++){

            console.log(this._productos[i].toString());
        
        }
        return "Precio Total $" + this.calcularTotal;
    
    }

}


producto1=new Producto("Manzana",190);
producto2=new Producto("Pera",200);
producto3=new Producto("Mandarina",400);
producto4=new Producto("Naranja",500);
producto5=new Producto("Banana",100);


orden1=new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);

orden2=new Orden();

producto6=new Producto("Manzana",190);
producto7=new Producto("Pera",200);
producto8=new Producto("Manzana",190);

orden2.agregarProducto(producto6);
orden2.agregarProducto(producto7);
orden2.agregarProducto(producto8);

orden3=new Orden();
producto9=new Producto("Pera",200);
producto10=new Producto("Mandarina",400);
producto11=new Producto("Manzana",190);
producto12=new Producto("Manzana",190);

orden3.agregarProducto(producto9);
orden3.agregarProducto(producto10);
orden3.agregarProducto(producto11);
orden3.agregarProducto(producto12);

console.log(orden1.toString());
console.log(orden2.toString());
console.log(orden3.toString());



