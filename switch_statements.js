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

let basic = 'basic '
let standard = 'standard ' 
let premium = 'premium '
let total = 0


let basicCost = 10
let standardCost = 15
let premiumCost = 20



// additional options
let personalTrainer = 'personal trainer '
let mealPlan = 'meal '
let mealAndTrainer = 'personal trainer and meal '



// additional options cost
let personalTrainerCost = 5
let mealPlanCost = 8


//discount
let discount = 0.03


let userSelection = '6'


switch (true){

    case(typeof userSelection === 'string' && userSelection !== ''):

        if (userSelection.includes('basic') && userSelection.indexOf('basic') != -1){
            console.log('basic plan +')
            total += basicCost

            if(userSelection.includes('personal trainer') && userSelection.includes('meal')){
                console.log(`meal plan and personal trainer + (discount applies)`)
                total += mealPlanCost + personalTrainerCost
                total *= discount
            }else if(userSelection.includes('meal')){
                console.log(`meal plan +`)
                total += mealPlanCost
            }else if(userSelection.includes('personal trainer')){
                console.log(`personal trainer +`)
                total += personalTrainerCost

            }

            console.log(`total cost of subscribtion = ${total}`)
  
        }else if (userSelection.includes('standard') && userSelection.indexOf('standard') != -1){
            console.log('standard +')
            total += standardCost

            if(userSelection.includes('personal trainer') && userSelection.includes('meal')){
                console.log(`meal plan and personal trainer + (discount applies)`)
                total += mealPlanCost + personalTrainerCost
                total *= discount
            }else if(userSelection.includes('meal')){
                console.log(`meal plan +`)
                total += mealPlanCost
            }else if(userSelection.includes('personal trainer')){
                console.log(`personal trainer +`)
                total += personalTrainerCost
            }
 

            console.log(`total cost of subscribtion = ${total}`)
  
        }else if (userSelection.includes('premium') && userSelection.indexOf('premium') != -1){
            console.log('premium +')
            total += premiumCost
            
            if(userSelection.includes('personal trainer') && userSelection.includes('meal')){
                console.log(`meal plan and personal trainer + (discount applies)`)
                total += mealPlanCost + personalTrainerCost
                total *= discount

            }else if(userSelection.includes('meal')){
                console.log(`meal plan +`)
                total += mealPlanCost
            }else if(userSelection.includes('personal trainer')){
                console.log(`personal trainer +`)
                total += personalTrainerCost
            }
    
            console.log(`total cost of subscribtion = ${total}`)
  
        }else{
            console.log('enter a valid plan!')
        }
        break
    default:
        console.log('select a plan! enter valid inputs')
        break;

}

