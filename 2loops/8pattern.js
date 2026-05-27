// Program: Print 3x3 Star Pattern
//***
//**
//*
for (let row = 3; row >= 1; row--) {

    let stars = "";

    for (let col = 1; col <= row; col++) {
        stars = stars + "*";
    }

    console.log(stars);
}