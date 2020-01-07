// Write a function that takes an id as a parameter, it should look for an element with that id and remove all it’s child elements.

//
function clearHtml(id) {
    document.getElementById(id).innerHTML = '';
}

// works the best
let removeIt = (c) => {
    var parent = document.getElementById(c);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


// not working at the moment, need to fix the code a little.

// - reverse for loop
// function deleteAllChildById(n) {
//     let elements = document.querySelector(n);
//     let allChild = elements.children;
//     for (var i = 0; i < allChild.length; i++) {
//         elements.removeChild(allChild[i]);
//     }
// };
// deleteAllChildById("#info-field");