tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 1; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabchildren=tabcontent[i].children;
      for (index = 0; index < tabchildren.length; index++) {
        if (tabchildren[index].classList.contains("devname")){
          tabchildren[index].style.animation = "rainbow-fading 1s reverse, rainbow 10s infinite";
        }
        else {
          if(tabchildren[index].tagName=="H3") {tabchildren[index].style.animation = "fading-h3 1s reverse";}
          else{tabchildren[index].style.animation = "fading 1s reverse";}
      }
    }
  }
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++) {
    if(tabcontent[i]!=document.getElementById(tabName)) {
      tabcontent[i].style.display = "none";
      tabchildren=tabcontent[i].children;
      for(index = 0; index < tabchildren.length; index++) {
        if (tabchildren[index].tagName=="H3") tabchildren[index].style.animation = "fading-h3 1s reverse";
        else if(tabchildren[index].classList.contains("blackimgneon")) tabchildren[index].style.animation = "fading-black-img-neon 1s reverse";
        else if(tabchildren[index].classList.contains("greenneon")) tabchildren[index].style.animation = "greenneon-fading 1s reverse";
        else if(tabchildren[index].classList.contains("cyanneon")) tabchildren[index].style.animation = "cyanneon-fading 1s reverse";
        else if(tabchildren[index].classList.contains("blueneon")) tabchildren[index].style.animation = "blueneon-fading 1s reverse";
        else if(tabchildren[index].classList.contains("redneon")) tabchildren[index].style.animation = "redneon-fading 1s reverse";
        else if(tabchildren[index].classList.contains("devname")) tabchildren[index].style.animation = "rainbow-fading 1s, rainbow 4s infinite";
        else if (!tabchildren[index]. classList.contains("sourcecode"))tabchildren[index].style.animation = "fading 1s reverse";
      }
    }
    social=document.getElementById("socialid");
    for(index = 0; index < social.length; index++) {
      if(social[index].classList.contains("singleimgneon")) "fading-img-neon 1s reverse";
      else if(social[index].classList.contains("singleimgbneon")) "fading-img-neon 1s reverse";
      else social[index].style.animation = "fading 1s reverse";
    } 
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
} 
window.onload = function() {
};