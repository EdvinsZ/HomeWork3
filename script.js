console.log('Homework 3');

var myslider = document.getElementById('myslider');
var myoutput = document.getElementById('myoutput');
myoutput.innerHTML = myslider.value; 


myslider.oninput = function () {
    myoutput.innerHTML = this.value;
}

var mymain = document.getElementById('mymain');


function clearDivs() {
    mymain.innerHTML = null;
}


function generateDivs() {
    
    clearDivs();

    var mysliderValue = myslider.value;
    var myFizzValue = document.getElementById('myfizz').value;
    var myBuzzValue = document.getElementById('mybuzz').value;

    var mydivs = [];
    for (var i = 1; i <= mysliderValue; i++) {
        var mydiv = document.createElement('div');

        
        mydiv.id = 'myid' + i;

        
        if (i % myFizzValue === 0 && i % myBuzzValue === 0) {
            mydiv.className = 'fizbuz';
            mydiv.innerText = 'FizzBuzz - ' +i;
        } else if (i % myFizzValue === 0) {
            mydiv.className = 'fiz';
            mydiv.innerText = 'Fizz - '+i;
        } else if (i % myBuzzValue === 0) {
            mydiv.className = 'buz';
            mydiv.innerText = 'Buzz - '+i;
        } else {
            mydiv.className = 'num - ';
            mydiv.innerText = i;
        }

        mydivs.push(mydiv);
    }

    
    addNewRow(mydivs);
}

function addNewRow(mydivs) {
    var mycolumns = [];
    for (var j = 0; j < mydivs.length; j++) {
        var mycolumn = document.createElement('div');
        mycolumn.className = 'col';

        
        mycolumn.appendChild(mydivs[j]);
        mycolumns.push(mycolumn);
    }
    var myrow = document.createElement('div');
    myrow.className = 'row';

    for (var k = 0; k < mycolumns.length; k++) {
        
        myrow.appendChild(mycolumns[k]);
    }

    
    mymain.appendChild(myrow);
}



const myDeleteBtn = document.querySelector("#delete-btn-1");
const myDeleteBtn1 = document.querySelector("#delete-btn-2");
const myDeleteBtn2 = document.querySelector("#delete-btn-3");


//DELETE FIZ
$(document).ready(function(){ $("#delete-btn-1").click(function(){ 
    $(".fiz").remove();
  });
});

//DELETE BUZ
$(document).ready(function(){ $("#delete-btn-2").click(function(){ 
    $(".buz").remove();
  });
});

//DELETE FIZBUZ
$(document).ready(function(){ $("#delete-btn-3").click(function(){ 
    $(".fizbuz").remove();
  });
});

