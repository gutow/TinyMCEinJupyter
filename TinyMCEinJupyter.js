//TinyMCE in Jupyter utilities
//Jonathan Gutow <jgutow@new.rr.com>
//May 2019
//License GPL-V3+

//Cell to WYSIWYG HTML Editor button
function createWYSIWYGButton(){
    if (!document.getElementById('toWYSIWGbut')){
        var WYSIWYGBut=document.createElement('button');
        WYSIWYGBut.id='toWYSIWGbut';
        WYSIWYGBut.onclick = selectedcelltoWYSIWYG();
    }
}

function selectedcelltoWYSIWYG(){
    //find the currently active cell
    var currentcell=Jupyter.notebook.get_selected_cell();
    
}