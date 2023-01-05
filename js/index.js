// switch dark mode 
let switchMode = document.getElementById("switch-mode");
let darkmode = JSON.parse(localStorage.getItem('darkmode')) != null ? JSON.parse(localStorage.getItem('darkmode')) : true;
console.log(darkmode);

const handleSwitchClick = () => {
  darkmode = !darkmode;
  changeMode();
  localStorage.setItem('darkmode', darkmode);
  console.log("click");
}

switchMode.addEventListener('click', handleSwitchClick)

function changeMode(){
  console.log("changemode");
  if(darkmode === true){
    document.body.classList.add("dark-mode")
    switchMode.classList.add("active")
  }else{
    console.log("false");
    document.body.classList.remove("dark-mode")
    switchMode.classList.remove("active")
  }

}
changeMode();


// card functions
let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");
const hateButton = document.getElementById("hate-button");
const loveButton = document.getElementById("love-button");

const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

hateButton.addEventListener('click', handleHateClick)
loveButton.addEventListener('click', handleLoveClick)