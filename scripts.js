var buttons1 = document.querySelectorAll(".non-oper");
var buttons2 = document.querySelectorAll(".oper");
var i;
//light when hover
for (i = 0; i < buttons1.length; i++) {
    //hover - lighter
    buttons1[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = '#f2f2f3';
    });
    //unhover - normL color
    buttons1[i].addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '#d8d9db';
    });
    //pressed - darker
    buttons1[i].addEventListener('mousedown', function(event) {
        event.target.style.backgroundColor = '#bdbec2';
    });
    //unpressed - lighter
    buttons1[i].addEventListener('mouseup', function(event) {
        event.target.style.backgroundColor = '#f2f2f3';
    });
}

////////////////////////////////////////////
//same with orange ones
for (i = 0; i < buttons2.length; i++) {
    buttons2[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = '#e4a867';
    });
    buttons2[i].addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '#df974c';
    });
    buttons2[i].addEventListener('mousedown', function(event) {
        event.target.style.backgroundColor = '#d98226';
    });
    buttons2[i].addEventListener('mouseup', function(event) {
        event.target.style.backgroundColor = '#e4a867';
    });
}
////////////////////////////////////////////////////////////
//number buttons
var nums = document.querySelectorAll(".num");
var input = document.querySelector(".input");
for (i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function(event) {
        if (input.innerText === '0') {
            input.innerText = event.target.innerText;
        } else {
            input.innerText = input.innerText + `${event.target.innerText}`;
        }
    });
};
//delete and reset buttons
var c = document.querySelector(".reset");
c.addEventListener('click', function() {
    input.innerText = '0';
});
var del = document.querySelector(".delete");
del.addEventListener('click', function() {
    if (input.innerText.length === 1) {
        input.innerText = '0';
    } else {
        input.innerText = input.innerText.slice(0, (input.innerText.length - 1))
    }
});
//evaluation of input
var string = '';
var operators = document.querySelectorAll(".oper");
var symbol;
for (i = 0; i < operators.length - 1; i++) {
    operators[i].addEventListener('click', function(event) {
        if (event.target.innerText === '÷') {
            symbol = '/';
        }
        else if (event.target.innerText === '×') {
            symbol = '*';
        }
        else {
            symbol = `${event.target.innerText}`;
        }
        string = string + input.innerText + symbol;
        input.innerText = '0';
    });
};
operators[operators.length - 1].addEventListener('click', function(event) {
    string = string + input.innerText;
    input.innerText = eval(string);
    string = '';
});
