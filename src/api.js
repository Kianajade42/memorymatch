
// const URL = "http://127.0.0.1:3000"


    function callUsers(){
    return fetch('http://127.0.0.1:3000/users')
    .then(res => res.json())
    .then(json => console.log(json))
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
    // .then(res => res.json())
}


   function  callComments() {
    return fetch('http://127.0.0.1:3000/comments')
    .then(resp => resp.json())
    .then(json => renderComments(json))
}
 function renderComments(comments){
 const reviews = document.getElementById("comments")
//  const userreviews = document.getElementById("user-comments")
  comments.forEach(comment => {
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    h2.innerHTML = comment.comment
    h3.innerHTML = comment.username
    reviews.appendChild(h2)
    reviews.appendChild(h3)

  })
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
    .then(json => console.log(json))
  
   
    
}
