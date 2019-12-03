//设置秒杀结束的时间为15秒后
let endseconds=new Date().getTime()+15*1000;
//声明变量保存剩余的时间
let d=h=m=s=0;
//设置定时器，实现秒杀效果
let id=setInterval(seckill,1000);
function seckill(){
    let nowtime=new Date();//获取当前时间
     //获取时间差，单位秒
     let remaining=parseInt((endseconds-nowtime.getTime())/1000);
     //判断秒杀是否过期
     if(remaining>0){
         d=parseInt(remaining/86400);
         h=parseInt((remaining/3600)%24);
         m=parseInt((remaining/60)%60);
         s=parseInt(remaining%60);
         //统一利用两位数表示剩余的天，小时，分钟，秒
         d=d<10?'0'+d:d;
         h=h<10?'0'+h:h;
         m=m<10?'0'+m:m;
         s=s<10?'0'+s:s;
        }else{
            clearInterval(id);
            d=h=m=s='00';
        }
        document.getElementById('d').innerHTML=d+'天';
        document.getElementById('h').innerHTML=h+'时';
        document.getElementById('m').innerHTML=m+'分';
        document.getElementById('s').innerHTML=s+'秒';

}