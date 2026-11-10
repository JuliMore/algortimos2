function saludarAprendices(){
    let aprendices = ["Tribiño","Rojas","Hoyos","Guillen","Juan Diego","Julian","Daniel","Erika","Tinoco","Juanfer","Maria","Cedeño","Richard","Vargas","Angely","Amarillo","Erith","Yen","Pulgar","Jhonatan","Andres"];

    console.log("LISTADO DE APRENDICES");
    for (let i = 0; i < aprendices.length; i++){
        console.log("Bienvenido " + aprendices[i]);
    }

    console.log("Primer registro:");
    console.log(aprendices[0]);

    console.log("Tercer registro:");
    console.log(aprendices[2]);

    console.log("Último registro:");
    console.log(aprendices[aprendices.length - 1]);

    console.log("Total de estudiantes:");
    console.log(aprendices.length);

    console.log("Aprendices enumerados:");
    for (let i = 0; i < aprendices.length; i++){
        console.log(i + ": " + aprendices[i]);
    }

    console.log("REGISTRAR NUEVO ESTUDIANTE");
    let nombreNuevo = prompt("Escriba el nombre del nuevo aprendiz:");
    aprendices.push(nombreNuevo);
    console.log("Se registró a " + nombreNuevo);

    console.log("Total actualizado:");
    console.log(aprendices.length);

    console.log("CONSULTAR REGISTRO");
    let nombreConsultar = prompt("¿Qué aprendiz desea consultar?");

    if (aprendices.includes(nombreConsultar)) {
        console.log(nombreConsultar + " aparece en la lista.");
    } else {
        console.log(nombreConsultar + " no está registrado.");
    }

    console.log("LISTADO ACTUALIZADO");
    for (let i = 0; i < aprendices.length; i++){
        console.log(i + ": " + aprendices[i]);
    }
}


function productostienda(){
    let productos = ["Computador", "Mouse", "Teclado", "Monitor", "Audifonos"];

    console.log("INVENTARIO INICIAL");
    for (let i = 0; i < productos.length; i++){
        console.log("Artículo: " + productos[i]);
    }

    console.log("Actualizar el segundo artículo");
    productos[1] = "Mouse Gamer";

    for (let i = 0; i < productos.length; i++){
        console.log("Artículo actualizado: " + productos[i]);
    }

    console.log("Incorporar un producto al final");
    productos.push("Camara");

    for (let i = 0; i < productos.length; i++){
        console.log("Artículo: " + productos[i]);
    }

    console.log("Añadir un producto al inicio");
    productos.unshift("Tablet");

    for (let i = 0; i < productos.length; i++){
        console.log("Artículo: " + productos[i]);
    }

    console.log("CONTENIDO DEL INVENTARIO");
    for (let i = 0; i < productos.length; i++){
        console.log("Producto: " + productos[i]);
    }

    let productoBuscar = prompt("Digite el producto que desea encontrar:");

    if (productos.includes(productoBuscar)) {
        console.log("El producto " + productoBuscar + " está disponible.");
    } else {
        console.log("No se encontró el producto " + productoBuscar + ".");
    }

    console.log("CONSULTAR POSICIÓN");
    let indiceProducto = productos.indexOf(productoBuscar);

    if (indiceProducto !== -1) {
        console.log("Se encuentra en el índice: " + indiceProducto);
    } else {
        console.log("No fue posible encontrar su ubicación.");
    }

    console.log("MODIFICAR UN PRODUCTO");
    let indiceModificar = Number(prompt("Indique el índice del producto que desea cambiar:"));
    let nombreActualizado = prompt("Escriba el nuevo nombre:");

    if (indiceModificar >= 0 && indiceModificar < productos.length && Number.isInteger(indiceModificar)) {
        productos[indiceModificar] = nombreActualizado;
        console.log("Producto modificado correctamente.");
    } else {
        console.log("El índice ingresado no es válido.");
    }

    for (let i = 0; i < productos.length; i++){
        console.log("Producto: " + productos[i]);
    }

    console.log("RETIRAR EL ÚLTIMO ARTÍCULO");
    productos.pop();

    for (let i = 0; i < productos.length; i++){
        console.log("Producto: " + productos[i]);
    }

    console.log("RESUMEN FINAL");
    console.log("Cantidad de productos: " + productos.length);

    for (let i = 0; i < productos.length; i++){
        console.log("Producto: " + productos[i]);
    }
}


