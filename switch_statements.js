// You are building a subscription plan calculator for a fitness app.
// The calculator needs to determine the monthly subscription cost based 
//on the user's selected plan and additional options. Implement the following
// rules using switch cases, comparison operators, and logical operators:
//
// - The available plans are: "Basic", "Standard", and "Premium".
// - The base monthly costs for each plan are: Basic - $10, Standard - $15, and Premium - $20.
// - Users can select additional options: "Personal Trainer" and "Meal Plan".
// - The Personal Trainer option costs $5 per month, and the Meal Plan option costs $8 per month.
// - If the user selects both options, an additional discount of $3 is applied.
//
// Implement the subscription plan calculator by taking inputs for the
// selected plan and the options, and outputting the final monthly subscription cost based on the rules above.

let basic = 'basic'
let standard = 'standard'
let premium = 'premium'



let basicCost = 10
let standardCost = 15
let premiumCost = 20



// additional options
let personalTrainer = 'personal trainer'
let mealPlan = 'meal plan'
let doubleOptionSelected = 'both additional options'



// additional options cost
let personalTrainerCost = 5
let mealPlanCost = 8


//discount
let discount = 0.03


let userSelection = 'personalTrainer basic'


switch (userSelection){
    case(!userSelection && typeof userSelection === String):

        case (userSelection.includes('basic')):
        console.log('basic')
        total += basicCost
        if (personalTrainer){
            let cost = 5
            console.log(cost)
        }
        else if(mealPlan){
            let cost = 8
            console.log(cost)
        }else if (mealPlan && personalTrainer){
             let cost =  5 + 8 + 3
            console.log(cost)
        }

            break;

        case 'standard':
            console.log('standard')
            total += standardCost
            break;
        
        case 'premium':
            console.log('premium')
            total += premiumCost
            break;
        
    default:
        console.log('enter a valid input')
        break;

    
    
}


// use string 

// string method includes  

// basic plan personal trainer