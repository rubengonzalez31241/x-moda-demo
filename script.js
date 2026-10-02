const contenedor = document.getElementById("lista-productos");

productos.forEach(function (producto) {
  const tarjeta = document.createElement("article");

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.categoria}</p>
    <p>$${producto.precio.toLocaleString("es-AR")}</p>
  `;

  contenedor.appendChild(tarjeta);
});