const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["red","blue",'orange',"yellow","purple","aqua","skyblue","pink","green","gold"]
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});