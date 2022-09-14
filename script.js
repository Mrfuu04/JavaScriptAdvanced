const goods = [
    {title: 'Shirt', price: 150, img: 'img/green_shirt.jpg'},
    {title: 'Socks', price: 50, img: 'img/green_shirt.jpg'},
    {title: 'Jacket', price: 350, img: 'img/green_shirt.jpg'},
    {title: 'Shoes', price: 250, img: 'img/green_shirt.jpg'},
];
const renderGoodsItem = (item = {}) => {
    return `<div class="goods-item">
            <h3>${item.title}</h3>
            <p>Цена ${item.price}</p>
            <img src="${item.img}"/>
            </div>`;
};
const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);