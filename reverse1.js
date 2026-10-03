let str="Testleaf";
let arr=str.split("");
let reverse="";
for(let i=arr.length-1;i>=0;i--)
{
    reverse=reverse+arr.slice(i,i+1)[0];
}
console.log(reverse);