/* LOGICA CAROUSEL */
const carouselContainer = document.querySelector(".carousel__container");

const getImg = async () => {
    try {
    const res = await axios.get("img.json");
    const data = res.data;
    const containerImgHTML = document.createDocumentFragment();
    for(let i = 0; i < 4; i++) {
        const image = data.imagen[i];
        if (!image) break;
        const img = document.createElement("IMG");
        img.alt = image.titulo;
        img.src = image.url;
        img.classList.add("image")
        containerImgHTML.appendChild(img);
    }
    carouselContainer.appendChild(containerImgHTML);
}catch(e) {console.error("Error durante la carga: ");}
}

getImg();