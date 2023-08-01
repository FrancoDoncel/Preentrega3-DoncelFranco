
        class Producto {
            constructor(nombre, cantidad, precioUnitario) {
                this.nombre = nombre;
                this.cantidad = parseInt(cantidad);
                this.precioUnitario = parseFloat(precioUnitario);
            }
        }

        let arrayProducto = [
            new Producto("REMERA", "1000", "9000"),
            new Producto("BUZO", "1023", "23000"),
            new Producto("CAMPERA", "963", "45000"),
            new Producto("CAMISA", "562", "16000"),
            new Producto("PANTALON", "2560", "20000"),
            new Producto("ZAPATILLA", "300", "70000")
        ];

        // Verificamos si ya hay una lista en el localStorage y la obtenemos
        let listaProductos = JSON.parse(localStorage.getItem("listaProductos"));

        // Si no hay lista en el localStorage, utilizamos el array inicial
        if (!listaProductos) {
            listaProductos = arrayProducto;
            localStorage.setItem("listaProductos", JSON.stringify(arrayProducto));
        }

        let lista = document.getElementById("item");
        for (const producto of listaProductos) {
            lista.innerHTML += `<li>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio Unitario: ${producto.precioUnitario}</li>`;
        }

        // Agregar evento de envío al formulario
        let form = document.getElementById("form");
        form.addEventListener("submit", agregar);

        function agregar(event) {
            event.preventDefault(); // Previene el envío del formulario
            let nombre = document.getElementById("nombre").value;
            let cantidad = document.getElementById("cantidad").value;
            let precioUnitario = document.getElementById("precio").value;

            arrayProducto.push(new Producto(nombre.toUpperCase(), cantidad, precioUnitario));
            localStorage.setItem("listaProductos", JSON.stringify(arrayProducto));
            lista.innerHTML += `<li>${nombre.toUpperCase()} - Cantidad: ${cantidad} - Precio Unitario: ${precioUnitario}</li>`;

            form.reset(); // Reseteamos el formulario para limpiar los campos
        }