(function(c, u, r, p, o, s) {
  u = c[u] = {};
  u[r] = 0;
  u[p] = 0;
  u[o] = 0;
  u[s] = 0;
  document.addEventListener('mousemove', function(e) {
    u[r] = e[r];
    u[p] = e[p];
    u[o] = e[r] + c.scrollX;
    u[s] = e[p] + c.scrollY;
  });
  c.addEventListener('scroll', function() {
    u[o] = u[r] + c.scrollX;
    u[s] = u[p] + c.scrollY;
  });
})(window, 'curPos', 'clientX', 'clientY', 'viewportX', 'viewportY');



document.addEventListener('click', function(e) {

  console.log({
    "Coordonnée horizontale dans la fenêtre": curPos.clientX,
    "Coordonnée verticale dans la fenêtre": curPos.clientY,
    "Coordonnée horizontale dans le document": curPos.viewportX,
    "Coordonnée verticale dans le document": curPos.viewportY
  });

});



  let minutes = `00`,
      seconds = `00`,
      isPaused =0,
      chronometerDisplay = document.querySelector(`[data-chronometer]`),
      chronometerCall

  function chronometer() {

    seconds ++

    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
      seconds = `00`
      minutes ++

      if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
      minutes = `00`
      
      
      
    }

    chronometerDisplay.textContent = `${minutes}:${seconds}`

  }
var play=document.querySelector('#play');
    play.onclick = (event) => {
    chronometerCall = setInterval(chronometer, 1000)
    event.target.setAttribute(`disabled`,``)
    play.style.display="none";
    
  }

  document.querySelector('#pause').onclick = () => {
    if(isPaused==0){
      clearInterval(chronometerCall)
      // play.removeAttribute(`disabled`)
      isPaused=1;

    }else{
      chronometerCall = setInterval(chronometer, 1000)
      isPaused=0;
    }
    
  }

  document.querySelector('#reset').onclick = () => {
    clearInterval(chronometerCall)
    play.removeAttribute(`disabled`)
    chronometerDisplay.textContent = `00:00`
    
      
      minutes = `00`,
      seconds = `00`
  }
  function change_level(){
    document.getElementById("bg_image").src="images/1529602007693.jpg";
    document.getElementById("zone1").coords="144,165,272,304";
    play.style.display="inherit";
    clearInterval(chronometerCall)
    chronometerDisplay.textContent = `00:00`
       
    minutes = `00`,
    seconds = `00`
  }



