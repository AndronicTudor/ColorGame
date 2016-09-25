//radio button
b_c1 = '#c1';
b_c2 = '#c2';
b_c3 = '#c3';

scr = '#scor';
//

function draw(color)
{
	var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      //$('#id').text('text');

      context.beginPath();
      context.rect(188, 50, 200, 100);
      context.fillStyle = color;
      context.fill();
      context.stroke();
}

function scor(scor)
{

	var max_scr = '25';

	$('input[name=b_c1]:checked', 'scor').val()


	$(scr).text('Scor: ' + scor + '/' + max_scr);
	$(b_c1).text('alb');

}


$(document).ready(function() {
      
	// $(b_r3).next().text('negru');

	draw('blue');

	var k=0;
	scor(k);

		
	$(function(){
    $("#btn").click(function(){      
        var val=($('input[name=c1]').val());
        	if(val == '1')
        	{
	 			k++;
	 			scor(k)
        	}
        $('input[type="radio"]:checked').prop('checked',false);
    });
 });



	 

	


});