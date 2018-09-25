function *make(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

let it = make([1, 2, 3])
console.log(it.next())

function *pro() {
  yield new Promise((resolve, reject) => {
    return Promise.resolve(2)
  })
}

let gen = pro()
console.log(gen.next())
console.log(gen.next())
