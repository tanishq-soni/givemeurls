function gmf(){
  window.location.href="https://givemefiles.now.sh";
}
function submit(){
    var longurl = document.getElementById("long_url").value;
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
}
function copy() {
    var copyText = document.getElementById("short_url");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  } 