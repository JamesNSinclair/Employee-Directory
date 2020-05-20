const profilepic = document.getElementById('profile-pic');
const name = document.getElementById('name');
const email = document.getElementById('email');
const town = document.getElementById('town');
const contactInfo = 'https://randomuser.me/api/?results=12&inc=name,location,email,dob,cell,picture&?nat=us,gb';
let modal = document.getElementById('modalDiv');

//FETCH

fetch(contactInfo)
.then(response => response.json())
.then(data => createData(data.results))


//FUNCTIONS

function createData(data) {
	for (let i = 0; i < data.length; i+=1) {
		//emptyDiv(data);
		number = i+1;
		let dataLengthCount = data[i];
		storeData(dataLengthCount, number, data);

	}
	}

//FUNCTION


function storeData(dataLengthCount, number, data) {

	const	goesHereNum =	'goesHere' + number;
	let goesHere = document.getElementById(goesHereNum);

	const html = `
		<div class="employee" id=${number}>
			<img class='profile-pic' src="${dataLengthCount.picture.large}">
				<div class='employee-deets'>
					<h4> ${dataLengthCount.name.title} ${dataLengthCount.name.first} ${dataLengthCount.name.last}</h4>
					<p> ${dataLengthCount.email}</p>
					<p> ${dataLengthCount.location.city}</p>
					</div>
		</div>`;

		goesHere.innerHTML = html;

		createLightbox(goesHereNum, dataLengthCount, data);


}


function createLightbox(goesHereNum, dataLengthCount, data) {
	let toChange = document.getElementById(goesHereNum);

		toChange.addEventListener('click', e => {
		 let hereItGoes = parseInt(e.target.id);
		 console.log(hereItGoes);
		 modal.style.zIndex = 5;
		 	modal.style.visibility = "visible";

		 const html = `
		 <div class="employeeModal">
			 <span class="close">&times;</span>
			 <span class="previous">&#60;</span>
			 <span class="next">&#62;</span>
			 <div class="modal-employee">
			 	<img class='profile-pic' src="${dataLengthCount.picture.large}">
					<div class="cardUnder">
							<h4> ${dataLengthCount.name.title} ${dataLengthCount.name.first} ${dataLengthCount.name.last}</h4>
				 			<p> ${dataLengthCount.email}</p>
				 			<p> ${dataLengthCount.location.city}</p>
				 			<p> ${dataLengthCount.cell}</p>
				 			<p> ${dataLengthCount.location.street.number} ${dataLengthCount.location.street.name}</p>
							<p> ${dataLengthCount.location.state} </p>
							<p> ${dataLengthCount.location.postcode}</p>
					</div>
				</div>
		 </div>`;

		 	modal.innerHTML = html;

		hereItGoes += -1;
		createScroll(data, hereItGoes, goesHereNum);
	})

}


function createScroll(data, hereItGoes, goesHereNum) {
	let next = document.querySelector('.next');
	let previous = document.querySelector('.previous');
	let close = document.querySelector('.close');

			close.addEventListener('click', e  => {
				console.log('hello');
				modal.style.visibility = "hidden";
			 modal.style.zIndex = -1;
				console.log('hello');
			});

		next.addEventListener('click', e => {
			if (hereItGoes < 11) {
					hereItGoes += 1;
				 createModal(hereItGoes, data, goesHereNum);
				 createScroll(data, hereItGoes, goesHereNum);
		 		} else {
				 console.log('hello')
				}
		});

		previous.addEventListener('click', e => {
			if (hereItGoes > 0) {
					hereItGoes += -1;
		 			createModal(hereItGoes, data, goesHereNum);
			  } else {
				console.log('hello')
			}
		});

};


function createModal(hereItGoes, data, goesHereNum) {
	console.log(hereItGoes);
 let dataLengthCount = data[hereItGoes]

const html = `
<div class="employeeModal">
	<span class="close">&times;</span>
	<span class="previous">&#60;</span>
	<span class="next">&#62;</span>
		<div class="modal-employee">
		<img class='profile-pic' src="${dataLengthCount.picture.large}">
			<div class="cardUnder">
				<h4> ${dataLengthCount.name.title} ${dataLengthCount.name.first} ${dataLengthCount.name.last}</h4>
				<p> ${dataLengthCount.email}</p>
				<p> ${dataLengthCount.location.city}</p>
				<p> ${dataLengthCount.cell}</p>
				<p> ${dataLengthCount.location.street.number}  ${dataLengthCount.location.street.name}</p>
				<p> ${dataLengthCount.location.state}</p>
				<p> ${dataLengthCount.location.postcode}</p>
			</div>
		</div>
</div>`;

modal.innerHTML = html;


createScroll(data, hereItGoes, goesHereNum);
}
