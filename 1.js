// $.getJSON("https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan",function(data){
//  console.log(data);
// })

console.log('The first API program');
var btn =document.getElementsById("button");
function getData()
{
    url="https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan";
    btn = fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
    console.write(data);
}
getData();
