/* let photoCaptions = [];

$('.proj-pictures').each(function () {
	let caption = $(this).children().attr('data-title').toLowerCase();
	photoCaptions.push(caption);
});

$('#searching-section').keyup(function(){
  const request =  $('#searching-section').val().toLowerCase();
    for (let i = 0; i < photoCaptions.length; i ++) {
      if (photoCaptions[i].indexOf(request) < 0) {
      	$('.proj-pictures').eq(i).hide();
      } else {
      	$('.proj-pictures').eq(i).show();
      }
      }
}); */

// PROJECT 8 JAVASCRIPT

/* let xhr = new XMLHttpRequest();
let people = '<div class="pic-collection">'; */


const profilepic = document.getElementById('profile-pic');
const name = document.getElementById('name');
const email = document.getElementById('email');
const town = document.getElementById('town');
const contactInfo = 'https://randomuser.me/api/?results=12&inc=name,location,email,dob,cell,picture&?nat=us,gb';



fetch(contactInfo)
.then(response => response.json())
.then(data => summonDiv(data.results))


//FUNCTION

/*  CREATING AN EMPTY DIV SO PREMADE ONES DON'T HAVE TO BE MADE

function emptyDiv(data) {

const toAdd = document.getElementById('pic-collection');
const counting = data.length;

	for (let i=0; i < counting; i+=1) {
	   const newDiv = document.createElement('div');
	   newDiv.id = 'goesHere';
	   newDiv.className = 'employee';
	   toAdd.appendChild(newDiv);
	}

}

*/

function fillDiv(dataLengthCount, number) {
const	goesHereNum =	'goesHere' + number;
let goesHere = document.getElementById(goesHereNum);
console.log(goesHereNum);
const html = `
	<div class="employee" id=${number}>
		<img class='profile-pic' src="${dataLengthCount.picture.large}">
			<div class='employee-deets'>
				<h4> ${dataLengthCount.name.title} ${dataLengthCount.name.first} ${dataLengthCount.name.last}</h4>
				<p> ${dataLengthCount.email}</p>
				<p> ${dataLengthCount.location.city}</p>
				</div>
	</div>
	`;

	goesHere.innerHTML = html;

	changeColor(goesHereNum, dataLengthCount); 


}

function summonDiv(data) {
	for (let i = 0; i < data.length; i+=1) {
		//emptyDiv(data);
		number = i+1;
		let dataLengthCount = data[i];
		console.log(dataLengthCount)
		fillDiv(dataLengthCount, number);


	}
	}

function changeColor(goesHereNum, dataLengthCount) {
const toChange = document.getElementById(goesHereNum);

	toChange.addEventListener('click', e => {
 const hereItGoes = parseInt(e.target.id);
 console.log(dataLengthCount);
 let modal = document.getElementById('modalDiv');
 modal.style.zIndex = 5;

 const html = `
 <div class="employeeModal">
 <span class="close">&times;</span>
 <span class="previous">&#60;</span>
 <span class="next">&#62;</span>
 <div class="modal-employee">
 	<img class='profile-pic' src="${dataLengthCount.picture.large}">
 			<h4> ${dataLengthCount.name.title} ${dataLengthCount.name.first} ${dataLengthCount.name.last}</h4>
 			<p> ${dataLengthCount.email}</p>
 			<p> ${dataLengthCount.location.city}</p>
 			<p> ${dataLengthCount.phone}</p>
 			<p> ${dataLengthCount.location.street} ${dataLengthCount.location.state} ${dataLengthCount.location.postcode}</p>
	</div>
 </div>`;

 	modal.innerHTML = html;

		 if ( e.target.style.backgroundColor === 'green') {
	    e.target.style.backgroundColor = 'white';
		} else {
			e.target.style.backgroundColor = 'green';
		};

})
}

function createModal () {
let goesHere = document.getElementById(goesHereNum);
console.log(goesHereNum);
const html = `
<div class="employeeModal">
	<img class='profile-pic' src="${dataLengthCount.picture.large}">
			<h4> ${dataLengthCount.name.title} ${dataLengthCount.name.first} ${dataLengthCount.name.last}</h4>
			<p> ${dataLengthCount.email}</p>
			<p> ${dataLengthCount.location.city}</p>
			<p> ${dataLengthCount.phone}</p>
			<p> ${dataLengthCount.location.street} ${dataLengthCount.location.state} ${dataLengthCount.location.postcode}</p>

</div>`;

	goesHere.innerHTML = html;

	changeColor(goesHereNum)

}


/*
for ( let i=0; i <= 12; i+=1) {
	people[i]
}

xhr.onreadystatechange = function () {
	 if(xhr.readyState === 4) {
		 let employees = JSON.parse("xhr.responseText");
		 console.log(typeof employees);

	 }
};

xhr.open('GET', "https://randomuser.me/");
xhr.send();


*/
