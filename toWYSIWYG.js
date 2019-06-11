function toWYSIWYG() {
	if(!document.getElementById('toWYSIWYGBtn')) {
		var newselect=document.createElement('button');
		newselect.id = 'toWYSIWYGBtn';
		newselect.innerHTML = "toWYSIWYG";
		newselect.onclick = function() {
	currentcell = Jupyter.notebook.get_selected_cell();
	var inner_cell = currentcell.inner_cell[0];
	inner_cell.innerHTML="";
	var input_area=document.createElement('div');
	inner_cell.appendChild(input_area);
	var WYSIWYG=document.createElement('div');
	input_area.appendChild(WYSIWYG);
	WYSIWYG.innerHTML = "Cick here to edit";
	input_area.className += " input_area"
	WYSIWYG.className += " WYSIWYG";
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