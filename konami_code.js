const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0
let progress = [...codes]

function init() {
  document.body.addEventListener('keydown',function(e){
   
    if (e.key === progress[0]){
      progress.shift()
      console.log(progress[0])
      if (progress.length === 0){
        alert("Contra!");
        progress = [...codes]
        }
    }
    else{
      progress = [...codes]
    }
    
  })
}
