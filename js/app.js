const inpEl = document.querySelector('#input')
const submitButt = document.querySelector('#submit-button')
const resetButt = document.querySelector('#reset-button')
const listEl = document.querySelector('#todo-list')


submitButt.addEventListener('click', function() {
  const li = document.createElement('li')
  li.textContent = inpEl.value
  if (inpEl.value) {
    listEl.append(li)
    li.classList.add('tasks')
  }
  inpEl.value = null
})

resetButt.addEventListener('click', function() {
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild)
  }
  inpEl.value = null
})
