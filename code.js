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
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
function removeItem() {
    document.getElementById("list").removeChild(this);
    saveList();
}
function saveList() {
    localStorage.storedList = document.getElementById("list").innerHTML;
}
function loadList() {
    document.getElementById("list").innerHTML = localStorage.storedList;
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem;
    }

    if (localStorage.storedList) {
        loadList();
    }
}
