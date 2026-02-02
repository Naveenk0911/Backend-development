exports.capitalize=function(str){
    return str.toUpperCase();
}
exports.reverse=function(str){
    let ans="";
    for(let i=str.length-1;i>=0;i--)
    {
        ans+=str.charAt(i);
    }
    return ans;
}
exports.vowels=function(str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i)=='a'||str.charAt(i)=='A'||str.charAt(i)=='e'||str.charAt(i)=='E'||str.charAt(i)=='i'||str.charAt(i)=='I'||str.charAt(i)=='o'||str.charAt(i)=='O'||str.charAt(i)=='U'||str.charAt(i)=='u'){
            count++;
        }
    }
    return count;
}