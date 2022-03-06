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

let init = () =>
{
	bars = document.querySelector( ".bars" );
	x = document.querySelector( ".x" );
	menu = document.querySelector( ".v-menu" );

	//css klsa daje display none
	//css klase dodelim display block
	//
	//element.style.display -> ""

	menu.style.display = "none";
	bars.style.display = "block";
	x.style.display = "none";

	bars.addEventListener( "click", toggleMenu );
	x.addEventListener( "click", toggleMenu );
}

document.addEventListener( "DOMContentLoaded", init );
