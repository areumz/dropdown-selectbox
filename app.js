const toggleBtn = document.querySelector('.dropdown-toggle')
const list = document.querySelector('.dropdown-list')
const python = document.querySelector('.python')
const java = document.querySelector('.java')
const js = document.querySelector('.js')
const csharp = document.querySelector('.csharp')
const c = document.querySelector('.c')

toggleBtn.addEventListener('click', function() {
    list.classList.toggle('hidden')
    toggleBtn.classList.toggle('on')
})

toggleBtn.addEventListener('blur', function() {
    list.classList.add('hidden')
    toggleBtn.classList.remove('on')
})

const langArr = [python, java, js, csharp, c];

langArr.forEach((item)=>{
    item.addEventListener('mousedown', (event)=>{
        toggleBtn.textContent = event.target.textContent;
    })
})

