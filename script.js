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

document.getElementById("descripcion-negocio").textContent = negocio.descripcion;
document.getElementById("horarios-negocio").textContent = "Horarios: " + negocio.horarios;
document.getElementById("direccion-negocio").textContent = "Dirección: " + negocio.direccion;

const enlaceWhatsapp = document.getElementById("whatsapp-negocio");
enlaceWhatsapp.href = "https://wa.me/" + negocio.whatsapp;