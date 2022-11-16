function ShowSideNav(){
	console.log("Function called");
	document.getElementById("sidebar").style.right="0px";
	document.getElementById("SideNavButton").disabled=true;
	document.getElementById("boton-hamburguesa").style.opacity="0";	
	console.log("SideNav Deploid");	
}

function HideSideNav(){
	
	document.getElementById("sidebar").style.right="-250px";
	document.getElementById("SideNavButton").disabled=false;
	document.getElementById("boton-hamburguesa").style.opacity="1";	
	console.log("SideNav Hidden");
}

