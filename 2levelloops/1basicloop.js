//for(start; condition; update)
//step1:-start: from 0  because  in loop "i=0"     
//step2:-condition: "i < 5"-->i=0 so 0<5 true so loop will execute and print 0  if incase false loop stop executing
//after loop executed this step3 start -->update: i++ -->i=0 so 0++ means i=1 and again condition check 1<5 true so loop will execute and print 1 and this process will continue until i=4 because when i=5 condition will be false and loop will stop executing
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("loop is ended");
console.log("second loop");
//this loop is also same as above previous loop but here just a small change in condition
//pervious loop condition is "i < 5" and in this loop condition is "i <= 5"
//i<=5 --> i<5 or i=5 so this loop will execute until i=5 and when i=6 condition will be false and loop will stop executing
for (let i = 0; i <= 5; i++) {
    console.log(i);
}