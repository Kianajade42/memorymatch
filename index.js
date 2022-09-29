

function fetchUsers(){
    return fetch('http://127.0.0.1:3000/users')
    .then(resp => resp.json())
    .then(json => renderUsers(json))
}

function renderUsers(user) {
  const main = document.getElementById('user-display')
  user.forEach(user => {
    const h2 = document.createElement('h2')
    h2.innerHTML = user.username
    main.appendChild(h2)
  })
}
function fetchGames(){
    return fetch('http://127.0.0.1:3000/games')
    .then(resp => resp.json())
    .then(json => renderGames(json))
    
}
function renderGames(game) {
  const main = document.getElementById('user-display')
  game.forEach(game=> {
    const h2 = document.createElement('h2')
    h2.innerHTML = game.score
    main.appendChild(h2)
  })
}

 
// function createUser() {
// fetch('http://127.0.0.1:3000/users', {
//   method: "POST",
//   body: JSON.stringify(formData),

// })
// .then(response => response.json()) 
// .then(json => console.log(json));

// }