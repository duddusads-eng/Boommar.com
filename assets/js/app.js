// app.js

// JavaScript functionality for the mechanic marketplace

// Function to list available mechanics
function listMechanics() {
    const mechanics = [
        { name: 'John Doe', rating: 4.8, service: 'Engine Repair' },
        { name: 'Jane Smith', rating: 4.5, service: 'Tire Replacement' },
        { name: 'Mike Johnson', rating: 4.7, service: 'Oil Change' }
    ];

    mechanics.forEach(mechanic => {
        console.log(`Name: ${mechanic.name}, Rating: ${mechanic.rating}, Service: ${mechanic.service}`);
    });
}

// Function to book a mechanic
function bookMechanic(name) {
    console.log(`${name} has been booked!`);
}

// Sample call to list mechanics
listMechanics();