var codeString = '';

var today = new Date();
var day = today.getDay();
console.log(day);



if(day===0){
  today.setDate(today.getDate()+1);
}

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

console.log(today);

chrome.storage.sync.get('code', function(result){
  codeString = result.code;
});

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.ferit.unios.hr/2021/studenti/raspored-nastave-i-ispita/"+today+"/"+codeString+"#raspored";
  console.log(newURL);
  chrome.tabs.create({ url: newURL });
});