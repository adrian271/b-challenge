var = Product = Backbone.Model.extend({
    defaults: {
        sku: '',
        name: '',
        price: ''
    }
});

var Products = Backbone.Collection.extend({});

var product1 = new Product({
    sku : 8675309,
    name : "AI Forever Boardshorts",
    price : 69.99
});

var ProductsView = Backbone.View.extend({
    model: new Product(),
    tagname: 'tr',
    initialize: function(){
        this.template = _.template($())
    }
});
