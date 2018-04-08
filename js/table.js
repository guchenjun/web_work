/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-30 08:42:34
 * @version $Id$
 */
var body = document.querySelector("body");
var tbl = document.getElementById("tbl");
var tdList = document.querySelectorAll('td');
for(i = 0; i < tdList.length; i++){
	var item = tdList[i];
	item.addEventListener('click',showMsg);
}

//init body
(function(){
	tbl.align = "center";
	body.bgColor = "#333"
	tbl.bgColor = "#fff";
	tbl.style.marginTop = "80px";
	tbl.style.textAlign = "center";
	tbl.style.borderCollapse = "collapse" ;
})();

// functions 
function showMsg(e){
	var item = e.target;
	console.log(item);
	switch(item){
		case tdList[0]:changeBackgroundColor(item);break;
		case tdList[1]:changeToDate(item);break;
		case tdList[2]:insertOneLine(item);break;
		case tdList[3]:deleteRow(item);break;
		case tdList[4]:showMouseXY(item,e);break;
		case tdList[5]:openNewWindow();break;
	}
}

function changeBackgroundColor(item){
	tbl.bgColor = "red";
}

function changeToDate(item){
	var today = new Date();
	var yyyy = today.getFullYear();
	var mm = today.getMonth();
	var dd = today.getDate();
	item.innerHTML = yyyy + "-" + mm + "-" + dd;
}

function insertOneLine(item,e){
	if(item.innerHTML != '21'){
		return;
	}
	var newRow = tbl.insertRow(2);
	var newCell = newRow.insertCell(0);
	var newCell2 = newRow.insertCell(1);
}

function deleteRow(item){
	if(item.innerHTML != '22'){
		return;
	}
	tbl.deleteRow(1);
}

function showMouseXY(item,e){
	item.innerHTML = "(" + e.clientX + "," + e.clientY + ")";
}

function openNewWindow(){
	window.open("https://www.taobao.com/");
}