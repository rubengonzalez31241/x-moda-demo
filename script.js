const contenedor = document.getElementById("lista-productos");

productos.forEach(function (producto) {
  const tarjeta = document.createElement("article");

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.categoria}</p>
    <p>$${producto.precio.toLocaleString("es-AR")}</p>
  `;
tarjeta.addEventListener("click", function () {
    abrirModal(producto);
  });

  contenedor.appendChild(tarjeta);
});

document.getElementById("descripcion-negocio").textContent = negocio.descripcion;
document.getElementById("horarios-negocio").textContent = "Horarios: " + negocio.horarios;
document.getElementById("direccion-negocio").textContent = "Dirección: " + negocio.direccion;

const enlaceWhatsapp = document.getElementById("whatsapp-negocio");
enlaceWhatsapp.href = "https://wa.me/" + negocio.whatsapp;
function abrirModal(producto) {
  document.getElementById("modal-imagen").src = producto.imagen;
  document.getElementById("modal-imagen").alt = producto.nombre;
  document.getElementById("modal-nombre").textContent = producto.nombre;
  document.getElementById("modal-descripcion").textContent = producto.descripcion;
  document.getElementById("modal-talles").textContent = "Talles disponibles: " + producto.talles.join(", ");
  document.getElementById("modal-precio").textContent = "$" + producto.precio.toLocaleString("es-AR");

  const mensaje = "Hola! Quería consultar por " + producto.nombre;
  document.getElementById("modal-whatsapp").href = "https://wa.me/" + negocio.whatsapp + "?text=" + encodeURIComponent(mensaje);

  document.getElementById("modal-producto").classList.remove("modal-oculto");
  document.getElementById("modal-producto").classList.add("modal-visible");
}

document.getElementById("cerrar-modal").addEventListener("click", function () {
  document.getElementById("modal-producto").classList.remove("modal-visible");
  document.getElementById("modal-producto").classList.add("modal-oculto");
});