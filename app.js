var item = document.querySelector('.item');
var quantity = document.querySelector('.quantity');
var savebtn = document.querySelector('#SaveItem');
var ModifyItem = document.querySelector('#ModifyItem');
var RemoveItem = document.querySelector('#RemoveItem');
var itemOutput = document.querySelector('#list');
var clearAll = document.querySelector('#ClearAll');


function doShowAll(){
    var key = "";
    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;
      //For a more advanced feature, you can set a cap on max items in the cart.
      for (i = 0; i <= localStorage.length-1; i++) {
        key = localStorage.key(i);
        list += "<tr><td>" + key + "</td>\n<td>"
                + localStorage.getItem(key) + "</td></tr>\n";
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
        list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }
    //Bind the data to HTML table.
    //You can use jQuery, too.
    document.getElementById('list').innerHTML = list;
}

savebtn.onclick = function(){
    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    console.log(name, data)
   
    doShowAll()
};

ModifyItem.onclick = function(){
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

            //Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList.data.value = localStorage.getItem(name1);
            }

            doShowAll()
}

RemoveItem.onclick = function() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value=localStorage.removeItem(name);

    doShowAll();
}

clearAll.onclick =  function() {
    localStorage.clear();
    doShowAll()
}

