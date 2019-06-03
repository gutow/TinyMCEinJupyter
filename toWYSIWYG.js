function toWYSIWYG() {
	if(!document.getElementById('toWYSIWYGBtn')) {
		var newselect=document.createElement('button');
		newselect.id = 'toWYSIWYGBtn';
		newselect.innerHTML = "toWYSIWYG";
		newselect.onclick = function() {
	currentcell = Jupyter.notebook.get_selected_cell();
	var input_area = currentcell.inner_cell[0];
	input_area.innerHTML = "Cick here to edit";
	input_area.className += " rendered";
	input_area.className += " WYSIWYG";
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