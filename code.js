class Todo {
    addItem() {
        var newItem = document.createElement("div");
        newItem.innerHTML = document.getElementById("box").value;
        newItem.onclick = removeItem;
        document.getElementById("list").appendChild(newItem);
        saveList();
    }
    removeItem() {
        document.getElementById("list").removeChild(this);
        saveList();
    }
    saveList() {
        localStorage.storedList = document.getElementById("list").innerHTML;
    }
    loadList() {
        document.getElementById("list").innerHTML = localStorage.storedList;
        for (var i = 0; i < list.children.length; i++) {
            list.children[i].onclick = removeItem;
        }

        if (localStorage.storedList) {
            loadList();
        }
    }

}

let tododay = new Todo;

function todoadd() {
    tododay.addItem();
}

create();








