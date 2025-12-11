function GetCurrentDateTime() {
    var myDate = new Date();

    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
    let monthsList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
     
    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let day = daysList[myDate.getDay()];

    //let today = `${date} ${month} ${year}, ${day}`;
    let today = `${month}/${twoNumeric(date)}/${year}`;

    let amOrPm;
    let twelveHours = function () {
        if (myDate.getHours() > 12) {
            amOrPm = 'PM';
            let twentyFourHourTime = myDate.getHours();
            let conversion = twentyFourHourTime - 12;
            return `${conversion}`

        } else {
            amOrPm = 'AM';
            return `${myDate.getHours()}`
        }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();
    let sec = myDate.getSeconds();

    let currentTime = `${twoNumeric(hours)}:${twoNumeric(minutes)}:${twoNumeric(sec)} ${amOrPm}`; 
    return today + "  " + currentTime;
}
function twoNumeric(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num
}


function GetCurrentDate() {
    var myDate = new Date();

    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
    let monthsList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let day = daysList[myDate.getDay()];

    //let today = `${date} ${month} ${year}, ${day}`;
    let today = `${month}/${twoNumeric(date)}/${year}`;

    let amOrPm;
    let twelveHours = function () {
        if (myDate.getHours() > 12) {
            amOrPm = 'PM';
            let twentyFourHourTime = myDate.getHours();
            let conversion = twentyFourHourTime - 12;
            return `${conversion}`

        } else {
            amOrPm = 'AM';
            return `${myDate.getHours()}`
        }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();
    let sec = myDate.getSeconds();
     
    return today;
}

function GetCurrentTime() {
    var myDate = new Date();
  
    let amOrPm;
    let twelveHours = function () {
        if (myDate.getHours() > 12) {
            amOrPm = 'PM';
            let twentyFourHourTime = myDate.getHours();
            let conversion = twentyFourHourTime - 12;
            return `${conversion}`

        } else {
            amOrPm = 'AM';
            return `${myDate.getHours()}`
        }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();
    let sec = myDate.getSeconds();

    let currentTime = `${twoNumeric(hours)}:${twoNumeric(minutes)}:${twoNumeric(sec)} ${amOrPm}`;
    return currentTime;
}


jQuery.fn.ForceNumericOnly =
    function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                // home, end, period, and numpad decimal
                return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    key == 188 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };

jQuery.fn.ForceNumericAndSlash =
    function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                // home, end, period, and numpad decimal
                return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    key == 188 || 
                    key == 191 || 
                    key == 111 || 
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };

     

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



function gradientLoading(trCount, tdCount) {
    var html;
    for (var x = 0; x < trCount; x++) {
        html += '<tr>';
        for (var i = 0; i < tdCount; i++) {
            html += '<td style="padding: 5px;"><div class="gradient element"></div></td>';
        }
        html += '</tr>';
    }
    return html;
} 
function gradientLoadingLabel(id) { 
    $("#" + id).html('<div class="gradient element"></div>'); 
}
 