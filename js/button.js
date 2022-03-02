let bars;
let x;
let menu;

let onBarsClick = () => 
{
	bars.classList.add( "invis" );
	x.classList.add( "vis" );
	menu.classList.add( "vis" );
}

let onXClick = () =>
{
	bars.classList.remove( "vis" )
	x.classList.remove( "vis" );
	menu.remove( "vis" );
}

let init = () =>
{
	bars = document.querySelector( ".bars" );
	x = document.querySelector( ".x" );
	menu = document.querySelector( ".menu" );

	console.log( menu );

	bars.addEventListener( "click", onBarsClick );
	x.addEventListener( "click", onXClick );

	console.log( "1" );
}

document.addEventListener( "DOMContentLoaded", init );
