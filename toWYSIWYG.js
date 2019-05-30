function toWYSIWYG() {
	if(!document.getElementById('toWYSIWYGBtn')) {
		var newselect=document.createElement('button');
		newselect.id = 'toWYSIWYGBtn';
		newselect.innerHTML = "toWYSIWYG";
		newselect.onclick = function() {
	currentcell = Jupyter.notebook.get_selected_cell();
	alert(currentcell);
	var input_area = currentcell.inner_cell[0];
	alert(input_area);
	input_area.innerHTML = "Cick here to edit";
	input_area.className += " rendered";
	input_area.className += " WYSIWYG";
	}
	document.getElementById('maintoolbar-container').appendChild(newselect);
	}
	
}
toWYSIWYG();

function removeWYSIWYG() {
	var button = document.getElementById('toWYSIWYGBtn');
	button.parentNode.removeChild(button);
}