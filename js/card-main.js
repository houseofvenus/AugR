document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
      document.getElementById("connect-to-rfid-menu-button").addEventListener("click", function(){
          connectToRFID();
      });

      document.getElementById("link-to-new-rfid-menu-button").addEventListener("click", function(){
          activateDeviceNFCReader();
          splitScreen();
          opencARd(1);
      });

      document.getElementById("split-screen-menu-button").addEventListener("click", function(){ //
          splitScreen();
      });
    }, 3000);

});
