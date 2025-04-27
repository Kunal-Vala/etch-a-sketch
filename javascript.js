const container = document.querySelector("#container");
const edit = document.querySelector("#edit");
const button = document.createElement('button');

function gridMaker(num){
  container.innerHTML = "";

  const containerWidth = container.offsetWidth;
  const squareSize = containerWidth/num;
  for(let i = 1;i<=num;i++){
    for(let j = 1;j<=num;j++){
      console.log(`${i},${j}`);
      let divv = document.createElement('div');
      divv.style.width = `${squareSize}px`;
      divv.style.height = `${squareSize}px`;
      
      divv.classList.add('divv-style');
      divv.style.backgroundColor = "rgb(255, 255, 255)"; // Start with black background
      divv.style.opacity = "0.1";
      divv.addEventListener('mouseover', () => {
        let currentOpacity = parseFloat(divv.style.opacity);
        if (currentOpacity < 1) {
          divv.style.backgroundColor = getRandomRGB();
          divv.style.opacity = (currentOpacity + 0.1).toFixed(1); // Increment opacity by 0.1
        }
      });
      container.appendChild(divv);
    }
    console.log(`End Of Line`);
  }
}



// function random_color(){
//   let arr=[];
//   for(let i=0;i<3;i++){
//     let random = Math.floor(Math.random() * 255);
//     arr.push(random);
//   }
// }


function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b})`;
}
gridMaker(16);

button.addEventListener('click',()=>{
  let message = prompt("Enter Size:",'16');
  if(message > 64){
    let ale = alert('Maximum 64');
  }
  else if(message == null){
    
  }
  else{
    gridMaker(message);

  }

});
button.classList.add('button-style');
button.textContent = 'Change Size';
edit.appendChild(button);


