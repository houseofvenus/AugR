document.addEventListener("DOMContentLoaded", function(){
    let sessionManager = {
        connection: io.connect(location.host),
        network: "pARk"
    };

    setTimeout(function(){
        var viewerTracker = [
            document.getElementById("webcam-0-container"),
        ];
    }, 250);

    setTimeout(function(){
        document.getElementById("connect-to-rfid-menu-button").addEventListener("click", function(){
            connectToRFID(sessionManager.connection, sessionManager.network);
        });

        document.getElementById("link-to-new-rfid-menu-button").addEventListener("click", function(){
            activateDeviceNFCReader();
            splitScreen();
            opencARd(1);
        });
    }, 500);

});
