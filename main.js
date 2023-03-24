function findInp(){
			 let a=prompt("enter a time 0-23");
			 if(a>=6 && a<12){
				 document.getElementById("time").innerHTML=a+" "+"AM"
			 }
			 else if(a>=12 && a<=18){
			document.getElementById("time").innerHTML=a+" "+"PM"
			 }
			 else if(a>=0 && a<6 || a>18 && a<=23){
				 document.getElementById("time").innerHTML=a+" "+"night"
			 }
			 else{
				console.log("enter a crt time");
			 }
		}
		findInp();
		
		
		
		
		
		//Time 2
		
			 y=prompt("enter time like hh:mm:ss am/pm");
			 if(y.indexOf("AM")>=8 || y.indexOf("am")>=8){
			 if(y[0]+y[2]+y[5]>=0600 || y[0]+y[3]+y[6]>=0600 && y[0]+y[2]+y[5]<=900 || y[0]+y[1]+y[3]+y[6]<1200){
				 console.log("Morning");
			 }
			 else{
				 console.log("Night 1");
			 }
		}
		else{
			 if(y[0]+y[1]+y[3]+y[6]>=1200 && y[0]+y[1]+y[3]+y[6]<=1800){
				console.log("Afternoon");
			 }
			 else{
				 console.log("Night");
			 }
		}
		