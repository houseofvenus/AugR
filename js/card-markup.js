
console.log(document.body);
document.body.innerHTML = `<div id="main-app-container">
    <video id="webcam-0-container" class="viewer-container" autoplay width="640" height="480" style="border: black 2px solid;"></video>
    <div id="errorMsg"></div>
    <div class="menu-container">
        <div id="connect-to-rfid-menu-button" class="menu-button">conn</div>
        <div id="link-to-new-rfid-menu-button" class="menu-button">link</div>
        <div id="split-screen-menu-button" class="menu-button">splt</div>
    </div>
</div>`;
console.log(document.body);
