//TODO
//@media > 900px -> stil h-menu
//@media < 900px -> stil v-menu
//js ako je ekran manji od 900 init
//ako nije nista
//eventListener za promenu velicine ekrana

let bars;
let x;
let menu;

let toggleDisplay = node =>
{
	if( node.style.display === "none" )
	{
		node.style.display = "block";
	}
	else
	{
		node.style.display = "none";
	}
}

let toggleMenu = () => 
{
	toggleDisplay( bars );
	toggleDisplay( x );
	toggleDisplay( menu );
}

let onWindowResize = () =>
{
	if( window.innerWidth < 1100 )
	{
		menu.style.display = "none";
		bars.style.display = "block";
		x.style.display = "none";
	}
	else
	{
		menu.style.display = "flex";
	}
}

let init = () =>
{
	bars = document.querySelector( ".bars" );
	x = document.querySelector( ".x" );
	menu = document.querySelector( ".menu" );

	console.log( menu, bars, x );

	if( window.innerWidth < 1100 )
	{
		console.log( "<1100" );
		menu.style.display = "none";
		bars.style.display = "block";
		x.style.display = "none";
	}
	else
	{
		menu.style.display = "flex";
	}

	bars.addEventListener( "click", toggleMenu );
	x.addEventListener( "click", toggleMenu );
	window.addEventListener( "resize", onWindowResize );
}

document.addEventListener( "DOMContentLoaded", init );

