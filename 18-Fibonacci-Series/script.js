var n1 = 0,  n2 = 1, num, i;  
var numm = +prompt (" Enter the limit for Fibonacci Series ");  
document.write( "Fibonacci Series: ");  
for ( i = 1; i <= numm; i++)  
{  document.write (" <br> " +  n1);   
    num = n1 + n2;  
    n1 = n2; 
    n2 = num;
}  