function ciudadesColombia(){
    let ciudades = ["Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena", "Bucaramanga"];

    console.log("CIUDADES REGISTRADAS");
    for (let i = 0; i < ciudades.length; i++){
        console.log("Ciudad: " + ciudades[i]);
    }

    console.log("Retirar la última ciudad");
    ciudades.pop();

    for (let i = 0; i < ciudades.length; i++){
        console.log("Ciudad: " + ciudades[i]);
    }

    console.log("Eliminar el primer registro");
    ciudades.shift();

    for (let i = 0; i < ciudades.length; i++){
        console.log("Ciudad: " + ciudades[i]);
    }

    console.log("Quitar el tercer elemento");
    ciudades.splice(2, 1);

    for (let i = 0; i < ciudades.length; i++){
        console.log("Ciudad: " + ciudades[i]);
    }

    console.log("AGREGAR DOS CIUDADES");
    ciudades.push("Santa Marta");
    ciudades.push("Pereira");

    for (let i = 0; i < ciudades.length; i++){
        console.log("Ciudad: " + ciudades[i]);
    }

    console.log("Cantidad de ciudades registradas:");
    console.log(ciudades.length);

    console.log("Listado numerado:");
    for (let i = 0; i < ciudades.length; i++) {
        console.log((i + 1) + ". " + ciudades[i]);
    }

    console.log("BUSCAR UNA CIUDAD");
    let ciudadConsultar = prompt("Ingrese el nombre de la ciudad:");

    if (ciudades.includes(ciudadConsultar)) {
        console.log(ciudadConsultar + " se encuentra registrada.");
    } else {
        console.log(ciudadConsultar + " no aparece en el listado.");
    }
}


function busquedaEstudiantes(){
    let estudiantes = ["Andrea", "Luis", "Carlos", "Sofia", "Jorge", "Kevin", "Juan", "Laura"];

    console.log("INTEGRANTES DEL GRUPO");
    for (let i = 0; i < estudiantes.length; i++){
        console.log("Nombre: " + estudiantes[i]);
    }

    console.log("PRIMERA CONSULTA");
    let nombre1 = prompt("Escriba el nombre del estudiante que desea buscar:");

    if (estudiantes.includes(nombre1)) {
        console.log(nombre1 + " se encuentra registrado.");
    } else {
        console.log(nombre1 + " no aparece en el grupo.");
    }

    console.log("POSICIÓN DEL ESTUDIANTE");
    let posicion = estudiantes.indexOf(nombre1);

    if (posicion !== -1) {
        console.log("Índice encontrado: " + posicion);
    } else {
        console.log("No se encontró una posición.");
    }

    console.log("RESULTADO DE LA BÚSQUEDA");
    if (posicion !== -1){
        console.log("Consulta realizada correctamente.");
    } else {
        console.log("No hubo coincidencias.");
    }

    console.log("SEGUNDA CONSULTA");
    let nombre2 = prompt("Ingrese otro nombre para consultar:");
    let posicion2 = estudiantes.indexOf(nombre2);

    if (posicion2 !== -1){
        console.log(nombre2 + " está registrado en el índice " + posicion2);
    } else {
        console.log(nombre2 + " no se encuentra registrado.");
    }

    console.log("CONTAR NOMBRES POR INICIAL");
    let letraBuscar = prompt("Ingrese una letra para consultar los nombres que comienzan con ella:");
    let contadorNombres = 0;

    for (let i = 0; i < estudiantes.length; i++){
        if (estudiantes[i][0].toLowerCase() == letraBuscar.toLowerCase()){
            contadorNombres++;
        }
    }

    console.log("Cantidad de nombres que comienzan por " + letraBuscar + ": " + contadorNombres);

    console.log("DIRECTORIO DE ESTUDIANTES");
    for (let i = 0; i < estudiantes.length; i++) {
        console.log((i + 1) + ": " + estudiantes[i]);
    }

    console.log("AGREGAR UN NUEVO INTEGRANTE");
    let estudianteNuevo = prompt("Escriba el nombre del estudiante que desea registrar:");

    if (!estudiantes.includes(estudianteNuevo)) {
        estudiantes.push(estudianteNuevo);
        console.log("Se agregó correctamente a " + estudianteNuevo);
    } else {
        console.log(estudianteNuevo + " ya está en el listado.");
    }

    console.log("DIRECTORIO ACTUALIZADO");
    for (let i = 0; i < estudiantes.length; i++){
        console.log("Estudiante: " + estudiantes[i]);
    }

    console.log("Total de estudiantes: " + estudiantes.length);
}


