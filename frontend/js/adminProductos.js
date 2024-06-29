fetch('http://localhost:3000/productos')
    .then(response => response.json())
    .then(data => {
        const productos = data;
        console.log(data);
        const contenedorProductos = document.querySelector(".listadoProductos");
        productos.forEach(producto => {
            const productoArticulo = document.createElement('article');
            productoArticulo.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h3>${producto.categoria}</h3>
            <h3>${producto.stock}</h3>
            <h3>${producto.precio}</h3>
            <button value="${producto.id}"> editar </button>
            <button value="${producto.id}"> borrar </button>
            `;
            contenedorProductos.appendChild(productoArticulo);
        });
    })