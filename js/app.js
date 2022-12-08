const inpEl = document.querySelector('#input')
const submitButt = document.querySelector('#submit-button')
const resetButt = document.querySelector('#reset-button')
const listEl = document.querySelector('#todo-list')
const firstTask = document.querySelector('listEl.firstChild')


submitButt.addEventListener('click', function() {
  const li = document.createElement('li')
  li.textContent = inpEl.value
  if (inpEl.value) {
    listEl.append(li)
  }
  inpEl.value = null
})

listEl.addEventListener('click', function(evt) {
  evt.target.remove()
})

resetButt.addEventListener('click', function() {
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild)
  }
  inpEl.value = null
})
