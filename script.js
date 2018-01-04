localStorage.setItem("Dev1", "Hulk")
localStorage.setItem("Dev2", " RHG ")
localStorage.setItem("Dev3", " and NovalFuzzy")

const dev1 = localStorage.getItem("Dev1")
const dev2 = localStorage.getItem("Dev2")
const dev3 = localStorage.getItem("Dev3")

var Devs = [dev1 + " ", dev2 + " ", dev3 + " "]

window.onload = function () {
  console.log(`All Devs for this project are ${Devs}`)
}
