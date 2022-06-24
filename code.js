function taddItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("tbox").value;
    newItem.onclick = tremoveItem;
    document.getElementById("tlist").appendChild(newItem);
    tsaveList();
}
function tremoveItem() {
    document.getElementById("tlist").removeChild(this);
    saveList();
}
function tsaveList() {
    localStorage.storedList = document.getElementById("tlist").innerHTML;
}
function tloadList() {
    document.getElementById("tlist").innerHTML = localStorage.storedList;
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem;
    }

    if (localStorage.storedList) {
        loadList();
    }
}


function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("wbox").value;
    newItem.onclick = removeItem;
    document.getElementById("wlist").appendChild(newItem);
    saveList();
}
function removeItem() {
    document.getElementById("wlist").removeChild(this);
    saveList();
}
function saveList() {
    localStorage.storedList = document.getElementById("wlist").innerHTML;
}
function loadList() {
    document.getElementById("wlist").innerHTML = localStorage.storedList;
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem;
    }

    if (localStorage.storedList) {
        loadList();
    }
}
