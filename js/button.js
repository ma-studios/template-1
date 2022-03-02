let bars;
let x;
let menu;

let toggle = () =>
{
  if(bars.style.display === "block" || bars.style.display === "")
  {
    bars.style.display = "none";
  }
  else
  {
    bars.style.display = "block";
  }

  if(menu.style.display === "block")
  {
    menu.style.display = "none";
  }
  else
  {
    menu.style.display = "block";
  }

  if(x.style.display === "block")
  {
    x.style.display = "none";
  }
  else
  {
    x.style.display = "block";
  }
}

let init = () =>
{
	bars = document.querySelector( ".bars" );
	x = document.querySelector( ".x" );
	menu = document.querySelector( ".menu" );

  bars.addEventListener("click", toggle);
  x.addEventListener("click", toggle);

	console.log( "1" );
}

document.addEventListener( "DOMContentLoaded", init );
