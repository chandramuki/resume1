// function loadjson(file,callback){
// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json")
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 			callback(xhr.responseText);
// 	}
// };
// xhr.send(null);
// }
// loadjson("data.json",function(text){
// var data=JSON.parse(text);
// console.log(data);
// basics(data.details);
// careerinfo(data.career);
// educationinfo(data.education);
// skillsset(data.skills);
// achivement(data.achivement);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
console.log(data);
basics(data.details);
careerinfo(data.career);
educationinfo(data.education);
skillsset(data.skills);
achievement(data.achievements);
})
var left=document.querySelector(".left");
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name1=document.createElement("h3");
	name1.textContent=det.name;
	left.appendChild(name1);
	var phno=document.createElement("h3");
	phno.textContent=det.phoneno;
	left.appendChild(phno);
	var email=document.createElement("a");
	email.href="mail to:rajavardhini79@gmail.com";
	email.textContent=det.email;
	left.appendChild(email);
	var add=document.createElement("h2");
	add.textContent="address";
	left.appendChild(add);
	var hr=document.createElement("hr");
	left.appendChild(hr);
	var address=document.createElement("p");
	address.textContent=det.address;
	left.appendChild(address);
}
		var right=document.querySelector(".right");
		function careerinfo(info){
          var career=document.createElement("h3");
          career.textContent="career objective";
          right.appendChild(career);
          var c=document.createElement("hr");
          right.appendChild(c);
          var care=document.createElement("p");
          care.textContent=info.info;
          right.appendChild(care);
          var ed=document.createElement("h3");
          ed.textContent="education qualification";
          right.appendChild(ed);
          var hp=document.createElement("hr");
          right.appendChild(hp);
		}
        function educationinfo(edu){
        var ed=document.createElement("h3");
          ed.textContent="education qualification";
          right.appendChild(ed);
          var hp=document.createElement("hr");
          right.appendChild(hp);
          var table1=document.createElement("table");
          table1.border="4";
          right.appendChild(table1);
          tabledata="";
          for (i = 0; i < edu.length; i++){
      	  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
      	  }
      	  table1.innerHTML=tabledata;
        }
        function skillsset(skill)
        {
        	var sk=document.createElement("h1");
        	sk.textContent="technicalskills";
        	right.appendChild(sk);
        	var hr=document.createElement("hr");
        	right.appendChild(hr);
        	for(i=0;i<skill.length;i++){
        		var s=document.createElement("h3");
        		s.textContent=skill[i].title;
        		right.appendChild(s);
        		var ul=document.createElement("ul");
        		var li=document.createElement("li");
        		li.textContent=skill[i].info;
        		ul.appendChild(li);
        		right.appendChild(ul);
        	   }
        }
          function achievement(param){
          	var hr=document.createElement("h5");
          	hr.textContent="achievements";
          	right.appendChild(hr);
          	var h4=document.createElement("hr");
            right.appendChild(h4);
            for(i=0;i<param.length;i++){
            	var ul2=document.createElement("ul");
            	var li2=document.createElement("li");
            	li2.textContent=param[i].info;
            	ul2.appendChild(li2);
            	right.appendChild(ul2);
            }
          }
       function openpage(){
       	window.open("resume.html","_self",true);
       }
