document.getElementById("openDir").addEventListener("click", function() {
  chrome.fileSystem.chooseEntry({}, function(fileEntry) {
    fileEntry.file(function(file){
      var reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById("container").innerHTML = e.target.result;
      };
      reader.readAsText(file);
    });
  });
});

document.getElementById("present").addEventListener("click", function() {
  remoteDOM.connectDisplay(document.getElementById("displayID").value);
});