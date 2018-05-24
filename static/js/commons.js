function install() {
    alert('install');
}

function edit() {
    alert('edit');
}

function search() {
    var v = $('#search-input').val();
    if(v){
        alert(v);
    }
}

function selectALL() {
    $("input[type='checkbox']").prop("checked", true);
}

function cancelALL() {
    $("input[type='checkbox']").prop("checked", false);
}

function reversALL() {
    var v = $("input[type='checkbox']").prop("checked");
    if(v) {
        $("input[type='checkbox']").prop("checked", false);
    }else {
        $("input[type='checkbox']").prop("checked", true);
    }
}

function delete_items() {
    alert('delete');
}

function install_menu() {
    alert('1111');
}

function config_menu() {
    alert('1111');
}
