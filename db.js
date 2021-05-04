// json-server --watch db.js --port 3004
// json-server --watch db.js

module.exports = () => {
  const data = {
    products: [],
    comments: [],
    categories: []
  }
  data.categories.push({
    id: 1,
    name: 'рубашки'
  })
  data.categories.push({
    id: 2,
    name: 'футболки'
  })
  const specification = {
    gender: 'мужской',
    color: 'красный',
    material: 'хлопок',
    type: 'футболка',
    season: 'лето',
    vendorCode: '1110151050',
    producingCountry: 'Индонезия'

  }
  for (let i = 0; i < 100; i++) {
    data.products.push({
      id: i,
      brand: 'test name ' + i,
      price: (i + 1) * 1000,
      categoryId: i % 2 + 1,
      description: 'this is description ' + i,
      discount: (i % 6) * 10,
      specification: specification,
      url: 'https://storage-cdn5.gloria-jeans.ru/medias/BKT005690-1-02-300Wx300H.jpg?context=bWFzdGVyfHByb2R1Y3R8NzYwMnxpbWFnZS9qcGVnfGgwOC9oYTIvOTI0NjY4MDgwOTUwMi9CS1QwMDU2OTAtMS0wMl8zMDBXeDMwMEguanBnfGI0MjQ3YmQzMDZiYzQ0NDE4N2EwNjdmMDE0NTFiZWQyNTBiYjM4ZTk5ZjcxYmI3OTgzYjIzM2YxZjNkNDU0ZWQ'
    })
  }
  return data
}
