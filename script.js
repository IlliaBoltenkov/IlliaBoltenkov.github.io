var arr = [
    {
        id: 1,
        task: 'task1'
    },
    {
        id: 2,
        task: 'task2'
    },
    {
        id: 3,
        task: 'task0'
    }
          ];


function sort_name() {
    var sort_name = document.getElementsByClassName("task_name");
    var arr = [];
    for (var i = 0; i < sort_name.length; i++) {
        var id = sort_name.item(i).childNodes[0].innerHTML;
        var name = sort_name.item(i).childNodes[1].innerHTML;
        var obj = {
            id: id,
            task: name
        };
        arr.push(obj);
    }
    arr.sort(function (a, b) {
        if (a.task > b.task) {
            return 1;
        }
        if (a.task < b.task) {
            return -1;
        }
        return 0;
    });
    console.log(arr);
    clear_table();
    show(arr);
}

function sort_id() {
    var sort_name = document.getElementsByClassName("task_name");
    var arr = [];
    for (var i = 0; i < sort_name.length; i++) {
        var id = sort_name.item(i).childNodes[0].innerHTML;
        var name = sort_name.item(i).childNodes[1].innerHTML;
        var obj = {
            id: id,
            task: name
        };
        arr.push(obj);
    }
    arr.sort(function (a, b) {
        if (+a.id > +b.id) {
            return 1;
        }
        if (+a.id < +b.id) {
            return -1;
        }
        return 0;
    });
    console.log(arr);
    clear_table();
    show(arr);
}


function clear_table() {
    var table = document.getElementsByTagName("table");
    table.item(0).removeChild(document.getElementById("task"));
    var tbody = document.createElement("tbody");
    tbody.id = "task";
    table.item(0).appendChild(tbody);
}


function draw_table_tr(id, name) {
    var table = document.getElementById("task");
    var tr = document.createElement("tr");
    var td_id = document.createElement("td");
    var td_name = document.createElement("td");
    tr.className = "task_name";
    var remove = document.createElement("button");
    remove.innerHTML = "delete";
    remove.onclick = function () {
        remove_element(id);
        table.removeChild(tr);
    };
    table.appendChild(tr);
    tr.appendChild(td_id);
    tr.appendChild(td_name);
    tr.appendChild(remove);
    td_id.innerHTML = id;
    td_name.innerHTML = name;
}

function show(arr) {
    for (i = 0; i < arr.length; i++) {
        draw_table_tr(arr[i].id, arr[i].task);
    };
}



function add() {
    var id_task = document.getElementById("add_id").value;
    var task_name = document.getElementById("add_name").value;
    var obj = {
        id: id_task,
        task: task_name
    };
    arr.push(obj);
    draw_table_tr(id_task, task_name);

    console.log(arr);
}

function remove_element(elem_id) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == elem_id) {
            arr.splice(i, 1);
            break;
        }
    }
    console.log(arr);
}

window.onload = function () {
    show(arr);
}
