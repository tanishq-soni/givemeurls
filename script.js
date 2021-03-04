document.getElementById("qr_div").style.display="none";
document.getElementById("second_div").style.display="none";
function submit(){
  var longurl = document.getElementById("long_url").value;
  if(longurl=='')
  {
    alert('please enter a valid url');
  }
  else{
    let linkRequest = {
      destination: longurl,
      domain: { fullName: "fragile.rocks" }
      // slashtag: slashtag
    }
    
    let requestHeaders = {
      "Content-Type": "application/json",
      "apikey": "81b0022f379f439f82e093c006e439ef",
    }
    
    $.ajax({
      url: "https://api.rebrandly.com/v1/links",
      type: "post",
      data: JSON.stringify(linkRequest),
      headers: requestHeaders,
      dataType: "json",
      success: (link) => {
        document.getElementById("short_url").value="https://"+link.shortUrl;
      }
  })
  document.getElementById("second_div").style.display="block";
}
}
function copy() {
    var copyText = document.getElementById("short_url");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  } 
function qr(){
    document.getElementById("qr_div").style.display ="block";
    var qrlink = document.getElementById("short_url").value;
    window.frames['qrframe'].location.replace(qrlink+".QR");
}  