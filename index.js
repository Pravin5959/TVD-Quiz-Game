var readLineSync = require("readline-sync");
const chalk = require('chalk');
var emoji = require('node-emoji');
var userName = readLineSync.question(chalk.white("What's your name?"))
console.log("--------------")
console.log("Welcome "+userName+" I'm Pravin's CLI")
console.log("--------------")
console.log("Let's see, How good you know TVD"+emoji.get('smile'))
console.log("--------------")
var score = 0;
console.log("You just have to provide the option in lower case for eg: a")
console.log("--------------")
console.log("All the best")
console.log("--------------")
function quiz(question,answer){
  var userAns = readLineSync.question(question)
  if(userAns === answer){
    console.log(chalk.green("You are right! :)"));
    score = score + 1;
  }else{
    console.log(chalk.red("You are wrong! :("));
  }
  var yourScore = score
  console.log("Current score is:"+yourScore)
  console.log("--------------")
}
var go = [{question:"1. What State is Mystic Falls in?\na.Virginia\nb.Atlanta\nc.Georgia",answer:"a"},
{question:"2. Why do vampires hate the herb Vervain?\na.Vervain protects humans from being compelled by them.\nb.Vervain decreases their hunger for blood.\nc.Vervain heals humans",answer:"a"},
{question:"3. What is the only way Elena can wake up from her coma?\na.Damon Salvatore must kiss her.\nb.Bonnie Bennett must die.\nc.Stefan Salvatore must find the cure.",answer:"b"},
{question:"4. What are the names of Stefan’s doppelgangers?\na.Shamus and Tim\nb.Matt and Tyler\nc.Silas and Tom",answer:"c"},
{question:"5. Who amongst these characters was Damon Salvatore's cellmate back in the 1950s when the latter was captured by the Augustines?\na.Enzo St. John\nb.Joseph Morgan\nc.Klaus Mikaelson",answer:"a"},
{question:"6. How did Damon escape from the Salvatore basement after he was locked up there by Stefan?\na.He found a secret passage\nb.He used his connection with Caroline to free himself.\nc.He killed Zach.",answer:"b"},
{question:"7. What does the Gilbert ring afford the wearer?\na.Helps a vampire resist the urge for blood.\nb.To remain immune to vampires.\nc.Protects the wearer from death from supernatural causes.",answer:"c"},
{question:"8. How long did it take for Stefan to reunite with his brother Damon Salvatore?\na.10 years\nb.12 years\nc.15 years",answer:"c"},
{question:"9. Which vampire did Elena meet first?\na.Stefan\nb.Damon\nc.Klaus",answer:"b"}]
for(var i=0;i<go.length;i++){
  var fiNaL = go[i]
  quiz(fiNaL.question,fiNaL.answer)
}
if(score===9 || score===8){
  console.log("You are an expert! you scored :"+score)
}else if(score===7 || score===6){
  console.log("You need to re-watch some parts again,you scored :"+score)
}else if(score===5 || score===4){
  console.log("You need to re-watch, you scored :"+score)
}else{
  console.log("You scored :"+score)
}