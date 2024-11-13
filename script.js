const productos = [{
        id: 1,
        nombre: "WHITE BLEND 2018",
        descripcion: "Color amarillo verdoso in tenso con leves reflejos dorados. Aromas florales, frutos tropicales maduros acomplejadas con las notas aportadas por su crianza en roble. En boca es fresco, frutado, untuoso y de gran persistencia.",
        precio: 1500,
        imagen: "img/blanco_blend2018.png"
    },
    {
        id: 2,
        nombre: "NAVIRA BLEND 2018",
        descripcion: "Color rojo rubí profundo, en aroma se perciben notas de mermeladas de frutos rojos-negro s , hierbas, especias y frutos maduros, con notas balsámicas. En boca es complejo y frutado, de persistencia media. Estibado en botellas durante 6 meses.",
        precio: 1400,
        imagen: "img/blend.png"
    },
    {
        id: 3,
        nombre: "CABERNET 2017",
        descripcion: "olor rojo rubí. Aroma frutas, especiado, herbal y pimiento, acomplejadas con las notas aportadas por su crianza en roble. En boca es fresco, de equilibrada acidez, especiado, con taninos dulces y maduros.",
        precio: 1800,
        imagen: "img/cabernet_cabernet.png"
    },
    {
        id: 4,
        nombre: "CHARDONNAY ",
        descripcion: "Color amarillo verdoso brillante, en aroma se percibe notas de frutos blancos como pera, durazno y ananá, En boca es complejo y frutado, de buena acidez.",
        precio: 1700,
        imagen: "img/chardonnay.png"
    },
    {
        id: 5,
        nombre: "Gran Quilino 2017",
        descripcion: "Color rojo profundo Aromas a frutos rojos y negros maduros, higo, frutilla, especias, acomplejadas con las notas aportadas por su permanencia en roble. En boca es frutado, estructur a media y de final prolongado.",
        precio: 1200,
        imagen: "img/gran_quilino.png"
    },
    {
        id: 6,
        nombre: "MALBEC 2017",
        descripcion: "Color rojo rubí. Aroma frutas negras y rojas, herbal y mentolado, acomplejadas con las notas aportadas por su crianza en roble. En boca es fresco, de equilibrada acidez, con taninos dulces, estructura media y gran persistencia.",
        precio: 1650,
        imagen: "img/malbec_2017.png"
    },
    {
        id: 7,
        nombre: "OVUM RESERVA ",
        descripcion: "Color rojo rubí profundo Aroma frutas negras y rojas, especiado, herbal, floral. En boca es fresco, de equilibrada acidez, especiado, con taninos dulces y maduros, de buena estructura y gran persistencia.",
        precio: 1900,
        imagen: "img/ovum_reserva_malbec2017.png"
    },
    {
        id: 8,
        nombre: "OVUM CABERNET FRANC ",
        descripcion: "Color rojo rubí profundo. Aroma frutas negras y rojas, especiado, vegetal, pimiento. En boca es fresco, de equilibrada acidez, vegetal, especiado, mineral, con taninos dulces y maduros, de buena estructura y gran persistencia.",
        precio: 1350,
        imagen: "img/ovum_reserva.png"
    },
    {
        id: 9,
        nombre: "PASSITO INTEGRALE",
        descripcion: "Color dorado. Aromas a cáscara de naranja, quinotos en almíbar, frutos tropicales maduros,y frutos secos, en boca es intenso, untuoso, frutado y equilibrado entre dulzor y acidez, por su crianza en roble. Gran persistencia. Potencial de guarda: Mayor a 10 años.",
        precio: 2000,
        imagen: "img/passito_integrale2017.png"
    },
    {
        id: 10,
        nombre: "PINOT NOIR 2017",
        descripcion: "Color rojo profundo. Aromas a frutos rojos silvestres, frutillas, especias, acomplejadas con las notas aportadas por su permanencia en roble. En boca es frutado, de estructura media, voluminoso y de final prolongado.",
        precio: 2500,
        imagen: "img/pinot_acellotta_blend2017.png"
    },
    {
        id: 11,
        nombre: "ROSADO DE ISABELLA 2019",
        descripcion: "Es un vino único, exótico, ya que se elabora con una variedad deuva (Isabella) de origen americano y no europea, sumado a la técnica de vinificación particular. Es el primer vino en su tipo.",
        precio: 3500,
        imagen: "img/rosado_isabel.png"
    },
    {
        id: 12,
        nombre: "NAVIRA ROSÉ 2019",
        descripcion: "Es un vino único, color rosado de intensidad media alta, con su particular aroma fresco que lo caracteriza, herbal, con un toque floral con reminiscencias a frutas rojas ácidas (frambuesa, frutilla, cerezas). En boca es complejo, con acidez y frutado, de persistencia media.",
        precio: 2550,
        imagen: "img/rosa.png"
    },
    {
        id: 13,
        nombre: "SEMILLÓN VINTAGE 2018",
        descripcion: "Color amarillo pajizo con reflejos dorados. Aroma fruta blanca de carozo, cáscaras de cítricos, floral. En boca es fresco, de equilibrada acidez, frutado de buena estructura y gran persistencia.",
        precio: 1360,
        imagen: "img/semillon_vintage2018.png"
    },
    {
        id: 14,
        nombre: "ZAMBUA DULCE BAG IN BOX",
        descripcion: "En vista se perciben colores rojo rubí de intensidad media, en nariz aromas característicos como zarzamora, frutilla, frambuesa, cítricos. En boca la entrada es dulce de estructura suave ensamblada con una correcta acidez que realza sus notas de frutas rojas",
        precio: 7500,
        imagen: "img/zambua_dulce_caja.png"
    },
    {
        id: 15,
        nombre: "ZAMBUA DULCE",
        descripcion: "En vista se perciben colores vivaces rojo rubí de intensidad media, en nariz aromas característicos como zarzamora, frutilla, frambuesa, cítricos. En boca la entrada es dulce de estructura suave ensamblada con una correcta acidez que realza sus notas de frutas rojas.",
        precio: 7700,
        imagen: "img/zambua_dulce.png"
    },
    {
        id: 16,
        nombre: "ZAMBUA SECO",
        descripcion: "En vista se perciben colores vivaces rojo rubí de intensidad media, en nariz aromas característicos como zarzamora, frutilla, frambuesa, cítricos, hierbas de monte. En boca la entrada es dulce de estructura suave ensamblada con una correcta acidez que realza sus notas de frutas rojas.",
        precio: 7800,
        imagen: "img/zambua_seco.png"
    },
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar productos en la página
function cargarProductos() {
    const productList = $('#product-list');
    productList.empty();
    productos.forEach(producto => {
        const col = $(`
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">$${producto.precio}</p>
                        <button class="btn btn-primary agregar-carrito" data-id="${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        `);
        productList.append(col);
    });
}

// Smart Cart

function cargarProductos() {
    const productList = $('#product-list');
    productList.empty();
    productos.forEach(producto => {
        const col = $(`
            <div class="col sc-product-item">
                        <img data-name="product_image" class="img-fluid" src="${producto.imagen}" alt="${producto.nombre}">
                        <h3 data-name="product_name">${producto.nombre}</h3>
                        <p data-name="product_desc">${producto.descripcion}</p>

                        <input name="product_price" value="${producto.precio}" type="hidden"/>
                        <input name="product_id" value="12" type="hidden" />

                        <button class="sc-add-to-cart btn btn-success agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </div>
        `);
        productList.append(col);
    });
}




// Función para actualizar el carrito en la vista
function actualizarCarrito() {
    const carritoList = $('#carrito-list');
    carritoList.empty();

    carrito.forEach(item => {
        const listItem = $(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.nombre} - $${item.precio} x ${item.cantidad}
                <div>
                    <button class="btn btn-sm btn-secondary restar-cantidad" data-id="${item.id}">-</button>
                    <button class="btn btn-sm btn-secondary sumar-cantidad" data-id="${item.id}">+</button>
                    <button class="btn btn-sm btn-danger eliminar-producto" data-id="${item.id}">X</button>
                </div>
            </li>
        `);
        carritoList.append(listItem);
    });

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    $('#carrito-total').text(`Total: $${total}`);
}

// Función para agregar productos al carrito
// function agregarAlCarrito(id) {
//     const producto = productos.find(p => p.id === id);
//     if (producto) {
//         const productoEnCarrito = carrito.find(p => p.id === id);
//         if (productoEnCarrito) {
//             productoEnCarrito.cantidad += 1;
//         } else {
//             carrito.push({ ...producto, cantidad: 1 });
//         }
//         guardarCarrito();
//         actualizarCarrito();
//     }
// }

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        const productoEnCarrito = carrito.find(p => p.id === id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += 1;
        } else {
            carrito.push({
                ...producto,
                cantidad: 1
            });
        }
        guardarCarrito();
        actualizarCarrito();
        actualizarContadorCarrito(); // Aquí agregamos la llamada para actualizar el ícono
    }
}

function actualizarContadorCarrito() {
    // Calculamos el número total de productos en el carrito sumando las cantidades
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById('cart-count').textContent = totalProductos;
}


// Eventos para sumar, restar y eliminar productos del carrito
// $(document).on('click', '.agregar-carrito', function() {
//     agregarAlCarrito($(this).data('id'));
// });

// $(document).on('click', '.restar-cantidad', function() {
//     const productId = $(this).data('id');
//     const item = carrito.find(item => item.id === productId);
//     if (item.cantidad > 1) {
//         item.cantidad -= 1;
//     } else {
//         carrito = carrito.filter(item => item.id !== productId);
//     }
//     guardarCarrito();
//     actualizarCarrito();
// });

// $(document).on('click', '.sumar-cantidad', function() {
//     agregarAlCarrito($(this).data('id'));
// });

// $(document).on('click', '.eliminar-producto', function() {
//     const productId = $(this).data('id');
//     carrito = carrito.filter(item => item.id !== productId);
//     guardarCarrito();
//     actualizarCarrito();
// });

$(document).on('click', '.agregar-carrito', function () {
    agregarAlCarrito($(this).data('id'));
    actualizarContadorCarrito(); // Actualizamos el contador al agregar
});

$(document).on('click', '.restar-cantidad', function () {
    const productId = $(this).data('id');
    const item = carrito.find(item => item.id === productId);
    if (item.cantidad > 1) {
        item.cantidad -= 1;
    } else {
        carrito = carrito.filter(item => item.id !== productId);
    }
    guardarCarrito();
    actualizarCarrito();
    actualizarContadorCarrito(); // Actualizamos el contador al restar
});

$(document).on('click', '.sumar-cantidad', function () {
    agregarAlCarrito($(this).data('id'));
    actualizarContadorCarrito(); // Actualizamos el contador al sumar
});

$(document).on('click', '.eliminar-producto', function () {
    const productId = $(this).data('id');
    carrito = carrito.filter(item => item.id !== productId);
    guardarCarrito();
    actualizarCarrito();
    actualizarContadorCarrito(); // Actualizamos el contador al eliminar
});


// Evento para el CTA de solicitud de pedido
$('#cta-pedido').click(function () {
    alert('Gracias por tu pedido. Pronto nos pondremos en contacto.');
});

// Cargar los productos y el carrito al cargar la página
$(document).ready(function () {
    cargarProductos();
    actualizarCarrito();
});

// JavaScript para actualizar el contador
let cartCount = 0; // Contador de productos en el carrito
let cartTotal = 0; // Total acumulado de los precios

// Esta función se ejecuta cuando se agrega un producto al carrito
function addToCart(product) {
    // Aumenta el contador de productos
    cartCount++;

    // Aumenta el total sumando el precio del producto agregado
    cartTotal += product.precio;

    // Actualiza la visualización del carrito con el nuevo contador y total
    document.getElementById("cart-count").textContent = cartCount; // Contador de productos
    document.getElementById("cart-total").textContent = "$" + cartTotal.toFixed(2); // Muestra el total acumulado
}


// Llama a `addToCart()` cada vez que se agregue un producto