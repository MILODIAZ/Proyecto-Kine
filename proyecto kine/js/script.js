const onClick = (event) => {
  console.log(event.srcElement.id);
  var ID=event.srcElement.id;
  var sideBarState=document.getElementById("sidebar").style.right;
  if(((ID!=="sidebar")&&(ID!=="SideBarLogo")&&(ID!=="boton-hamburguesa")) && (sideBarState=="0px")){
		HideSideNav();
		console.log("Hidden Worked");
	}
}
window.addEventListener('click', onClick);

function ShowSideNav(){
	console.log("Function called");
	document.getElementById("sidebar").style.right="0px";
	document.getElementById("sidebar").style.width="250px";
	document.getElementById("SideNavButton").disabled=true;
	document.getElementById("boton-hamburguesa").style.opacity="0";	
	console.log("SideNav Deploid");	
}

function HideSideNav(){
	
	document.getElementById("sidebar").style.right="-250px";
	document.getElementById("sidebar").style.width="0px";
	document.getElementById("SideNavButton").disabled=false;
	document.getElementById("boton-hamburguesa").style.opacity="1";	
	console.log("SideNav Hidden");
}

/*function HideSideNavWithoutButton(element){
	console.log("Function called");
	var elementID=this.id;
	console.log(this);
	var sideBarState=document.getElementById("sidebar").style.right;
	if((elementID=="bio") && (sideBarState=="0px")){
		HideSideNav();
		console.log("Hidden Worked");
	}
}*/

