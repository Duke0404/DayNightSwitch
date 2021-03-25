class themeProp {
    constructor(background, textColor, switchPosition, switchColor) {
        this.properties = [];
        this.properties[0] = themeProp.constructor.name;
        this.properties[1] = background;
        this.properties[2] = textColor;
        this.properties[3] = switchPosition;
        this.properties[4] = switchColor;
    }
}

const light = new themeProp("images/day.svg", "#454545", "flex-end", "#FFB800");
const dark = new themeProp("images/night.svg", "#fff", "flex-start", "#70869e");
const root = document.documentElement;
const themeName = document.getElementById("themeName");
let darkTheme = false;

function insertCSS(theme) {
    root.style.setProperty("--background", "url(" + theme.properties[1] + ") no-repeat center center fixed");
    root.style.setProperty("--text-color", theme.properties[2]);
    root.style.setProperty("--switch-position", theme.properties[3]);
    root.style.setProperty("--switch-color", theme.properties[4]);
    themeName.innerHTML = theme.properties[0];
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