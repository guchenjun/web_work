/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-30 20:51:32
 * @version $Id$
 */

var iFrame = document.getElementById('iFramePart');
var testTitle = document.querySelector("div.content").querySelectorAll("a");
for(i=0; i<testTitle.length; i++){
	var item = testTitle[i];
 	item.addEventListener('click',showIframe);
}

function showIframe(e){
	var item = e.target;
	console.log(item);
	clickedColor(item);
	switch(item.id){
		case 'test1':showTest1();break;
		case 'test2':showTest2();break;
		case 'test3':showTest3();break;
	}
}

function clickedColor(item){
	for(i=0; i<testTitle.length; i++){
		testTitle[i].style.backgroundColor = "#00CCFF";
	}
	item.style.backgroundColor = "#CC3333";
}

function showTest1(){
	iFrame.style.width = "1000px";
	iFrame.style.height = "900px";
	iFrame.src = "test1.html";
}

function showTest2(){
	iFrame.style.height = "400px";
	iFrame.src = "test2.html";
}

function showTest3(){
	iFrame.style.width = "1000px";
	iFrame.style.height = "800px";
	iFrame.src = "test3.html";
}