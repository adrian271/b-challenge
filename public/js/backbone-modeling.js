var Product = Backbone.Model.extend({
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

// var ProductsView = Backbone.View.extend({
//     model: new Product(),
//     tagname: 'tr',
//     initialize: function(){
//         this.template = _.template($('product-template').html());
//     },
//     render:function(){
//         this.$el.html(this.template({model:this.model.toJSON()}));
//     }
// });
var ProductsView = Backbone.View.extend({
    model: blogs,
    el: $('#products-container').html(),
    initialize: function() {
        var self = this;
        self.render();
    },
    tagname: 'tr',
    initialize: function(){
        this.template = _.template($('product-template').html());
    },
    render:function(){
        this.$el.html(this.template({model:this.model.toJSON()}));
    }
});

var products = new Products([product1]);

$('body').on('click','#getMoreProduct',function(){
    var product = new Product({

    });
});
