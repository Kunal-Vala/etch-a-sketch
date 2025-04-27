const container = document.querySelector("#container");


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

      divv.addEventListener('mouseover', () => {
        divv.style.backgroundColor = getRandomRGB();
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
  return `rgb(${r}, ${g}, ${b})`;
}
gridMaker(16);

