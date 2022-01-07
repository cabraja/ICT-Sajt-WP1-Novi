// Slideshow

let main = document.getElementById("main");

const items = [
    {
    name: "Mitelbruh Lager",
    price: 14.99,
    alcohol: 5,
    size: 0.5,
    img: "https://dilemma.rs/wp-content/uploads/2020/04/Dilemma-png-1722-360x540.png",
    rating: 4
    },
    {
    name: "Nirvana IPA",
    price: 12.99,
    alcohol: 7,
    size: 0.5,
    img: "https://dilemma.rs/wp-content/uploads/2020/06/Dilemma-png-nirvana-360x540.png",
    rating: 4.3
    },
    {
    name: "Indian Pale Ale",
    price: 16.99,
    alcohol: 6,
    size: 0.5,
    img: "https://dilemma.rs/wp-content/uploads/2020/04/Dilemma-png-IPA-360x540.png",
    rating: 4.8
    },
    {
    name: "Black IPA",
    price: 19.99,
    alcohol: 11,
    size: 0.5,
    img: "https://dilemma.rs/wp-content/uploads/2020/04/Dilemma-png-black-ipa-683x1024.png",
    rating: 3.9
    },
    {
    name: "Winter ALE",
    price: 22.99,
    alcohol: 12,
    size: 0.3,
    img: "https://dilemma.rs/wp-content/uploads/2020/12/Dilemma-png-winter-360x540.png",
    rating: 4.1
    },
    {
    name: "Roggenbier IPA",
    price: 17.99,
    alcohol: 4,
    size: 0.3,
    img: "https://dilemma.rs/wp-content/uploads/2021/01/Dilemma-png-roggenbier-1-360x540.png",
    rating: 4.8
    },
]

// Displaying data

items.forEach(item => {
    let article = document.createElement("article");
    article.innerHTML = `
    <img src=${item.img} alt=${item.name}/>
    <h4>${item.name}</h4>
    <h5>Alcohol: ${item.alcohol}% | Size: ${item.size}</h5>
    <h6>${item.rating} / 5 <span>&#9733;</span></h6>
    `;

    main.appendChild(article);
});