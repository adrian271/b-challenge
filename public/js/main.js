var prodReqNum = 4; //This is how many products are pulled for each request

$('p.product-sku, span.product-sku').each(function(){ //I tried and tried and could not find the reason for extra blank handlebars renderings
    if($(this).text() == "")                          //With more time to troubleshoot I'm confident I can debug it
        $(this).parents('.single-product').remove(); //Removing extras with jQuery
});

$('body').on('click','#getMoreProduct',function(){  //Press Button, Get Products
    var index = $('#contain .single-product').length;  //This looks at how many products are listed and uses count to figure out where to continue adding
    var $container = $('<div id="products-container" class="row"/>'); //Creates a wrapping div container for potential results
    var arr = []; //We are going to put our Database results in here
    for(var i=0;i<prodReqNum;i++){  //loop through 4x to get data
        var data = dataLayer[index+i]; //locates index of product
        if (data) {
            arr.push(data); //If there is any data to be found, push it to the array we created
        } else {
            $('#getMoreProduct').addClass('disabled').prop("disabled",true); //otherwise disable our button and break out of loop
            break;
        }
    }
    if(arr.length>0) {  //Checks to see if there was any data
        var productTemplate = $('#product-template').html();  //grab our client-side handlebars template
        var productCompile = Handlebars.compile(productTemplate); //compile it
        var productData = productCompile(arr); //apply data to our template
        $(productData).appendTo($container).fadeIn(); //take our processed template and apply the aforementioned wrapping div
        $('#contain').append($container); //append our work to our main product container
    }
});
