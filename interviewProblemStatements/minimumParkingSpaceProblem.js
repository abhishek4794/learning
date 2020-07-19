// Minimum parking space problem
// Below is the given list of car timings with start and end time [0,20], where 0 is start time of a car and 20 is endtime
// Design a solution which returns minimun parking slots available
let array = [[0, 20], [5, 10], [15, 60], [20, 25], [25, 40], [35, 45]]

let slots = []; // To fill slot
let parkedCars = {} // This variable is used Just for visual demo to show how solution is parking cars efficiently 
console.log('List of cars with their timings for a parking : ', array);
for (i = 0; i < array.length; i++) {

    if (slots.length === 0) { // No cars yet
        // array[i][0] is a start time here, array[i][1] is a endtime
        slots.push(array[i][1]); // First slot occupied i.e. [0,20] in above example, we are storing endtime of a car in slot
        parkedCars[0] = ''
        parkedCars[0] += `${array[i][0]} <--> ${array[i][1]} || ` // Noted in register with start and end time
    } else {

        let newSlot = true; // Flag to identify if new slot is required or not
        for (let s = 0; s < slots.length; s++) { // Iterate through slots to find out perfect slot for new car
            if (array[i][0] >= slots[s]) { // If next car's start time is greater than s'th slots endtime, this is perfect slot for a car 
                slots[s] = array[i][1]; // slot[s] occupied, we will overrite previous endtime value, to indicate new car is in slot. 
                parkedCars[s] += `${array[i][0]} <--> ${array[i][1]} || ` // Noted in car register
                newSlot = false; // No need to have another slot, we can break loop.
                break;
            }
        }
        // If newSlot is still true, that means car is not able to find matching  slot and require a new one.
        if (newSlot) {
            parkedCars[slots.length] = '';
            parkedCars[slots.length] += `${array[i][0]} <--> ${array[i][1]} || ` // Noted in register
            slots[slots.length] = array[i][1] // Parked car in new slot
        }
    }
}

console.log('Finished :', slots);
console.log('Total No of Minimun slots  :', slots.length);
console.log('Register : Cars parked :', parkedCars);

// Output

/*
List of cars with their timings for a parking :  [
  [ 0, 20 ],
  [ 5, 10 ],
  [ 15, 60 ],
  [ 20, 25 ],
  [ 25, 40 ],
  [ 35, 45 ]
]
Finished : [ 40, 60, 45 ]
Total No of Minimun slots  : 3
Register : Cars parked : {
  '0': '0 <--> 20 || 20 <--> 25 || 25 <--> 40 || ',
  '1': '5 <--> 10 || 15 <--> 60 || ',
  '2': '35 <--> 45 || '
}
*/