var fs=require('fs');
//var lines=fs.readFileSync('Hamlet.txt',"utf8");//.split(/[\r\n\s]/);
var lines=fs.readFileSync('ALICEs ADVENTURES IN WONDERLAND.txt',"utf8");
lines=lines.replace(/[*?\[!\],-.'";:\(\)]/g," ").replace(/\s/g,"\n").split(/\n/);
var letters=0;
var words=0;
var arr={};
for(var i=0;i<lines.length;i++){
	if(lines[i].length>0){
		letters+=lines[i].length;
		words++;
	}
	for(var j=1;j<lines[i].length;j++){
		if(j==lines[i].length-1){
			if(!arr[j]){
				arr[j]=1;
			}else{
				arr[j]+=1;
			}
		}
	}
	var sorted=[];
	for(var m in arr){
		sorted.push([m,arr[m]]);
	}
	var simple=[];
	for(var k=0;k<sorted.length;k++){
		simple.push(sorted[k][0]+"-letters: "+sorted[k][1]+" times");
	}
}
console.log('total letters: ',letters,' total lines: ',words,' avg: ',letters/words);
//console.log(JSON.stringify(arr));
console.log(simple.join("\n"));


//Hamlet:135071 Alice:107791	
//Hamlet:32859  Alice:27356
//Hamlet:4.11   Alice:3.94
