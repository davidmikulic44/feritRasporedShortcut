var codeString = '';

var today = new Date();
var day = today.getDay();

if(day===0){
  today.setDate(today.getDate()+1);
}

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

chrome.storage.sync.get('code', function(result){
  codeString = result.code;
});

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.ferit.unios.hr/"+(yyyy-1)+"/studenti/raspored-nastave-i-ispita/"+today+"/"+codeString+"#raspored";
  chrome.tabs.create({ url: newURL });
});
