const one = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve()
    }, 3000)
})

}
const two = () => {
  console.log(2);
}

one().then(() => {
  two()
})