function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("i1_1");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field to the clipboard */
    document.execCommand("copy");
  
  }
function QR() {
    let x = document.getElementById("QR");
    let src = x.src;

    if (src.includes("Resources/QR_2.png")) {
        x.src = "Resources/QR_3.png";
    } 
    else if (src.includes("Resources/QR_3.png")) {
        x.src = "Resources/QR_4.png";
    } 
    else if (src.includes("Resources/QR_4.png")) {
        x.src = "Resources/QR_2.png";
    }
    else{
      x.src = "Resources/QR_2.png";
      document.getElementById("ch_QR").innerHTML = "QR code doesn't work?";
    }

}
function ch_QR() {
  document.getElementById("ch_QR").innerHTML = "Try the simple QR code. If this is not still working, click Go Now! to go to website";
  document.getElementById("QR").src = "Resources/QRcode.jpg"
}

  