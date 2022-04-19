const toggleBtn = document.querySelector('.dropdown-toggle')
const list = document.querySelector('.dropdown-list')
const options = document.querySelectorAll('dropdown-option')

toggleBtn.addEventListener('click', function() {
    list.classList.toggle('hidden')
    toggleBtn.classList.toggle('on')
})

toggleBtn.addEventListener('blur', function() {
    list.classList.add('hidden')
    toggleBtn.classList.remove('on')
})

