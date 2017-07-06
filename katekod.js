		function getWeek(date) {
  		var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  		return days[date.getDay()];
		}

		function Currenttime(){
		var now = new  Date();
		alert( getWeek(now)+ ', ' +now.getDate()+ '.' +now.getMonth()+ '.' 
		+now.getFullYear()+ ', ' +now.getHours()+ ' ч. ' + now.getMinutes()+ ' мин.' );
	    }
        
		function Convert(){

	    var i= parseInt(document.getElementById("in").value);
	    var Cel = parseInt((5/9)*(i-32));
	    var Far = parseInt((9/5)*(i+32));
	    if (  document.getElementById("s1").checked )  { document.getElementById("result").innerHTML = Far ;}  
	    else{  document.getElementById("result").innerHTML = Cel ; }

	    }

		function Plus() {
			document.getElementById("Result").innerHTML = parseInt(document.getElementById("x").value) + parseInt(document.getElementById("y").value)
		}

		function Minus() {
			document.getElementById("Result").innerHTML = parseInt(document.getElementById("x").value) - parseInt(document.getElementById("y").value)
		}

		function Multiply() {
			document.getElementById("Result").innerHTML = parseInt(document.getElementById("x").value) * parseInt(document.getElementById("y").value)
		}

		function Division() {
			document.getElementById("Result").innerHTML = parseInt(document.getElementById("x").value) / parseInt(document.getElementById("y").value)
		}


