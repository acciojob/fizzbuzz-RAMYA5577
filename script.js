//your JS code here. If required.
let n=20;
let array=[];
for(let i=1;i<=n;i++){
	if(i%3==0 && i%5==0){
		array.push("FizzBuzz");
	}
	else if(i%3==0){
		array.push("Fizz");
	}
	else if(i%5==0){
		array.push("Buzz");
	}
	else
		array.push(i);
}
alert(array);
