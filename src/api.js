
// const URL = "http://127.0.0.1:3000"


    function callUsers(){
    return fetch('http://127.0.0.1:3000/users')
    .then(res => res.json())
    .then(json => renderUsers(json))
}


 function createUser(username){
        return fetch('http://127.0.0.1:3000/users',{
        method: 'POST',
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
         },
        body: JSON.stringify(username)
    })
}


   function  callComments() {
    return fetch('http://127.0.0.1:3000/comments')
    .then(resp => resp.json())
    .then(json => renderComments(json))
}


    function  createComment(rrr, rrrr){
    return fetch('http://127.0.0.1:3000/comments',{
        method: 'POST',
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"},
        body: JSON.stringify(rrr, rrrr)
    })
    .then(res => res.json())
}

    function  callGames() {
  return fetch('http://127.0.0.1:3000/games')
    .then(resp => resp.json())
    .then(json => renderGames(json))
  
}
    function createGame(result){
    return fetch('http://127.0.0.1:3000/games',{
        method: 'POST',
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"},
        body: JSON.stringify(result)
    })
}
function renderUsers(users){
 const usersshow = document.getElementById("user-display")
  users.forEach(user => {
    const h2 = document.createElement('h2')
    h2.innerHTML = user.username
    usersshow.appendChild(h2)
 

  })
}

function renderGames(games){
    const display = document.getElementById("user-display")
  games.forEach(game => {
    const h2 = document.createElement('h2')
    h2.innerHTML = game.score
    display.appendChild(h2)

  })
}
 function renderComments(comments){
 const reviews = document.getElementById("comments")
  comments.forEach(comment => {
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    h2.innerHTML = comment.comment
    h3.innerHTML = comment.username
    reviews.appendChild(h2)
    reviews.appendChild(h3)

  })
}
