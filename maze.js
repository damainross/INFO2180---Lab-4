 
 
// credits : Joevel Edwards (some help gotten from him) and  some ideas gotten from this same activity that was submitted by someone on github in 2014.
   
window.onload = function(){
	stat = document.getElementById('status'); //
	goal1= document.getElementById('end');
	goal1.onmouseover = winmessage;
	getstart = document.getElementById('start');
	left = document.getElementById("maze");
	left.onmouseleave = outside;
	getstart.onclick = restart;
	border = document.querySelectorAll('.boundary');
	for (var i = 0; i < border.length ; i++){
		border[i].onmouseover = crossborder;
	}
	
 }



function crossborder(){
    //console.log(testwin);
    //console.log(condition);
	if(!test1 && !test) { //
	
		test = true;
	borders = document.querySelectorAll('.boundary');
	  
        alert("You lose!");
        
	for (var i = 0; i < borders.length ; i++){ //
			borders[i].className += " youlose";
        }
    }
	}
 


function winmessage(){
	if(!test){ 
		test1 =true;
                alert("You win!");
		  
	}
}

function restart(){
	  
	border = document.querySelectorAll('.boundary');
	stat.innerHTML = "Move your mouse over S to begin";  
	for (var i = 0; i < border.length ; i++){
			border[i].className = "boundary";
	}
        test = false;  
	test1 = false;
}

function outside(){	
	if(!test1){
		crossborder();
	}
}