var products = [];
$(document).ready(function(){
    $('#add').click(function(){
        alert("click");
    var id=$("#pid").val();
    var name=$("#pname").val();
    var price=$("#pprice").val();    
    var product = {};
    product.id=id;
    product.name=name;
    product.price=price;
    products.push(product);
    console.log(products);

    clear();
    display();
    });
});
$('body').on('click', '#edit',function(){
    var pid = $(this).attr('data');
    console.log('edit=' + pid);
});
$('#result').on('click', '.delete',function(){
    alert("delete");
});
function clear(){
    $('input').val('');
}

function display(){
    var html = "";
    html += "<table>\
            <tr>\
            <th>ID</th>\
            <th>Name</th>\
            <th>Price</th>\
            <th>Action</th>\
            </tr>";
    for(var i = 0; i<products.length; i++){
        html +="<tr>\
        <td>"+products[i].id+"</td>\
        <td>"+products[i].name+"</td>\
        <td>"+products[i].price+"</td>\
        <td>\
        <a href='#'' data='"+products[i].id+"' id='edit'>EDIT</a>\
        <a href='#' class='delete' id='delete'>DELETE</a>\
        </td>\
        </tr>";
    }        
    html += "</table>";
    $("#result").html(html);
}