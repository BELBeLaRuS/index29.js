// function showAlert(message, event) {
//     //alert(message);
//     //console.log(event);

//     let button = event.target;

//     console.dir(button);
//     button.innerText = message;
// }



let but = document.getElementById('button');
let butt = document.getElementById('butt');
let buttt = document.getElementById('buttt');
let butttt = document.getElementById('butttt');

// but.onclick = function() {
//     let p = document.createElement('p');
//     console.dir(p);
//     p.innerText = 'gsdgsdgsdbvn hfggdhfh hgfhf ghjgjgj';

//     document.body.append(p);
// }


but.onclick = function() {
    let p = document.getElementById('button');
    document.body.style.backgroundColor = "blue";

}

butt.onclick = function() {
let pp = document.getElementById('butt');
    document.body.style.backgroundColor = "red";
}

buttt.onclick = function() {
    let ppp = document.getElementById('buttt');
    document.body.style.backgroundColor = "orange";
}

window.onload = function() {
    var butto = document.getElementById('butto');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['blue', 'grey', 'black', 'white', 'red', 'green'];
    butto.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};

// function addText() {
//     let p = document.createElement('p');
//     console.dir(p);
//     p.innerText = 'gsdgsdgsdbvn hfggdhfh hgfhf ghjgjgj';

//     document.body.append(p);
// }



// // // but.addEventListener('click', function() {
// // //     let p = document.createElement('p');
// // //     console.dir(p);
// // //     p.innerText = 'gsdgsdgsdbvn hfggdhfh hgfhf ghjgjgj';

// // //     document.body.append(p);
    
// // // });



// function addFunction() {
//     let p = document.getElementById('but');
//     let pp = document.getElementById('butt');
//     let ppp = document.getElementById('buttt');

//     p = document.body.style.backgroundColor = 'blue';
//     pp = document.body.style.backgroundColor = 'gray';
//     ppp = document.body.style.backgroundColor = 'orange';
// }




function markTask(event) {
    let input = event.target;

    let parent = input.parentElement;
    parent.style.textDecoration = "line-through";
    input.disabled = true;
}






function addTask() {
    let list = document.querySelector("ul");
    let input = document.getElementById("task");

    let li = document.createElement("li");
    li.innerText = input.value;
    let check = document.createElement("input");
    check.addEventListener("click", markTask);



    check.type = "checkbox";

    li.prepend(check); 
    list.append(li);
    input.value = null;
}































































