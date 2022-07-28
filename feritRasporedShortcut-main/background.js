var codeString = '';
var today = new Date();
var day = today.getDay();

if(day===0){
  today.setDate(today.getDate()+1);
}

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var marginDate = new Date();
var todayDate = new Date();

todayDate.setHours(0,0,0,0);

marginDate.setFullYear(yyyy);
marginDate.setDate(30);
marginDate.setMonth(8);
marginDate.setHours(0,0,0,0);
today = yyyy + '-' + mm + '-' + dd;

chrome.storage.sync.get('code', function(result){
  codeString = result.code;
});

if(marginDate>todayDate){
  --yyyy;
}

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.ferit.unios.hr/"+yyyy
  +"/studenti/raspored-nastave-i-ispita/"+today+"/"
  +codeString+"#raspored";
  chrome.tabs.create({ url: newURL });
});
