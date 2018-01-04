var Devs = [localStorage.getItem("Dev1"), localStorage.getItem("Dev2"), localStorage.getItem("Dev3")]

localStorage.setItem("Dev1", "Hulk")
localStorage.setItem("Dev2", "RHG")
localStorage.setItem("Dev3", "NovalFuzzy")

window.onload = function () {
  console.log(`All Devs for this project are ${Devs}`)
}
