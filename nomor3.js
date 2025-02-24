function SortingEventoOdd(numbers){
    var numbers = [1,8,6,7,10] // set max dengan array pertama
    let i = 0;
     for (i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++){
            if (numbers[j] < numbers[j + 1]){ // pastikan jika max kurang dari array yg diurutkan
                let temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            }
    }
    }
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            console.log(numbers[i]) // tampilkan value max tersebut
        }
    }
    for (i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 != 0){
            console.log(numbers[i]) // tampilkan value max tersebut
        }
    }
  
  }
  
 SortingEventoOdd() // panggil fungsi dengan parameter adalah array