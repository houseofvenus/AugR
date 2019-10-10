
console.log(document.body);
document.body.innerHTML = `<div id="main-app-container">
    <video id="webcam-0-container" class="viewer-container" autoplay width="640" height="480" style="border: black 2px solid;"></video>
    <div id="errorMsg"></div>
    <div class="menu-container">
        <div id="link-to-new-rfid-menu-button" class="menu-button">link</div>
    </div>
    <div id="connect-to-rfid-menu-button" class="menu-button"></div>
</div>`;

console.log(document.body);
