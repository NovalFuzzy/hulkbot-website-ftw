window.storage = localStorage

storage.setItem("date", new Date().getTime().array().length)
const i = storage.getItem("date")

window.onload(() => {
  console.log(`This window loaded on ${i}`)
})
