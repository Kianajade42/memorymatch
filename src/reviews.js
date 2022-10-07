// window.addEventListener('DOMContentLoaded', e => {
//     e.preventDefault()
  
 
// }) 

 function renderComments(){
    console.log(reviews)
 const reviews = document.getElementById("comments")
  comments.forEach(comment => {
    const h2 = document.createElement('h2')
    h2.innerHTML = comment.comment
    reviews.appendChild(h2)
  })
}
  