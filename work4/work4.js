document.write('<p>金字塔</p>')
let level=prompt('请输入金字塔的层数')
level=parseFloat(level)&&Number(level)
if(isNaN(level)){
    alert('金字塔的层数是数字')
}
for (let i=1;i<=level;i++){
    let blank=level-i;

for(let k=0;k<blank;k++){
   document.write('&nbsp;');
}
//打印星星
let star=i*2-1
for(let j=0;j<star;j++){
    document.write('*')
} 
document.write('<br/>')
}
let str='<table border=1>'
for(let i=1;i<10;i++){
    str+='<tr>'
    for(let d=1;d<=i;d++){
        str+='<td>'+d+'*'+i+'='+(d*i)+'</td>'
    }
    str+='</tr>'
}
str+='</table>'
document.getElementById('table').innerHTML=str
