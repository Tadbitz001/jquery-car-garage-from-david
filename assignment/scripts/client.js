

$(document).ready(readyNow);

// starter variables:
// garage array / object to hold cars
// max spaces and currently open spaces.

let garage = [];
let MaxGarageSpaces = 3
let garageSpacesAvailable = 3

function readyNow() {
  console.log("DOM is loaded! In readyNow!");

  // click event handler that calls the different functions
  $('#addCarButton').on('click', addNewCar)
  $('.cars-table').on('click', '.deleteBtn', deleteCar)
}

// function to add a car to the garage
function addNewCar() {
  // console.log('in addNewCar');
  
  // add in attributes
  carYear = $('#yearInput').val(),
  carMake = $('#makeInput').val(),
  carModel = $('#modelInput').val(),
  carImgUrl = $('#imgInput').val()

  // testing - typo in the textarea id source of carImgUrl not working.

  console.log('car year:', carYear);
  console.log('car image url:', carImgUrl);
  
  // check for fields being filled
  if (carYear && carMake && carModel && carImgUrl) {
    let newCar = {
    year: carYear,
    make: carMake,
    model: carModel,
    imgUrl: carImgUrl
    }
    // return newCar for inspection
    // console.log('newCar: ', newCar);
    
    // add newCar to array
    garage.push(newCar);

    // remove a space in the garage
    garageSpacesAvailable -= 1;

    // moved resetInputfields to this location so fields don't empty out if alert
    // is produced from below else statement.
    resetInputFields()
  } else {
    // pop up to fill in your dang info.
    alert('Please fill out all fields.')
  }
  
  // garageSpaces stuff moved to render to allow for removal of cars to release inputs


  // add to array
 
  console.log('garage:', garage)

  // anything else?
  
  render();
}

// reset input fields.
function resetInputFields() {
  // setter: reset fields to empty strings.
  $('#yearInput').val('');
  $('#makeInput').val('');
  $('#modelInput').val('');
  $('#imgInput').val('');
}


// functino to remove a car from the list.
function deleteCar(){
  console.log('in deleteCar')
  // // next line is DOM visual removal only.
  // $(this).parent().parent().remove()

  // variable for temporary car storage 
  let newGarage = []
  // playing with locating information...dynamically!
  console.log('this is', $(this).parent().parent(``))
  console.log('This id is', $(this).parent().parent().attr('id'))
  // get the number...
  let itemToRemove = Number ($(this).parent().parent().attr('id'))
  // loop to find the number, ignoring the item that matches.
  for (i=0; i<garage.length; i++) {
    if (itemToRemove !== i) { // if id # matches i, the object gets ditched.
      console.log('item with id', itemToRemove, 'will be removed') // just an FYI
      newGarage.push(garage[i]); 
    }
  }

  // set garage to result of above loop and return space to garage
  garage = newGarage;
  garageSpacesAvailable += 1

  // and of course, display changes.
  render()
}

function render() {
  // update the DOM
  // played around with lists for awhile and am making an executive decision 
  // to display this information as a table rather than an unordered list.
  // lining up a <ul> vertically (so the headers look right) 
  // is a non-trivial task that seems unsuited to the desired output.
  
  // empty table & recreate table headers.
  $('.cars-table').empty();
  $('.cars-table').append(`
    <tr>
      <td>Year</td>
      <td>Make</td>
      <td>Model</td>
      <td>Car Image</td>
    <td>Remove Car</td>
  </tr>
  `)
  
  // Loop through garage and add cars inside to table.
  for (i=0; i<garage.length; i++) {
  
    $('.cars-table').append(`
      <tr id="${i}">
        <td>${garage[i].year}</td>
        <td>${garage[i].make}</td>
        <td>${garage[i].model}</td>
        <td>${garage[i].carImgUrl}</td>
          <td>
            <button class="deleteBtn">
            Delete Car
            </button>
          </tdd>
      </tr>
          `)
  }

  // check spaces and disable or re-enable inputs as appropriate.
  if ( garageSpacesAvailable < 1 ) {
  // console.log('garage is full')
  $('#yearInput').prop('disabled', true)
  $('#makeInput').prop('disabled', true)
  $('#modelInput').prop('disabled', true)
  } else {
    $('#yearInput').prop('disabled', false)
    $('#makeInput').prop('disabled', false)
    $('#modelInput').prop('disabled', false)  
  }
}