let currentIndex = 0;
let currentGallery = '';

// Arrays de imagens para cada galeria
const galleries = {
    escolar: [
        "images/escolar-bus.jpg",
        "images/escolar-lateral.jpg",
        "images/escolares.jpg"
    ],
    executiva: [
        "images/Executiva-aberta.jpg",
        "images/Executiva-frente.jpg",
        "images/Executiva-tras.jpg"
    ]
};

// Função para abrir o modal e exibir a imagem da galeria correspondente
function openModal(index, galleryName) {
    currentIndex = index;
    currentGallery = galleryName;
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = galleries[currentGallery][currentIndex];
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Função para mudar a imagem com navegação entre anterior e próxima
function changeImage(direction) {
    const gallery = galleries[currentGallery];
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = gallery.length - 1;
    } else if (currentIndex >= gallery.length) {
        currentIndex = 0;
    }

    document.getElementById("modalImage").src = gallery[currentIndex];
}
