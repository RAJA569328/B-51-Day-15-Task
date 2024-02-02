document.getElementById('myForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    var firstName = document.getElementById('FirstName').value;
    var lastName = document.getElementById('LastName').value;
    var address = document.getElementById('Address').value;
    var pinCode = document.getElementById('PinCode').value;
    var state = document.getElementById('State').value;
    var country = document.getElementById('Country').value;
    var gender = document.getElementById('Gender').value;
    var foodChoice = document.getElementById('FoodChoice').value;

    var table = document.querySelector('tbody');
    var newRow = table.insertRow(-1); 

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pinCode;
    cell5.innerHTML = gender;
    cell6.innerHTML = foodChoice;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    

    document.getElementById('FirstName').value = '';
    document.getElementById('LastName').value = '';
    document.getElementById('Address').value = '';
    document.getElementById('PinCode').value = '';
    document.getElementById('State').value = '';
    document.getElementById('Country').value = '';
}