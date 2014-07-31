var fs=require('fs');
var lines=fs.readFileSync('Hamlet.txt',"utf8");//.split(/[\r\n\s]/);
//var lines=fs.readFileSync('ALICEs ADVENTURES IN WONDERLAND.txt',"utf8");
var total=0;
var words=0;
lines=lines.replace(/[*?\[!\],-.'";:\(\)]/g," ").replace(/\s/g,"\n").split(/\n/);
//lines=lines.replace(/\s/g,"\n");
//lines=lines.split(/\n/);
//console.log(lines);
for(var i=0;i<lines.length;i++){
	if(lines[i].length>0){
		total+=lines[i].length;
		words+=1;
	}
}
console.log('total letters',total); //Hamlet:135071 Alice:107791
console.log('lines',words);         //Hamlet:32859  Alice:27356
console.log('avg',total/words);     //Hamlet:4.11   Alice:3.94