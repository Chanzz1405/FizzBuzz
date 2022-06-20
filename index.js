const input = document.getElementById('input');
const check = document.getElementById('check');
const hasil = document.getElementById('hasil');

const FizzBuzz = ()=>{
    const baris = document.createElement('p');
    hasil.appendChild(baris);


    if(input.value === ""|| input.value == 0){
        baris.innerText = 'Invalid input';
    }else if(input.value % 3 === 0 && input.value % 5 === 0){
        baris.innerText = "FizzBuzz";
    }else if(input.value % 3 ===0 ){
        baris.innerText = "Fizz";
    }else if(input.value % 5 === 0){
        baris.innerText = "Buzz";
    }else{
        baris.innerText = input.value;
    }
}

check.addEventListener('click', FizzBuzz);