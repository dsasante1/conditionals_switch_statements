//  You are building a ticket booking system for a cinema.
// The system needs to determine the ticket price based on 
//the movie type, age, and seat selection.
// Implement the following rules using if, else if, else statements,
// comparison operators, and logical operators:
//
// - For regular movies:
//   - For children (age < 12), the ticket price is $8.
//   - For adults (age >= 12 and age < 65), the ticket price is $12.
//   - For seniors (age >= 65), the ticket price is $10.
//
// - For 3D movies:
//   - For children (age < 12), the ticket price is $10.
//   - For adults (age >= 12 and age < 65), the ticket price is $15.
//   - For seniors (age >= 65), the ticket price is $12.
//
// - For IMAX movies:
//   - For children (age < 12), the ticket price is $12.
//   - For adults (age >= 12 and age < 65), the ticket price is $18.
//   - For seniors (age >= 65), the ticket price is $15.
//
// - For VIP seats, add $5 to the ticket price.
//
// Implement the ticket booking system by taking inputs for 
//movie type ("regular", "3D", or "IMAX"), age, and seat selection, and 
//outputting the final ticket price based on the rules above.
//

let finalTicketPrice = 0

let movieType = 'imax'
let age = 45
let selectVIPSeat = false




if (movieType === 'regular'){
    if (age < 12) {
        finalTicketPrice += 8
    }else if (age >= 12 && age < 65){
        finalTicketPrice += 12
    }else if (age >= 65){
        finalTicketPrice += 10
    }

}else if (movieType === '3d'){
    if (age < 12) {
        finalTicketPrice += 10
    }else if (age >= 12 && age < 65){
        finalTicketPrice += 15
    }else if (age >= 65){
        finalTicketPrice += 12
    }

}else if (movieType === 'imax'){
    if (age < 12){
        finalTicketPrice += 12
    }else if (age >= 12 && age < 65){
        finalTicketPrice += 18
    }else if (age >= 65){
        finalTicketPrice += 15
    }
}

if(selectVIPSeat){
    finalTicketPrice += 5
}

console.log(`final ticket price = ${finalTicketPrice} dollars`)
