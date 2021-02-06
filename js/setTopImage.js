function setTopImage() {

    const typeOfProduct = document.querySelector('h1');
    const productTopImage = document.querySelector('.productTopImage');

    switch (typeOfProduct.textContent) {
        case "Картофелеводство":
            productTopImage.style.background = 'url(../img/potato.jpg) 0 0/cover no-repeat';
            break;
        case "Зерновые культуры":
            productTopImage.style.background = 'url(../img/grainCrops.jpg) 0 0 /cover no-repeat ';
            break;
        case "Овощные культуры":
            productTopImage.style.background = 'url(../img/vegetable.jpg) 0 0 /cover no-repeat ';
            break;
        case "Кормопроизводство":
            productTopImage.style.background = 'url(../img/feedProduction.jpg) 0 0 /cover no-repeat ';
            break;
        case "Молочное скотоводство":
            productTopImage.style.background = 'url(../img/cows.jpg) 0 0 /cover no-repeat ';
            break;
        case "Семеноводство зерновых культур":
            productTopImage.style.background = 'url(../img/corn.jpg) 0 0 /cover no-repeat ';
            break;
        case "Семеноводство зернобобовых культур":
            productTopImage.style.background = 'url(../img/bobs.jpg) 0 0 /cover no-repeat ';
            break;
        case "Семеноводство крестоцветных культур":
            productTopImage.style.background = 'url(../img/cruciferous.jpg) 0 0 /cover no-repeat ';
            break;
        case "Семеноводство многолетних трав":
            productTopImage.style.background = 'url(../img/perennialHerbs.jpg) 0 0 /cover no-repeat ';
            break;
        case "Семеноводство льна масличного":
            productTopImage.style.background = 'url(../img/linen.jpg) 0 0 /cover no-repeat ';
            break;


    }
};
setTopImage();