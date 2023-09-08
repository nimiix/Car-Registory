// function validateForm(){
//   var name = document.getElementById('name').Placeholder;
//   var plateNumber = document.getElementById('platenumber').Placeholder;
//   var CarType = document.getElementById('car_type').Placeholder;
//   var Gender = document.getElementById('gender').Placeholder;
//   var PhoneNumber = document.getElementById('phone_no').Placeholder;
 
//   if(name == ''){
//     alert('Name is required');
//     return false;
//   }
 
//   if(plateNumber == ''){
//     alert('plateNumber is required');
//     return false;
//   }

//   if(CarType == ''){
//     alert('CarType is required');
//     return false;
//   }

//   if(Gender == ''){
//     alert('Gender is required');
//     return false;
//   }

//   if(PhoneNumber == ''){
//     alert('PhoneNumber is required');
//     return false;
//   }

//   return true;
// }
// function showdata(){
//   var peopleList;
//   if(localStorage.getItem('peopleList') == null){
//     peopleList = [];
//   }
//   else{
//     peopleList=JSON.parse(localStorage.getItem('peopleList'))
//   }

//   var html = '';
//   peopleList.forEach(function (element, index){
//     html += "<tr>";
//     html += "<td>" + element.name + "</td>";
//     html += "<td>" + element.platenumber + "</td>";
//     html += "<td>" + element.car_type + "</td>";
//     html += "<td>" + element.gender + "</td>";
//     html += "<td>" + element.phone_no + "</td>";
//     html += '<td><button onClick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onClick="deleteData('+index+')" class="btn btn-danger">Delete</button>';
    
//   });
// }


const dataForm = document.getElementById('dataForm');
const dataTable = document.getElementById('dataTable');
const addDataButton = document.getElementById('addData');

  // Load existing data from local storage on page load
const savedData = JSON.parse(localStorage.getItem('tableData')) || [];
savedData.forEach(data => {
  addRowToTable(data);
});

addDataButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const plateNumber = document.getElementById('platenumber').value;
  const carType = document.getElementById('car_type').value;
  const gender = document.getElementById('gender').value;
  const phoneNO = document.getElementById('phone_no').value;

  if (name && plateNumber && carType && gender && phoneNO) {
    const newData = { name, plateNumber, carType, gender, phoneNO };
    addRowToTable(newData);

    // Save the new data to local storage
    savedData.push(newData);
    localStorage.setItem('tableData', JSON.stringify(savedData));

    // Clear the form fields
    dataForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

  function addRowToTable(data) {
    const newRow = dataTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = data.name;
    cell2.innerHTML = data.plateNumber;
    cell3.innerHTML = data.carType;
    cell4.innerHTML = data.gender;
    cell5.innerHTML = data.phoneNO;

  }