alert('WELCOME');
function cal(){
	   var a= document.getElementById('enter1').value;
	   var b= document.getElementById('enter2').value;
	   var c= document.getElementById('ope').value;
	   var d;
	                  
	       if (c=='+') {
	              d=parseInt(a) + parseInt(b);
	                  }
	       if (c=='-') {
	              d=parseInt(a) - parseInt(b);
	                  }
	       if (c=='*') {
	              d=parseInt(a) * parseInt(b);
	                  }
	       if (c=='/') {
	              d=parseInt(a) / parseInt(b);
	                  }

	       document.getElementById('value').value= d;
	              }