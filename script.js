localStorage.setItem("date", new Date().getTime().array().length)
const i = localStorage.getItem("date")

window.onload = function () {
  console.log(`This window loaded on ${i}`)
}
