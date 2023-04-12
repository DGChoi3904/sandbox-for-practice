export default function multiply(a, b){
  if(typeof(a) === 'number' && typeof(b) === 'number'){
    return (a - b);
  } else {
    console.log("매개변수는 숫자여야 합니다.")
  } 
}