function scuberGreetingForFeet(){
  let result
  if (Distance>2000 feet){
  result='charges 30 dollars'
  } else if (Distance>2500 feet){
  result= 'no can do'
}

function ternaryCheckCity(){
  return Destination = 'NYC'? 'OK, sounds good':'No Go'
}

function switchOnCharmFromTip(){
  switch(tip){
  case 'generous':
     return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  default:
     return 'Bye'
     }
  
}
