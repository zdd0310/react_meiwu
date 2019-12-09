function setRem(size){
    const html=document.getElementsByTagName('html')[0];
    const clientW=document.documentElement.clientWidth||document.body.clientWidth;
    html.style.fontSize=(clientW/size*100*2)+'px';
}
window.onload=function(){
    setRem(750);
}
window.onresize=function(){
    setRem(750);
}