let productosHTML = document.querySelector('.productos')

function tituloproducto(i){
    switch(i){
        case 0:
            return "COCKATIL FRÍO Y CALIENTE";
        case 1:
            return "FINGER FOOD";
        case 2:
            return "MENÚ INFORMAL";
        case 3:
            return "MENÚ FORMAL";
        case 4:
            return "BUFFET FRÍO Y CALIENTE";
        case 5:
            return "POSTRES";
        case 6:
            return "MESA DULCE";
        case 7:
            return "SERVICIOS OPCIONALES";
    }
}

for (let index = 0; index < 8; index++){

    productosHTML.innerHTML += `
        <article class="producto">
        <img src="./img/${"producto"+(index+1)}.webp" alt="producto ${index+1}" >
        <h3>${tituloproducto(index)}</h3>
        </article>
    `

}