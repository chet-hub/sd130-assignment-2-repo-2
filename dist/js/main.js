const attendanceContainerEle=document.querySelector(".attendance-container"),addName=attendanceContainerEle.querySelector("button"),nameList=attendanceContainerEle.querySelector("ul");let names=["Johnny","Creston","Chet"];addName.addEventListener("click",(e=>{for(let n=0;n<names.length;n++){const t=document.createElement("LI"),a=document.createTextNode(names[n]);t.appendChild(a),nameList.appendChild(t),e.preventDefault()}})),attendanceContainerEle.body.appendChild(nameList);