function AnalisisNumeros(){
    let numeros = [22, -8, 9, 3, 17, 5, -16, 2, 48, 21];

    console.log("RECORRIDO DEL ARREGLO");
    for (let i = 0; i < numeros.length; i++) {
        console.log("Índice " + i + ": " + numeros[i]);
    }

    console.log("VALORES ALMACENADOS");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    console.log("SUMA DE LOS ELEMENTOS");
    let resultadoSuma = 0;

    for (let i = 0; i < numeros.length; i++) {
        resultadoSuma += numeros[i];
    }

    console.log("Resultado de la suma: " + resultadoSuma);

    console.log("PROMEDIO GENERAL");
    let media = resultadoSuma / numeros.length;
    console.log("Promedio obtenido: " + media);

    console.log("CLASIFICACIÓN DE PARES E IMPARES");
    let totalPares = 0;
    let totalImpares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            totalPares++;
        } else {
            totalImpares++;
        }
    }

    console.log("Total de pares: " + totalPares);
    console.log("Total de impares: " + totalImpares);

    console.log("VALOR MÁS ALTO Y MÁS BAJO");
    let valorMayor = numeros[0];
    let valorMenor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > valorMayor) {
            valorMayor = numeros[i];
        }

        if (numeros[i] < valorMenor) {
            valorMenor = numeros[i];
        }
    }

    console.log("Máximo encontrado: " + valorMayor);
    console.log("Mínimo encontrado: " + valorMenor);

    console.log("CONTABILIZAR LOS NÚMEROS SEGÚN SU SIGNO");
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log("Valores positivos: " + positivos);
    console.log("Valores negativos: " + negativos);
    console.log("Valores iguales a cero: " + ceros);

    console.log("NÚMEROS QUE SUPERAN LA MEDIA");
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > media) {
            console.log(numeros[i]);
        }
    }

    console.log("CONSULTAR UN VALOR");
    let numeroBuscar = Number(prompt("Ingrese el número que desea localizar:"));

    if (numeros.includes(numeroBuscar)) {
        console.log("El número " + numeroBuscar + " pertenece al arreglo.");
    } else {
        console.log("El número " + numeroBuscar + " no está registrado.");
    }

    console.log("ORDEN INVERSO");
    let listaInvertida = numeros.slice().reverse();

    for (let i = 0; i < listaInvertida.length; i++) {
        console.log(listaInvertida[i]);
    }

    console.log("ORDENAR DE MAYOR A MENOR");
    let listaOrdenada = numeros.slice().sort(function(a, b) {
        return b - a;
    });

    for (let i = 0; i < listaOrdenada.length; i++) {
        console.log(listaOrdenada[i]);
    }

    console.log("RESUMEN DEL ANÁLISIS");
    console.log("Arreglo original:");

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    console.log("Suma: " + resultadoSuma);
    console.log("Promedio: " + media);
    console.log("Mayor: " + valorMayor);
    console.log("Menor: " + valorMenor);
}


