(function (){
'use strict';
console.log('Reading JS');

const form = document.querySelector('#myform');
const ticket = document.querySelector('.ticket');
const madlib = document.querySelector('#madlib');
const passport = document.querySelector('.passport');
const results = document.querySelector('#results');
const restart = document.querySelector('#restart');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const destination = document.querySelector('#destination').value;
    const adjective = document.querySelector('#adjective').value;
    const food = document.querySelector('#food').value;
    const animal = document.querySelector('#animal').value;

    passport.className='hidden';
    results.className="showing";

    const ticketText = `
            <p class="ticketLabel">BOARDING PASS</p>
            <p><strong>PASSENGER:</strong>${name}</p>
            <p class="ticketDes"><strong>DESTINATION:</strong>${destination}</p>
            <p><strong>FLIGHT:</strong> DES-157</p>`;

    ticket.innerHTML = ticketText;
    const myText = `
            <h3>${destination}-Vacay Journal</h3>

            <p>Once upon a time, ${name} booked a vacation to ${destination}. They packed their bags, grabbed their passport, and prepared for what they thought would be the most ${adjective} vaction of their life.</p>

            <p>After the long flight, ${name} finally arrived in ${destination}. They checked into their hotel and decided to explore the local cuisine. Everything seemed perfect, especially when they found a restaurant serving the popular dish of ${food}.</p>

            <p>Just as ${name} was about to take their first bite, a sneaky ${animal} appeared out of nowhere, stealing their entire ${food} and their wallet. ${name} chased the ${animal} through the restaurant, through the streets of ${destination}, passing confused locals and all the way into the hotel lobby.</p>

            <p>The ${animal} stood its ground, holding the ${food} in its mouth. ${name} pleaded the ${animal} for their wallet back, saying they can have the food. The ${animal} ate the ${food} but just as ${name} moved closer the ${animal}, it ran through the door and vanished into the crowded city without a trace. </p>

            <p>${name} looked everywhere for their stolen item. Nothing showed up, as if the ${animal} disappeared into thin air. With no food and no wallet, ${name} returned to their hotel where the receptionist explained that ${animal} robberies were common in the neighborhood.</p>

            <p>${name} expected a ${adjective} adventure, but instead became a victim of a criminal mastermind. At least they had a story to tell when they got home! </p>
            <p class="stamp">NEVER AGAIN!</p>`;
    madlib.innerHTML = myText;

    restart.addEventListener('click', function() {
        results.className = 'hidden';
        passport.className = 'passport';
        form.reset();
    });
    
 


});

})();