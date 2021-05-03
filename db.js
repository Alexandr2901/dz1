// json-server --watch db.js --port 3004

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
  for (let i = 0; i < 100; i++) {
    data.products.push({
      name: 'test name ' + i,
      price: i * 1000,
      categoryId: i % 2 + 1
    })
  }
  // for (let i = 0; i < 100; i++) {
  //   let randomText = 'This is random unique text ' + i + ' '
  //   randomText = randomText.repeat(100)
  //   data.posts.push(
  //     {
  //       id: i,
  //       author: `user${i}`,
  //       title: `title${i}`,
  //       text: randomText
  //     })
  //   for (let j = 0; j < 10; j++) {
  //     let randomText = 'comment with id ' + (i * 10 + j) + ' on post ' + i + ' '
  //     randomText = randomText.repeat(10)
  //     data.comments.push(
  //       {
  //         id: i * 10 + j,
  //         author: `user${i + 1}`,
  //         text: randomText,
  //         postId: i
  //       })
  //   }
  // }
  return data
}
