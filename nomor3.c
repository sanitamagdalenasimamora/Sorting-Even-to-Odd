#include <stdio.h>

int main()
{
    int numbers[] = {3,4,2,5,8,1};
    int n = sizeof(numbers) / sizeof(numbers[0]);
    int i, j, temp;

    for (i = 0; i < n-1; i++)
    {
        for(j = 0; j < n- i -1; j++){
            if (numbers[j] < numbers[j+1])
            {
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
            
        }
    }
    
    printf("Urutan angka dimulai dari genap ke ganjil adalah sebagai berikut: ");
    for(i = 0; i< n ; i++){
      if( numbers[i] % 2 == 0)
      {
        printf("%d ", numbers[i]);
      } 
    }
    for(i = 0; i< n ; i++){
      if( numbers[i] % 2 != 0)
      {
        printf("%d ", numbers[i]);
      } 
    }
    return 0;
}