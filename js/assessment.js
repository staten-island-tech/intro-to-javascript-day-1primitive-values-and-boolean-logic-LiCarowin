//Stop Lights
let light = "lights";
if (light === "green") {
    console.log("Go");
} else if (light === "Yellow") {
    console.log("Caution");
} else {
    console.log("Stop");
}

//Kristy and Bao Bao
let kristyInt = false;
let baobaoInt = false;
if(kristyInt === true && baobaoInt == true) {
    console.log("They will both get almond milk");
} else if (kristyInt === true || baobaoInt == true) {
    console.log("They will get milk and almond milk");
} else  {
    console.log("They will both get milk");
}

//Cupcake Challenge
let temp = 68;
if (temp < 68) {
    console.log("Too cold");
} else if (temp >= 68 && temp <= 72) {
    console.log("Perfect");
} else if (temp >= 73 && temp <= 76) {
    console.log("Warm");
} else {
    console.log("Too hot");
}

