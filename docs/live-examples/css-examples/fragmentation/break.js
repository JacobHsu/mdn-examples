let btn=document.getElementById("print-btn"),editorContainer=document.getElementsByClassName("css-editor-container")[0],exampleHTMLElement=document.getElementById("default-example"),printableSection=document.createElement("div");printableSection.setAttribute("id","printable-section"),printableSection.classList.add("hide-element"),document.body.appendChild(printableSection),btn.addEventListener("click",()=>{var e=exampleHTMLElement.innerHTML;editorContainer.classList.add("hide-element"),printableSection.innerHTML=e,printableSection.classList.remove("hide-element"),window.print(),printableSection.classList.add("hide-element"),printableSection.innerHTML="",editorContainer.classList.remove("hide-element")});