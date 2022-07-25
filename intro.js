const sidebar = document.getElementById("navtab");
const open = document.getElementById("menu");
const close = document.getElementById("close");
const btn = document.getElementById("navbtn");
const feature= document.getElementById("feature");
const company = document.getElementById("company");

feature.innerHTML+="<img src='./images/icon-arrow-down.svg' id='down1'>";
company.innerHTML+="<img src='./images/icon-arrow-down.svg' id='down2'>";

function switchClass(x){
    if(x.matches){
        sidebar.classList.add("card");
    }else{
        sidebar.classList.remove("card");
    }
}
var x = window.matchMedia("(max-width:550px)")
switchClass(x)
x.addListener(switchClass);

btn.addEventListener("click",menutoggle);
function menutoggle(){
    btn.classList.toggle("active");
    if(btn.classList.contains("active")){
        open.style.display="none";
        close.style.display="block";
        document.body.style.backgroundColor="rgba(0, 0, 0, 0.5)"  ;
        document.getElementById("hero").style.mixBlendMode="multiply";
        document.getElementById("logo").style.mixBlendMode="multiply";
    }else{
        open.style.display="block";
        close.style.display="none";
        document.body.style.opacity="1";
        document.body.style.backgroundColor="white"  ;
        document.getElementById("hero").style.mixBlendMode="none";
        document.getElementById("logo").style.mixBlendMode="none";
    }
}

feature.addEventListener("click",iconflip)

function iconflip(){
    feature.classList.toggle("active");
    if(feature.classList.contains("active")){
        document.getElementById("down1").remove();
        feature.innerHTML+="<img src='./images/icon-arrow-up.svg' id='up1'>";
        if(x.matches){
              document.getElementById("dropdownmenu1").style.display="block";
        document.getElementById("groupnav").style.marginLeft="40%";
        document.getElementById("space").style.marginLeft="-80%";
        document.getElementById("regis").style.width="175%";
        }
      
    }else{
        document.getElementById("up1").remove();
        feature.innerHTML+="<img src='./images/icon-arrow-down.svg' id='down1'>";
        if(x.matches){
        document.getElementById("dropdownmenu1").style.display="none";
        document.getElementById("groupnav").style.marginLeft="0";
        document.getElementById("space").style.marginLeft="-50%";
        document.getElementById("regis").style.width="250%";
    }
}
}
company.addEventListener("click",iconflip2)

function iconflip2(){
    company.classList.toggle("active");
    if(company.classList.contains("active")){
        document.getElementById("down2").remove();
        company.innerHTML+="<img src='./images/icon-arrow-up.svg' id='up2'>";
        if(x.matches){
        document.getElementById("dropdownmenu2").style.display="block";
        document.getElementById("groupnav").style.marginLeft="40%";
        document.getElementById("space").style.marginLeft="-80%";
        document.getElementById("regis").style.width="175%";
        }
    }else{
        document.getElementById("up2").remove();
        company.innerHTML+="<img src='./images/icon-arrow-down.svg' id='down2'>";
        if(x.matches){
        document.getElementById("dropdownmenu2").style.display="none";
        document.getElementById("groupnav").style.marginLeft="0";
        document.getElementById("space").style.marginLeft="-50%";
        document.getElementById("regis").style.width="250%";
    }
}
}