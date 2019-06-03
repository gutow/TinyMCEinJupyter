function toWYSIWYG() {
	if(!document.getElementById('toWYSIWYGBtn')) {
		var newselect=document.createElement('button');
		newselect.id = 'toWYSIWYGBtn';
		newselect.innerHTML = "toWYSIWYG";
		newselect.onclick = function() {
		var currentcell = $(Jupyter.notebook.get_selected_cell());
	 	var inner_cell = $('<div/>').addClass('inner_cell');
	 	currentcell.append(inner_cell);
		//currentcell.celltoolbar = new celltoolbar.CellToolbar({
			//cell: currentcell, 
        	//notebook: this.notebook});
        //inner_cell.append(currentcell.celltoolbar.element);
        var input_area = $('<div/>').addClass('input_area'); 
        inner_cell.append(input_area)
        inner_cell.innerHTML = "Cick here to edit";
        inner_cell.className += " rendered";
       	inner_cell.className += " WYSIWYG";
       	tinymce.init({
       		selector: 'div.WYSIWYG',
       		inline: true, //inline mode covers up text above rather than pushing stuff down.
       		//width: 600,
       		//height: 300,
       		toolbar: "align format forecolor backcolor",
       		});
       	}
	document.getElementById('maintoolbar-container').appendChild(newselect);
	}

}
toWYSIWYG();
tinymce.init({
  selector: 'div.WYSIWYG',
  inline: true, //inline mode covers up text above rather than pushing stuff down.
  //width: 600,
  //height: 300,
  toolbar: "align format forecolor backcolor",
  });

function removeWYSIWYG() {
	var button = document.getElementById('toWYSIWYGBtn');
	button.parentNode.removeChild(button);
}