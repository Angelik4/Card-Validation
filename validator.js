const validator = {
            creditCardNumber:[3,6,2,5,1,0,2,5,9,3,8,0,4]
          };
          function isValid(creditCardNumber){
        let numberReverse=creditCardNumber.length.reverse();
            
          for(var i =0;i < numberReverse.length ; i++)
          if( i % 2 !==0){
            numberReverse[i] = numberReverse[i]*2;

        if (i >=10)
        {
            numberImpar=numberReverse[i]-9
            console.log(numberImpar)
        }
