//My first attempt
for (let n = 1; n < 11; n++)  {
    let even = n % 2
    if(even == 0)
    console.log(n)  
}

//More efficient version
for (let n = 1; n < 11; n++)  {
    if(n % 2 == 0)    
    console.log(n)  
}

/* 

In loops, it is common practice to use variables i and j first:


for (let i = 1; i < 11; i++)  {
    if(i % 2 == 0)    
    console.log(i)  
}

*/