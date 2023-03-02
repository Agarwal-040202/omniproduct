import React from 'react'
import "./demo.css"
const Demo = () => {

    let linkButton = document.getElementById("createLink");
    var copybtn = document.getElementById("copy-btn");
    
    const modifyText = (command, defaultUi, value) => {
        //execCommand executes command on selected text
        document.execCommand(command, defaultUi, value)
        console.log("piuttewwrvvv",command, defaultUi, value);
        console.log("hhklklklkttrrkljh", document.execCommand(command, defaultUi, value))
        
    };


    const linkCreateButtonFunction = () => {
        let userLink = prompt("Enter a URL");

        //if link has http then pass directly else add https
        if (/http/i?.test(userLink)) {

            modifyText(linkButton?.id, false, userLink);
            console.log("sdfsfasewe", linkButton?.id)
        } else {
            userLink = "http://" + userLink;
            // userLink = "http://" + userLink + " " + "target" + "=" + "_blank"
            modifyText(linkButton?.id, false, userLink);

            console.log("kkkkkkhghhghkkk", linkButton?.id)
        }

    }

    var pageX, pageY;
    document.addEventListener("mouseup", () => {
      
      // function copyfieldvalue() {
        // var field = document.getElementById("output");
        // field.focus();
        // field.setSelectionRange(0, field.value.length);
        // document.execCommand("copy");
        // linkCreateButtonFunction() 
      // }

      let selection = document.getSelection();
      let selectedText = selection.toString();
      var menu = document.querySelector(".menu");
      if (selectedText !== "") {
        let rect = document.querySelector(".text").getBoundingClientRect();
        menu.style.display = "block";
        menu.style.left = pageX - Math.round(rect.left) + "px";
        menu.style.top = pageY - Math.round(rect.top) - 58 + "px";

        document.getElementById("output").innerHTML = selectedText;

        var popup = document.getElementById("mypopup");
        var copybtn = document.getElementById("copy-btn");

        copybtn.addEventListener("click", () => {

          // copyfieldvalue();
          
            let userLink = prompt("Enter a URL");

            //if link has http then pass directly else add https
            if (/http/i?.test(userLink)) {
    
                modifyText(copybtn?.id, false, userLink);
                console.log("sdfsfasewe", copybtn?.id)
            } else {
                userLink = "http://" + userLink;
                // userLink = "http://" + userLink + " " + "target" + "=" + "_blank"
                modifyText(copybtn?.id, false, userLink);
    
                console.log("kkkkkkhghhghkkk", copybtn?.id)
            }
          
         
        //   popup.style.display = "block";

        });
    
        // var span = document.getElementsByClassName("close-btn")[0];

        // span.addEventListener("click", () => {
        //   popup.style.display = "none";
        // });

        // window.addEventListener("click", (event) => {
        //   if (event.target == popup) {
        //     popup.style.display = "none";
        //   }
        // });
      } else {
        menu.style.display = "none";
      }

    });
    // document.addEventListener("mousedown", (e) => {
    //   pageX = e.pageX;
    //   pageY = e.pageY;
    // });

  return (
    <div className='demo-text'>
          {/* <body> */}
    <div class="text">
      {/* <h1>GeeksforGeeks</h1>
      <p>
        In today’s digital world, when there are thousands of online platforms
        (maybe more than that!) available over the web, it becomes quite
        difficult for students to opt for a quality, relevant and reliable
        platform for themselves. Meanwhile, as Computer Science is a very vast
        field hence students are required to find an appropriate platform that
        can fulfill all their needs such as – Tutorials & Courses, Placement
        Preparation, Interview Experiences, and various others. And with the
        same concern, GeeksforGeeks comes in the picture – a one-stop
        destination for all Computer Science students!!
      </p>
   */}
      <div class="menu">
        <button id="copy-btn"> <i class="fa fa-copy fa-2x" ></i></button>
       
        <i class="fa fa-highlighter fa-2x" id="highlight-btn"></i>
      </div>
      <textarea id="output" ></textarea>
      <div id="mypopup" class="popup">
        <div class="popup-content">
          {/* <p>Copied!!</p> */}
          <span class="close-btn">×</span>
        </div>
      </div>
    </div>

    <div id="text-input" contenteditable="true" >

</div>
  {/* </body> */}
  <div>
    
  </div>
    </div>
  )
}

export default Demo