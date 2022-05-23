//////////////////////////////////////////
// Jake Hopkins Portfolio Site
// A: Jake Hopkins @ HopDev - 23/05/22
//////////////////////////////////////////

const artStr = String.raw`
       _       _          _    _             _    _           
      | |     | |        | |  | |           | |  (_)          
      | | __ _| | _____  | |__| | ___  _ __ | | ___ _ __  ___ 
  _   | |/ _' | |/ / _ \ |  __  |/ _ \| '_ \| |/ / | '_ \/ __|
 | |__| | (_| |   <  __/ | |  | | (_) | |_) |   <| | | | \__ \
  \____/ \__,_|_|\_\___| |_|  |_|\___/| .__/|_|\_\_|_| |_|___/
                                      | |                     
                                      |_|                     
`;
var focusWindow;
// Startup
window.onload = function() {
	$("body").fadeIn(500);
    $('#about').hide();
    TERMINAL = $('#terminalBody').terminal({
        help: function() {
            this.echo('Commands: about, fivem, development, github');
        },
        about: function() {
            if($('#about').is(":visible")){
              $('#about').trigger("mousedown");
            } else {
              this.echo('launching about application...');
              $('#about').show();
          }
        },
        fivem: function() {
            this.echo('All my FiveM resources can be found at http://fivem.hopdev.co.uk');
        },
        development: function() {
            this.echo('My web development site can be found at http://www.hopdev.co.uk');
        },
        github: function() {
            this.echo('All my ongoing open source projects can be found at http://www.github.com/h0ppp');
        }
    }, {
        greetings: artStr + "\n (C) 2022 All Rights Reserved. \n Type 'help' to view available commands." // Set startup prompt.
    });
    
	// Register window objects
	RegisterWindow(document.getElementById("terminal"));
    RegisterWindow(document.getElementById("about"));
	$('#terminal').trigger("mousedown"); // Focus terminal on startup
}

function RegisterWindow(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  document.getElementById(elmnt.id+"Header").onmousedown = dragMouseDown;
 
  $(elmnt).on("mousedown",ToggleFocusWindow);

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function CloseAbout(){
	TERMINAL.echo("About applciation halted.");
	$("#about").hide();
}

function ToggleFocusWindow(){
    if($(this).attr('id') != focusWindow){ // if window is currently not focused
        lastFocused = focusWindow; // Record current focus
        $("#"+lastFocused).css('z-index', 1); // Take current focus out of focus
        $("#"+lastFocused+"Header").css('z-index', 2);
        $(this).css('z-index', 51); // Set clicked window into focus
        $("#"+$(this).attr('id')+"Header").css('z-index', 52);
        focusWindow = $(this).attr('id'); // Record clicked window as focused
    }
}