
const moodButtons =
document.querySelectorAll(".moods button");


const emoji =
document.getElementById("emoji");


const message =
document.getElementById("message");


const advice =
document.getElementById("advice");


const scoreText =
document.getElementById("score");


const historyList =
document.getElementById("historyList");


const themeBtn =
document.getElementById("themeBtn");





let score =
Number(localStorage.getItem("moodScore"))
|| 0;



scoreText.innerText =
score;







const moods = {


happy:{

emoji:"😄",

title:"Ajoyib kayfiyat!",

text:"Bugun energiyangiz yuqori. Yaxshi ishlarni davom ettiring!",

points:10

},



sad:{

emoji:"😢",

title:"Xafa kayfiyat",

text:"Biroz dam oling, sevimli mashg'ulotingiz bilan shug'ullaning.",

points:5

},



angry:{

emoji:"😡",

title:"Jahlingiz chiqyapti",

text:"Chuqur nafas oling va biroz tinchlaning.",

points:4

},



tired:{

emoji:"😴",

title:"Charchagansiz",

text:"Dam olish va uyquga e'tibor bering.",

points:6

},



cool:{

emoji:"😎",

title:"Zo'r holat!",

text:"Bugun yangi narsalarni o'rganish uchun yaxshi kun.",

points:10

},



nervous:{

emoji:"😰",

title:"Hayajon bor",

text:"O'zingizga ishoning, hammasi yaxshi bo'ladi.",

points:7

}


};









// KAYFIYAT TANLASH


moodButtons.forEach(button=>{


button.onclick=()=>{


let mood =
button.dataset.mood;



let data =
moods[mood];



emoji.innerText =
data.emoji;


message.innerText =
data.title;


advice.innerText =
data.text;




score += data.points;



scoreText.innerText =
score;



localStorage.setItem(

"moodScore",

score

);



saveHistory(
data
);



};


});









// TARIX SAQLASH


function saveHistory(data){



let history =
JSON.parse(

localStorage.getItem(
"moodHistory"
)

)
|| [];




history.unshift({

emoji:data.emoji,

title:data.title,

date:new Date()
.toLocaleDateString()

});




if(history.length>10){

history.pop();

}



localStorage.setItem(

"moodHistory",

JSON.stringify(history)

);



showHistory();


}









// TARIX KO'RSATISH


function showHistory(){


let history =
JSON.parse(

localStorage.getItem(
"moodHistory"
)

)
|| [];



historyList.innerHTML="";



history.forEach(item=>{


let li =
document.createElement("li");



li.innerHTML=

`

${item.emoji}
<b>${item.title}</b>
<br>
📅 ${item.date}

`;



historyList.appendChild(li);



});


}








// DARK MODE


themeBtn.onclick=()=>{


document.body.classList.toggle(
"dark"
);



localStorage.setItem(

"moodTheme",

document.body.classList.contains(
"dark"
)
?
"dark"
:
"light"

);


};








if(
localStorage.getItem(
"moodTheme"
)
==="dark"
){

document.body.classList.add(
"dark"
);

}






// START


showHistory();