function gestionMaterias() {

    let materiasEduTrace = ["Matemáticas","Física","Español","Biología","Inglés","Sociales","Química","Informática"];

    console.log("MATERIAS DEL PLAN DE ESTUDIO");

    console.log("Primera materia:");
    console.log(materiasEduTrace[0]);

    console.log("Tercera materia:");
    console.log(materiasEduTrace[2]);

    console.log("Total de materias:");
    console.log(materiasEduTrace.length);

    console.log("RECORRIDO DE LAS MATERIAS");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log("Posición [" + i + "]: " + materiasEduTrace[i]);
    }

    console.log("INCORPORAR NUEVAS MATERIAS");
    materiasEduTrace.push("Ética y Valores");
    materiasEduTrace.unshift("Filosofía");

    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log("Materia: " + materiasEduTrace[i]);
    }

    console.log("ACTUALIZAR UNA MATERIA");
    console.log("Nombre anterior: " + materiasEduTrace[3]);

    materiasEduTrace[3] = "Biología Avanzada";

    console.log("Nuevo nombre: " + materiasEduTrace[3]);

    console.log("RETIRAR MATERIAS DEL ARREGLO");

    let materiaRetirada = materiasEduTrace.pop();
    console.log("Eliminada del final: " + materiaRetirada);

    let materiaInicio = materiasEduTrace.shift();
    console.log("Eliminada del inicio: " + materiaInicio);

    let materiaCentro = materiasEduTrace.splice(2, 1);
    console.log("Eliminada del índice 2: " + materiaCentro[0]);

    console.log("VERIFICAR SI UNA MATERIA EXISTE");
    let materiaBuscada = "Física";
    let existeMateria = materiasEduTrace.includes(materiaBuscada);

    console.log("¿Está registrada " + materiaBuscada + "?");
    console.log(existeMateria);

    if (existeMateria) {
        let indiceEncontrado = materiasEduTrace.indexOf(materiaBuscada);
        console.log("Posición dentro del arreglo: " + indiceEncontrado);
    }

    console.log("LISTADO FINAL");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log((i + 1) + ". " + materiasEduTrace[i]);
    }

    console.log("Cantidad de materias activas: " + materiasEduTrace.length);

    console.log("ORGANIZACIÓN ALFABÉTICA");
    let materiasOrdenadas = [...materiasEduTrace].sort();

    for (let i = 0; i < materiasOrdenadas.length; i++) {
        console.log(materiasOrdenadas[i]);
    }
}


// DE ARREGLOS A OBJETOS

function inventarioProductos(){

    const producto = {
        nombre: "celular",
        marca: "Iphone",
        precio: 1500000,
        cantidad: 50
    };

    console.log("DATOS DEL PRIMER ARTÍCULO");
    console.log(producto.nombre);
    console.log(producto.marca);
    console.log(producto.precio);
    console.log(producto.cantidad);

    const producto2 = {
        nombre2: "Pc portatil",
        marca2: "Asus",
        precio2: 4000000,
        cantidad2: 50
    };

    console.log("INFORMACIÓN DEL SEGUNDO PRODUCTO");
    console.log(producto2.nombre2);
    console.log(producto2.marca2);
    console.log(producto2.precio2);
    console.log(producto2.cantidad2);

    console.log("CONSULTAR OBJETO COMPLETO");
    console.log(producto2);
}


function gestionpersonas(){

    const persona = {
        nombre: "Esneider",
        edad: 17,
        genero: "Masculino",

        saludar: function(){
            console.log("Mi nombre es " + this.nombre);
            console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
        }
    };

    persona.saludar();
}


