
/* Time-transition photoslide */
var gallery = document.querySelector('.js-gallery')
var galleryItems = gallery.querySelectorAll('.js-gallery-item')

var slideCount = galleryItems.length
var slideWidth = galleryItems[0].getBoundingClientRect().width

// var slideInterval = setInterval(transitionSlide, 5000)
var currentSlide = 1

var sliderNav = document.querySelector('.js-nav-list')
sliderNav.addEventListener('click', transitionSlide)

function transitionSlide( e ) {
  e.preventDefault()

  var currentDirection = e.target.dataset.direction
  if (currentDirection === 'left' && currentSlide === 1) return
  if (currentDirection === 'right' && currentSlide === slideCount) return
  if ( currentDirection === 'left' ) {
    currentSlide--
  } else {
    currentSlide++
  }
  gallery.style.transform = "translateX(-" + slideWidth * (currentSlide - 1) + "px)"
  console.log( currentSlide )
}

// comments working with no saving
var form = document.querySelector('form')
console.log(form);
var button = document.querySelector('button')
var commentList = document.querySelector('ul')
console.log(toDoList);

function formEventHandler( event) {
  var formValue = form.querySelector('input').value
  var newLI = document.createElement('li')
  newLI.textContent = formValue
  newLI.setAttribute("class", "todo-list-item")
  console.log(newLI);
  commentList.appendChild(newLI)
  document.querySelector('input').value=''
}

button.addEventListener("click", formEventHandler)


/* Setup AJAX post to server DB */
