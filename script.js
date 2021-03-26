class themeProp {
    constructor(name, background, textColor, switchPosition, switchColor, switchIcon) {
        this.properties = [];
        this.properties[0] = name;
        this.properties[1] = background;
        this.properties[2] = textColor;
        this.properties[3] = switchPosition;
        this.properties[4] = switchColor;
        this.properties[5] = switchIcon;
    }
}

const light = new themeProp("Light", "https://raw.githubusercontent.com/Duke0404/DayNightSwitch/main/images/Day.svg", "#454545", "flex-end", "#FFB800", "https://raw.githubusercontent.com/Duke0404/DayNightSwitch/main/images/sun.svg");
const dark = new themeProp("Dark", "https://raw.githubusercontent.com/Duke0404/DayNightSwitch/main/images/Night.svg", "#fff", "flex-start", "#70869e", "https://raw.githubusercontent.com/Duke0404/DayNightSwitch/main/images/moon.svg");
const root = document.documentElement;

function insertCSS(theme) {
    root.style.setProperty("--background", "url(" + theme.properties[1] + ") no-repeat center center fixed");
    root.style.setProperty("--text-color", theme.properties[2]);
    root.style.setProperty("--switch-position", theme.properties[3]);
    root.style.setProperty("--switch-color", theme.properties[4]);
    document.getElementById("switchIcon").setAttribute("src", theme.properties[5]);
    document.getElementById("themeName").innerHTML = theme.properties[0];
}

function themeSwitch() {
    
    if(darkTheme) {
        insertCSS(light);
    }
    else {
        insertCSS(dark);
    }
    darkTheme = !darkTheme;
}

let darkTheme = false;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch();
}
