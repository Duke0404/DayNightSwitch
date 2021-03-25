// class themeProp {
//     constructor(background, textColor, switchPosition, switchColor) {
//         this.properties[0] = themeProp.constructor.name;
//         this.properties[1] = background;
//         this.properties[2] = textColor;
//         this.properties[3] = switchPosition;
//         this.properties[4] = switchColor;
//     }
// }

// let light = new themeProp("https://raw.githubusercontent.com/Duke0404/DayNightSwitch/41db579c1c80e5de377884981bc6c63cc3a339bd/images/Day.svg", "#454545", "flex-end", "#FFB800");
// let dark = new themeProp("https://raw.githubusercontent.com/Duke0404/DayNightSwitch/41db579c1c80e5de377884981bc6c63cc3a339bd/images/Night.svg", "#fff", "flex-start", "#70869e");
// let root = document.documentElement;
// let darkTheme = false;

// function themeSwitch() {
    
//     if(darkTheme) {
//         root.style.setProperty("--background", "url(" + light.properties[1] + ") no-repeat center center fixed");
//         root.style.setProperty("--text-color", light.properties[2]);
//         root.style.setProperty("--switch-position", light.properties[3]);
//         root.style.setProperty("--switch-color", light.properties[4]);
//         document.getElementById("themeName").innerHTML = light.properties[0];
//         darkTheme = false;
//     }
//     else {
//         root.style.setProperty("--background", "url(" + dark.properties[1] + ") no-repeat center center fixed");
//         root.style.setProperty("--text-color", dark.properties[2]);
//         root.style.setProperty("--switch-position", dark.properties[3]);
//         root.style.setProperty("--switch-color", dark.properties[4]);
//         document.getElementById("themeName").innerHTML = dark.properties[0];
//         darkTheme = true;
//     }
// }

let root = document.documentElement;
let darkTheme = false;

function themeSwitch() {
    
    if(darkTheme) {
        root.style.setProperty('--background', "url(images/day.svg) no-repeat center center fixed");
        root.style.setProperty('--text-color', "#454545");
        root.style.setProperty('--switch-position', "flex-end");
        root.style.setProperty('--switch-color', "#FFB800");
        document.getElementById("themeName").innerHTML = "Light";
        darkTheme = false;
    }
    else {
        root.style.setProperty('--background', "url(images/night.svg) no-repeat center center fixed");
        root.style.setProperty('--text-color', "#fff");
        root.style.setProperty('--switch-position', "flex-start");
        root.style.setProperty('--current-theme', "light");
        root.style.setProperty('--switch-color', "#70869e");
        document.getElementById("themeName").innerHTML = "Dark";
        darkTheme = true;
    }
}