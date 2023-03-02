console.log('hello world');
let message = document.querySelector('#message')
let addMovie =(event)=>{
  event.preventDefault()
  let inputField = document.querySelector('input')
  let movie = document.createElement('li')
  let movieTitle = document.createElement('span')
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'X'
  deleteBtn.addEventListener('click', deleteMovie)
  movieTitle.textContent = inputField.value
  movieTitle.addEventListener('click', crossOffMovie)
  movie.appendChild(movieTitle)
  movie.appendChild(deleteBtn)
  document.querySelector('ul').appendChild(movie)
  inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

let deleteMovie =(event)=>{
  event.target.parentNode.remove()
  message.textContent = event.target.parentNode.childNodes[0].textContent + ' Deleted!'
  revealMessage()
}

let crossOffMovie =(event)=>{
  event.target.classList.toggle('checked')
  if (event.target.classList.contains('checked')) {
    message.textContent = `${event.target.textContent} watched!`
  }else{
    message.textContent = `${event.target.textContent} added back!`
  }
  revealMessage()
}

let revealMessage =()=>{
  message.classList.remove('hide')
  let timeOut = setTimeout(()=>{
    message.classList.add('hide')
  }, 1000)
}


