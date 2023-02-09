/*const userCardTemplate = doucment.querySelector("[data-user-template]")
const userCardContainer = doucment.querySelector("[data-user-cards-container]")
const searchInput = doucment.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://www.myjsons.com/v/788d717")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card= userCardTemplate.content.cloneNode(true).children[0]
            const nameofgame = card.querySelector("[data-nameofgame]")
            nameofgame.textContent = user.name
            userCardContainer.append(card)
            return { name: user.name, element: card}
        })
    })*/
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://www.myjsons.com/v/788d717")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      header.textContent = user.name
      userCardContainer.append(card)
      return { name: user.name, element: card }
    })
  })