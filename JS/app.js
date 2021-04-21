let images = document.querySelectorAll(".shop-item-image");
let cart_items = document.querySelectorAll("cart-row");
let num = 0

for (image of images) {
    num += 1;
    image.src = `Images/Album${num}.png`;
}

const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

let cart_status = []
images.forEach(item => {
    item.addEventListener('click', (ev) => {
        let selected = ev.currentTarget
        console.log(selected)
        let cart_selected = selected.getAttribute('id');
        console.log(cart_selected)
        for (album of albums) {
            let { name, price, inCart } = album;
            album.inCart = true
            if (cart_selected === name){
                cart_status.push(album)
                console.log(cart_status)
            }
        }
    })
});