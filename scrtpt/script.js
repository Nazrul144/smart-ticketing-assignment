//Update taka
//Get the current taka
//Increase the current taka by 550 Taka
//Show the updated taka

let sub = 1;
function TitcketCalculation(btn){
    //Reducing Seats 
    const totalSeatsSelector = document.getElementById('total-seats');
    const currentSeats = +totalSeatsSelector.innerText; 
    let availableSeats = currentSeats - sub;
    totalSeatsSelector.innerHTML = availableSeats;
    seatsCount();
    sumOfTicket();

    const selectedBtn = (btn.id);
    const selectedContainer = document.getElementById("creatingUl");

    const li = document.createElement('li');


    const p = document.createElement('p');
    p.innerText = selectedBtn;
    const c = document.createElement('c');
    c.innerText = 'Economy';
    const price = document.createElement('price');
    price.innerText = 550;
   

    li.appendChild(p);
    li.appendChild(c);
    li.appendChild(price);

    selectedContainer.appendChild(li);

    
   

}
let sum = 1;
function seatsCount(){
    //Seats Count:
    const currentSeats = document.getElementById('seats-count');
    const convertToNumber = +currentSeats.innerText; 
    let countingTotalSeats = convertToNumber + sum;
    currentSeats.innerHTML = countingTotalSeats; 
}
 
let perTicketPrice = 550;
//Summation of the ticket Price
function sumOfTicket(){
    const totalTicketPrice = document.getElementById("total-cost");
    const initialTotalValue = +totalTicketPrice.innerText;
    let totalCost = initialTotalValue + perTicketPrice;
    totalTicketPrice.innerHTML = totalCost;
    console.log(totalCost);
}














//Summation of Ticket Price
function summationOfTicketPrice(){
   const gettingSeatNumber = document.getElementById('seatsNumber');
   const seatsNumber = gettingSeatNumber.innerText;
   
}


