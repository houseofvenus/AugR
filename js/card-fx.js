function splitScreen(){

   /*
                        *   splits the screen to allow for multiple "desktops",
                        *   i.e. connect to various cARds locally by tapping or
                        *   remotely via pARk broadcast
                        */
//new screen creation step
    let nextView = document.createElement("video");
    nextView.setAttribute("id", `webcam-${viewerTracker.length}-container`);
    nextView.classList.add(`viewer-container`);

//add the new screen to the list of sceens
    viewerTracker.push(nextView);
    console.log(viewerTracker);
    console.log("-------------------------------------------------");
    let topMult = 0;

    //for each item in the list update the margins and positioning
    for(var i=0; i<viewerTracker.length; i++){
        (function(){
            let videoContainer = viewerTracker[i];
            console.log(viewerTracker[i]);
            if(viewerTracker.length>3){

                if(i>0){
                    let mult = i % 3;
                    videoContainer.style.left = (mult*viewerContainerSeries[2].width)+"px";
                    if(mult==0){
                        topMult++;
                    }
                }
                else{
                    viewerContainerSeries[2].marginLeft = 0;
                    videoContainer.style.left = viewerContainerSeries[2].left;
                }
                console.log(topMult);
                videoContainer.style.top = (topMult*viewerContainerSeries[2].height)+"px";
                //videoContainer.style.top = viewerContainerSeries[2].top;
                videoContainer.style.marginTop = viewerContainerSeries[2].marginTop;
                videoContainer.style.marginLeft = viewerContainerSeries[2].marginLeft+"px";

                videoContainer.setAttribute("width", viewerContainerSeries[2].width);
                videoContainer.style.width = viewerContainerSeries[2].width+"px";
                videoContainer.setAttribute("height",viewerContainerSeries[2].height);
                videoContainer.style.height = viewerContainerSeries[2].height+"px";
            }
            else{
                let count = viewerTracker.length-1;
                if(i>0){
                    videoContainer.style.top = (i*viewerContainerSeries[count].height)+"px";
                }
                else{
                    videoContainer.style.top = viewerContainerSeries[count].top;
                }
                videoContainer.style.marginTop = viewerContainerSeries[count].marginTop;
                videoContainer.style.marginLeft = viewerContainerSeries[count].marginLeft+"px";
                videoContainer.setAttribute("width", viewerContainerSeries[count].width);
                videoContainer.style.width = viewerContainerSeries[count].width+"px";
                videoContainer.setAttribute("height", viewerContainerSeries[count].height);
                videoContainer.style.height = viewerContainerSeries[count].height+"px";
            }

            document.getElementById("main-app-container").appendChild(videoContainer);
        })();
    }

}

function showLinkStatusDisplay(code){
    let type = code;
    let linkStatusDisplay, linkStatusDisplayBar, linkStatusDisplayBarContainer, linkStatusDisplayTitle, linkStatusDisplayContent;
    if(sessionManager.statusShown){
        console.log("dom elements for link status display already created");
        linkStatusDisplay = document.getElementById("link-status-display-container");
        linkStatusDisplayTitle = document.getElementById("link-status-display-title-container");
        linkStatusDisplayBar = document.getElementById("link-status-display-bar");
        linkStatusDisplayBarContainer = document.getElementById("link-status-display-bar-container");
        linkStatusDisplayContent = document.getElementById("link-status-display-content-container");
    }
    else{
        linkStatusDisplay = document.createElement("div");
        linkStatusDisplayTitle = document.createElement("div");
        linkStatusDisplayBar = document.createElement("div");
        linkStatusDisplayBarContainer = document.createElement("div");
        linkStatusDisplayContent = document.createElement("div");
        linkStatusDisplay.setAttribute("id","link-status-display-container");
        linkStatusDisplayTitle.setAttribute("id","link-status-display-title-container");
        linkStatusDisplayBarContainer.setAttribute("id","link-status-display-bar-container");
        linkStatusDisplayContent.setAttribute("id","link-status-display-content-container");
        linkStatusDisplayBar.setAttribute("id","link-status-display-bar");
    }
    linkStatusDisplayBar.style.width = 0;
    /*    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    */
    if(type==0){
            console.log("hahaha");
            linkStatusDisplayTitle.innerHTML = "Connect"
            linkStatusDisplayContent.innerHTML = "<p style='width: 80%; margin: 0 auto; display: block; padding-top: 5%; text-align: center;'> Opening this <span style='font-weight:900;'>cARd</span> and loading its Lyoko Ledgerspace Token...</p>";
    }
    else if(type==1){
          console.log("oooooo");
          linkStatusDisplayTitle.innerHTML= "Link"
          linkStatusDisplayContent.innerHTML = "<p style='width: 70%; margin: 0 auto; text-align: center; padding-top: 5%;'> Linking this session to another <span style='font-weight:900;'>cARd</span>...</p>";
    }
    else{
        linkStatusDisplayTitle.textContent = "Link Status Display"
        linkStatusDisplayContent.innerHTML = "<p> text will go here </p>";
        console.log("no code provided");
    }

    if(sessionManager.statusShown){
        linkStatusDisplay.style.display = "block"
    }
    else{
        linkStatusDisplayBarContainer.appendChild(linkStatusDisplayBar);
        linkStatusDisplay.appendChild(linkStatusDisplayTitle);
        linkStatusDisplay.appendChild(linkStatusDisplayBarContainer);
        linkStatusDisplay.appendChild(linkStatusDisplayContent);

        document.getElementById("main-app-container").appendChild(linkStatusDisplay);
    }
    setTimeout(function(){
        linkStatusDisplayBar.style.width = "100%";
    }, 50);

    setTimeout(function(){
        linkStatusDisplay.style.display = "none";
        sessionManager.statusShown = true;
    }, 3100);
    //}

}

function activateDeviceNFCReader(connection, target){
    let conn = connection;
    let title = target;
    conn.emit("checkForNodeOnNetwork", {status: true, name: title});
}

function connectToRFID(socket, object){
    let connection = socket;
    let target = object;
    activateDeviceNFCReader(connection, target);
    opencARd(0);
}

function opencARd(code){
    showLinkStatusDisplay(code);
}
