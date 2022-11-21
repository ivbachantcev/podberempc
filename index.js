// import  initializeApp  from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// заполняем первый список
var selectCategory = document.getElementById("selectCategory");
for(const key in allConfiguration){
    var option =document.createElement('option');
    option.text = allConfiguration[key];
    option.value = key;
    selectCategory.add(option, -1);
}

// заполняем второй список
var selectLevel = document.getElementById("selectLevel");
for(const key in allLevels){
    var option =document.createElement('option');
    option.text = allLevels[key];
    option.value = key;
    selectLevel.add(option, -1);
}

