// Declare and initialize the following variables with appropriate values:
// ○ name (string) - Mitch Cuckovich
// ○ age (number) - 25
// ○ birthday (string) - January 24
// ○ detroitGC (boolean) - choose either true or false
// ○ lifeEvents (array with 4 items. 4 important life events)

const name = "Kanchan Kandage";
const age = 35;
const birthday = "January 01";
let detroitGC = true;
let lifeEvents = 
["I am born India", 
"I am in Instrumentation Engineer", 
"I have two kids both boys", 
"I have worked in IT until 2011."];

if(detroitGC)
{
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday} .`)
}
else{
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday} .`)
}

for(let i=0; i< lifeEvents.length; i++)
{
    console.log(`life event ${i+1} => ${lifeEvents[i]}`);
}

let counter = 0;

while(true)
{
    let randomNum = Math.floor(Math.random() *10) + 1;
    //console.log(` randomNum generated at ${counter} is ${randomNum}  `);

    if(randomNum !== 5 ){
        counter++;
        console.log(`randomNumber ${randomNum} !== 5`);
    }else{
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break; 
    }

}