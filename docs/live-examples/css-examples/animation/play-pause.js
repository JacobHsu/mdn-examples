window.addEventListener("load",()=>{let e=document.getElementById("example-element"),n=document.getElementById("play-pause");n.addEventListener("click",()=>{e.classList.contains("running")?(e.classList.remove("running"),n.textContent="Play"):(e.classList.add("running"),n.textContent="Pause")})});