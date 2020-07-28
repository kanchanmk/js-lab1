let wage = 12;
let hours = 60;

// Then write the code to log the
// total paycheck based on the hours worked and the wage ($ per hour). If the hours worked is
// over 40, give 150% pay for the extra hours worked. Try running it with a few different values for
// hours and wage. Here are some examples…

// wage hours pay  Wks
// 10 20 200   5000
// 10 40 400    2500
// 10 50 550    1819
// 12 60 840    1191

let paycheck = 0;

if(hours > 40 )
{
    let extraHrs = hours - 40;
    paycheck = (40 * wage ) + (extraHrs * (1.5 * wage));
    console.log(`Paycheck for ${hours} hours  is $${paycheck}. `);
}else{
    paycheck = (hours * wage );
    console.log(`Paycheck for ${hours} hours  is $${paycheck}. `);

}

// Next, if this person got the same paycheck every week, count how many weeks it would take
// them to earn $1,000,000. Give the answer as a whole number. For example, with wage=10 and
// hours=50 it would take 1819 weeks.

let wksForMillionare = 0;

wksForMillionare = Math.ceil(1000000/ paycheck);

console.log(` Weeks to earn $1,000,000 : ${wksForMillionare}`);





