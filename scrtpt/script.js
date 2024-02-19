//Update taka
//Get the current taka
//Increase the current taka by 550 Taka
//Show the updated taka

let sub = 1;let selectedSeat = 0;
function TitcketCalculation(btn){
    if(selectedSeat >= 4) {
        return;
    }
    selectedSeat++;
    //Reducing Seats 
    const totalSeatsSelector = document.getElementById('total-seats');
    const currentSeats = +totalSeatsSelector.innerText; 
    let availableSeats = currentSeats - sub;
    totalSeatsSelector.innerHTML = availableSeats;
    btn.style.backgroundColor = "#1DD100";
    btn.disabled = true;

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

    seatsCount();
    sumOfTicket();
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

    //Updating Grand Total
    const GrandTotal = document.getElementById("grand-total");
    GrandTotal.innerHTML = totalCost;
}

//Cupupon Matching

const applyBtn = document.getElementById("applyBtn");
const secrateCupuponCode = ["NEW15", "Couple 20"];

applyBtn.addEventListener("click", function(){
const new15 = document.getElementById("new15");
const couple20 = document.getElementById("couple20");
const inputValue = document.getElementById("inputValue");
const input = inputValue.value;

if(input === ""){
    alert("Provide a Coupon!");
}
else if(secrateCupuponCode.includes(input)){
   
    let totalTicketPrice = +document.getElementById("total-cost").innerText;
    let couponCode = document.getElementById("inputValue").value;
    let discountPercentage = 0;
    if(couponCode === "NEW15"){
        discountPercentage = 15;
    }
    else if(couponCode === "Couple 20"){
        discountPercentage = 20;
    }
    let totalDiscountAmount = (totalTicketPrice * discountPercentage) / 100;
    const GrandTotalSelector = document.getElementById("grand-total");
    GrandTotalSelector.innerHTML = totalTicketPrice - totalDiscountAmount;
    document.getElementById("inputValue").style.display = "none";
    applyBtn.style.display = "none";
}

else{
    alert("Wrong cupupon!");
}

})


//Popup function

function closePopup(){
    document.getElementById("popup");
    console.log("clicked");
}

