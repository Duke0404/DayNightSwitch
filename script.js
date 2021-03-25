class themeProp {
    constructor(backgound, textColor, switchPosition) {
        this.backgound = backgound;
        this.textColor = textColor;
        this.switchPosition = switchPosition;
    }
}

let light = new themeProp(
    "url(images/day.svg) no-repeat center center fixed",
    "#454545",
    "flex-end",
);

let dark = new themeProp(
    "url(images/night.svg) no-repeat center center fixed",
    "#fff",
    "flex-startt",
);

var currentTheme = "light";

function insertValues(theme) {
    root.style.setProperty('--background', theme.backgound);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--switch-position', theme.switchPosition);
    currentTheme = theme.constructor.name;
}

function themeSwitch() {
    if(currentTheme = "light") {
        insertValues(dark);
    }

    else {
        insertValues(light);
    }
}