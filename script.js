localStorage.setItem("date", new Date())
const i = localStorage.getItem("date")

window.onload = function () {
  console.log(`This window loaded on ${i}`)
}
