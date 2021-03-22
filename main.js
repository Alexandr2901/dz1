postData({
    date: '3 июля 2020 г.',
    temperature: '-70,7 ° F',
    windspeed: '11,5 миль/ч',
    pressure: '766,9  ПА',
}).then(() => {
    addCarts()
    document.querySelector('.overlay-loader').style.display = 'none'
})