function gestionarProduct(){

    const producto = {
        nombre: "Teclado",
        precio: 320000,
        cantidad: 26,

        mostrarInfo: function(){
            console.log("Nombre del artículo: " + this.nombre);
            console.log("Valor unitario: " + this.precio);
            console.log("Unidades disponibles: " + this.cantidad);
            console.log("Costo total de las existencias: " + this.precio * this.cantidad);
        }
    };

    producto.mostrarInfo();
}


function gestionarEmpleado(){

    const empleado = {
        nombre: "Juli",
        cargo: "Desarrollador",
        salarioMensual: 3500000,
        diasTrabajados: 30,
        porcentajeDescuento: 0.04,

        calculoSalario: function(){
            let valorDia = this.salarioMensual / 30;
            let pagoCalculado = this.diasTrabajados * valorDia;
            return parseInt(pagoCalculado);
        },

        calcularDescuento: function(){
            let descuentoAplicado = this.calculoSalario() * this.porcentajeDescuento;
            return parseInt(descuentoAplicado);
        },

        calcularTotalPagar: function(){
            let pagoNeto = this.calculoSalario() - this.calcularDescuento();

            console.log("Salario por días trabajados: " + this.calculoSalario());
            console.log("Valor del descuento: " + this.calcularDescuento());
            console.log("TOTAL NETO A RECIBIR: " + pagoNeto);
        }
    };

    empleado.calcularTotalPagar();
}


function gestionarEmpleado2(){

    const empleado = {
        nombre: prompt("Digite su nombre:"),
        cargo: prompt("Indique su cargo:"),
        salarioMensual: parseInt(prompt("Ingrese el salario mensual:")),
        diasTrabajados: parseInt(prompt("¿Cuántos días trabajó?")),
        porcentajeDescuento: 0.04,

        calculoSalario: function(){
            let valorDia = this.salarioMensual / 30;
            let pagoCalculado = this.diasTrabajados * valorDia;
            return parseInt(pagoCalculado);
        },

        calcularDescuento: function(){
            let descuentoAplicado = this.calculoSalario() * this.porcentajeDescuento;
            return parseInt(descuentoAplicado);
        },

        calcularTotalPagar: function(){
            let pagoFinal = this.calculoSalario() - this.calcularDescuento();

            alert("Salario correspondiente a los días trabajados: " + this.calculoSalario());
            alert("Descuento aplicado: " + this.calcularDescuento());
            alert("Valor neto a recibir: " + pagoFinal);
        }
    };

    empleado.calcularTotalPagar();
}


function registroEstudiantes(){

    const estudiante = {
        nombre: "Julian",
        apellido: "Sierra",
        edad: 17,
        formacion: "ADSO",
        ficha: 3593362,
        correo: "cesarsierram99@gmail.com"
    };

    console.log("INFORMACIÓN DEL ESTUDIANTE");
    console.log(estudiante);

    console.log("DATOS PERSONALES");
    console.log("Nombre: " + estudiante.nombre);
    console.log("Apellido: " + estudiante.apellido);

    console.log("PROGRAMA DE FORMACIÓN");
    console.log(estudiante["formacion"]);

    console.log("ACTUALIZAR INFORMACIÓN");
    estudiante.edad = parseInt(prompt("Ingrese la nueva edad:"));
    console.log("Edad actualizada: " + estudiante.edad);

    console.log("REGISTRAR CIUDAD DE RESIDENCIA");
    estudiante.ciudad = prompt("Ingrese la ciudad donde vive:");
    console.log("Ciudad agregada: " + estudiante.ciudad);

    console.log("ELIMINAR CORREO");
    delete estudiante.correo;

    console.log("RECORRER LAS PROPIEDADES");
    for (let propiedad in estudiante){
        console.log(propiedad + ": " + estudiante[propiedad]);
    }

    console.log("REGISTRO FINAL DEL ESTUDIANTE");
    console.log(estudiante);
}

        

