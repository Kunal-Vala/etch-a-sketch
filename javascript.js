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
      container.appendChild(divv);
    }
    console.log(`End Of Line`);
  }
}


gridMaker(16);