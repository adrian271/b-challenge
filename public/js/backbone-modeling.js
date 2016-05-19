var app = {}

//1 Product Model
app.Product = Backbone.Model.extend({ // Modeling product defaults
    defaults:{
        sku:"",
        name:"Boardshorts",
        price:""
    }
});

//1 Collection for Product Data
app.ProductRow = Backbone.Collection.extend({
    model:app.Product, //utilizes app.Product model assigned above
    url:"/api" //Pulls from our local api
});
//Collection Instanciation
app.productRow = new app.ProductRow();

//2 View Controllers
app.ProductView = Backbone.View.extend({  //View Controller for individual item
    tagName : 'div',
    attributes : {class:'single-product col-xs-12 col-md-6 col-sm-12 col-lg-3'}, //div attributes for each product
    template : _.template($('#product-template').html()),  //Template from index page
    render: function(){
        this.$el.html(this.template(this.model.toJSON())); //Render template file for View Controller
        return this;
    }
});
app.RowView = Backbone.View.extend({    //View Controller for adding a row of 4 products
    el:'body',                          //View Controller applied to body
    initialize:function(){
        app.productRow.on('update', this.addAll, this); //Anytime the page is loaded the addAll helper is called
        app.productRow.fetch();                         //Get inital product
    },
    events: {
            'click button': 'addMoreRows'           //event handler for click 'More Product' Button
    },
    addMoreRows:function(e){                        //helper adds more product when clicked
        app.productRow.fetch(this.addOne, this);    //add product row on click
    },
    addOne: function(product){                              //add product to the products-container
        var view = new app.ProductView({model: product});
        $('#products-container').append(view.render().el);
    },
    addAll: function(){                                     //initial load pushes all four products via addOne function
        app.productRow.each(this.addOne, this);
    }
});

app.rowView = new app.RowView();                        //Initialize the view,and we're up and running
