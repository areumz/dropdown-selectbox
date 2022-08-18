# dropdown-selectbox

## 미리보기
![image](https://github.com/iRRPL-AR/dropdown-selectbox/blob/gh-pages/preview.gif)   
[드롭다운 구현](https://areumz.github.io/dropdown-selectbox/)

## 문제해결
* **리스트 클릭 시 발생하는 이벤트 객체를 콘솔에 찍어보려 했는데 계속 안됨**
    * 기존에 html, css만 했을 때 추가해둔 class hidden 때문에 클릭시 계속 사라지기만함   
    지우니 해결

* **리스트 클릭 시, 텍스트가 담기기 전에 사라지는 현상**
    * 처음에는 접근을 잘못해서   
    
      ```     
      toggleBtn.addEventListener('click', function(event) {
         list.classList.toggle('hidden')
         toggleBtn.classList.toggle('on')
         console.log(event)
    
      })
      ```

    여기에서 문제가 생긴줄 알았음   
    
    * 캡처링, 버블링은 해당 요소를 중심으로 위에서 요소 순서로 전파되는지, 요소에서 위로 전파되는지   
    이게 핵심인데 착각해서 이 이벤트가 그 밑에 ul 태그까지 건드리는건가 싶어서   
    이벤트 전파 방지 메서드를 써봤으나 당연히 안됨

    * 문제는
      ```
      toggleBtn.addEventListener('blur', function(event) {
         list.classList.add('hidden')
         toggleBtn.classList.remove('on')
      })
      ```

    이거였음

    * blur 이벤트 : 엘리먼트의 포커스가 해제되었을 때 발생 (MDN 문서)   
    즉, 빈 화면을 누를 때도 blur 이벤트가 발동하지만 토글 버튼이 아닌 그 밑에   
    리스트를 클릭해도 포커스가 해제되어 발생한 문제

      ```
      Replace your click event with (mousedown). Mousedown event is called before blur.
      (출처 : 스택오버플로우 https://stackoverflow.com/questions/39439115/how-to-execute-click-function-before-the-blur-function)
      (출처 : 블로그 https://iborymagic.tistory.com/120)
      ```

    blur 이벤트보다 먼저 발생하는 mousedown 으로 바꿔주니 해결

    * 그리고 각 요소에 또 한번 리스트를 닫는 이벤트를 달아줄 필요가 없어짐   
    (mousedown 이벤트 후 기존의 blur 이벤트 작동하면서 사라짐)


* **중복된 코드 정리**
```
 python.addEventListener('mousedown', (event) => {
     toggleBtn.innerText = event.target.innerText;
 })

 java.addEventListener('mousedown', (event) => {
     toggleBtn.innerText = event.target.innerText;
    
 })
```

=>   

```
const langArr = [python, java, js, csharp, c];

langArr.forEach((item)=>{
    item.addEventListener('mousedown', (event)=>{
        toggleBtn.innerText = event.target.innerText;
    })
})
```

* **성능적인 측면에서 innerText 대신 textContent 사용**

* **리스트마다 글자 길이가 달라서 hover 했을 때 일부 항목이 덜컹거리는 문제**
    * padding을 일정하게 주었는데, width가 빠져있음   
    그런데 hover했을 때는 width를 주니까 그 차이가 심한 것들이 덜컹 거리며 불편해짐   
    width 똑같이 맞춰줘서 해결   
    글자 정렬 안 맞아서 text-align: left; 추가

* **(+) 추가**
    `visibility: hidden;` 으로 처리했는데, 이것은 영역을 차지하기 때문에 `display: none;` 으로 수정하기
