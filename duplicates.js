let num=[56,78,90,23,90,76,43,56];
for(let i=0;i<num.length;i++)
{
    let duplicate=false;
    for(let j=i+1;j<num.length;j++)
    {
        if(num[i]===num[j])
        {
            duplicate=true;
        }
    }

if(duplicate)
{
    console.log(num[i]);
}
}