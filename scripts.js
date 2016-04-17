function loadXMLDoc() {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","C:\Users\Jenni\Documents\ICS311\dbtestconnect.class",true);
	xmlhttp.send();
}
function usertz(){
	var d = new Date();
	var tos = (d.getTimezoneOffset())/60;
	function zone(tz){
		var z = "";
		if(tz == 6){
			z = "Central";
		} else if(tz == 5){
			z = "Eastern";
		} else if(tz == 7){
			z = "Mountain";
		} else if(tz == 8){
			z = "Pacific";
		} else if(tz == 9){
			z = "Alaskan";
		} else if(tz == 10){
			z = "Hawaiian";
		} else if(tz > 10){
			z = "You are closer to Hawaiian";
		} else if(tz < 5){
			z = "You are closer to Eastern";
		}
		return z;
	}
	var offset = zone(tos);
	document.getElementById("usertz").innerHTML=offset;
	setInterval(function(){
	var x = new Date();
	var day = x.toLocaleTimeString();
	
	document.getElementById("userdt").innerHTML=day;
	},500);
}
function styleHold(){
	var s = sessionStorage.getItem("style");
	console.log(s);
	if (s == null){
		document.getElementById("style").href = "file:///C:/data/ics225/final_project/style1.css";
	} else {
		document.getElementById("style").href = s;
	}
}
function chkReset(){
	var r = confirm("Confirm you would like to start over");
	if (r){
		return true;
	} else {
		return false;
	}
}
function chkSubmit(){
	var name = document.getElementById("name");
	var last = document.getElementById("last");
	var add1 = document.getElementById("add1");
	var add2 = document.getElementById("add2");
	var state = document.getElementById("state");
	var post = document.getElementById("post");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");
	
	if(name.value == "" || last.value == "" || add1.value == "" || state.value == "" || post.value == "" || phone.value == "" || email == ""){
		alert("All fields must be completed!");
		return false;
	} else {
		return true;
	}
}
function chkPost(){
	var pcode = document.getElementById("post").value;
	var len = pcode.length;
	
	if (len >= 5){
		var c = pcode.match(/^((\d{5})[\s+-.]?(\d{4})?)|(([A,B,C,E,G,H,J,K,L,M,N,P,R,S,T,V,X]\d[A,B,C,E,G,H,J,K,L,M,N,P,R,S,T,V,W,X,Z])[\s]?(\d[A,B,C,E,G,H,J,K,L,M,N,P,R,S,T,V,W,X,Z]\d))$/);
		
		if (c != null){
			document.getElementById("postchk").innerHTML="*";
		} else {
			document.getElementById("postchk").innerHTML="* Invalid postal code";
		}
	} 
}
function chkPhone(){
	var p = document.getElementById("phone").value;
	
	var k = p.match(/(\d{3}-?\d{3}-?\d{4})/);
	if (k != null){
		document.getElementById("phonechk").innerHTML="*";
	} else {
		document.getElementById("phonechk").innerHTML="* Invalid phone number";
	}
}

function chkEmail(){
	
	var p = document.getElementById("email").value;
	
	var k = p.match(/^([^A-Z]+\.)?([^A-Z,@,\.]+)@([a-z,\d]+\.)([a-z.\d,-]{1,70}\.)?([a-z]{3,})$/);
	
	if(k != null){
		document.getElementById("emailchk").innerHTML="*";
	} else {
		document.getElementById("emailchk").innerHTML="* Invalid Email address";
	}
}
function styleChange(){
	var current = document.getElementById("style").href;
	var nam = document.getElementById("style").id;
	if(current == "file:///C:/data/ics225/final_project/style1.css"){
		document.getElementById("style").href="file:///C:/data/ics225/final_project/style2.css";
		var ref = document.getElementById("style").href;
	} else if(current == "file:///C:/data/ics225/final_project/style2.css"){
		document.getElementById("style").href="file:///C:/data/ics225/final_project/style1.css";
		var ref = document.getElementById("style").href;
	} else if(current == "file:///C:/data/ics225/final_project/textStyle.css"){
		document.getElementById("style").href="file:///C:/data/ics225/final_project/style1.css";
		var ref = document.getElementById("style").href;
	}
	sessionStorage.setItem(nam, ref);

}
function styleText(){
	var current = document.getElementById("style").href;
	var nam = document.getElementById("style").id;
	if(current == "file:///C:/data/ics225/final_project/style2.css" || current == "file:///C:/data/ics225/final_project/style1.css"){
		document.getElementById("style").href="file:///C:/data/ics225/final_project/textStyle.css";
		var ref = document.getElementById("style").href;
	} else if(current == "file:///C:/data/ics225/final_project/textStyle.css"){
		document.getElementById("style").href="file:///C:/data/ics225/final_project/style1.css";
		var ref = document.getElementById("style").href;
	}
	sessionStorage.setItem(nam, ref);

}
function select(obj){
	location=obj.value;
}