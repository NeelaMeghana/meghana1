function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achivements(data.achivements);
  fun_technicalskills(data.technicalskills);
});

var div2=document.getElementById("child2");
function fun_career(car){
  var h4=document.createElement("h2");
  h4.textContent="CARRER OBJECTIVE";
  div2.appendChild(h4);
  var heading=document.createElement("hr");
  div2.appendChild(heading);
    var list=document.createElement("ul");
  div2.appendChild(list);

  var listItem=document.createElement("li");

  listItem.textContent=car.info;
  list.appendChild(listItem);
  var heading=document.createElement("hr");
  div2.appendChild(heading);

}
var div2=document.getElementById("child2");
function fun_education(edu){
  var h3=document.createElement("h2");
  h3.textContent="EDUCATIONAL QUALIFICATION";
  div2.appendChild(h3);
  var heading=document.createElement("hr");
  div2.appendChild(heading);
    var list=document.createElement("ul");

  div2.appendChild(list);
  for(var i=0;i<edu.length;i++){
    var listItem=document.createElement("li");

    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem1=document.createElement("p");
    listItem1.textContent=edu[i].Institute;
    list.appendChild(listItem1);
    var listItem2=document.createElement("p");
    listItem2.textContent=edu[i].data;
    list.appendChild(listItem2);

  }
}
  var div2=document.getElementById("child2");
  function fun_achivements(ach){
    var h3=document.createElement("h2");
    h3.innerHTML="achivements";
    div2.appendChild(h3);
    var heading=document.createElement("hr");
    div2.appendChild(heading);
      var list=document.createElement("ul");

    div2.appendChild(list);
    for(var j=0;j<ach.length;j++){
      var listItem=document.createElement("li");

      listItem.innerHTML=ach[j].name;
      list.appendChild(listItem);
      var listItem1=document.createElement("p");
    }
}
function fun_technicalskills(skills){
  var h5=document.createElement("h2");
  h5.textContent="TECHNICAL SKILLS";
  div2.appendChild(h5);
  var hr=document.createElement("hr");
 h5.appendChild(hr);
var tr="";
var table=document.createElement("table");
div2.appendChild(table);
for(var i=0;i<skills.length;i++){
  tr+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].data+"</td></tr>"
}
table.innerHTML=tr;
table.border="1";
}
