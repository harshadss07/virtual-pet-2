class food
    this.foodStock = null;
    this.lastFed = null;
    this.milkImg = loadImage("images/Milk.png")


getFoodStock()
    var foodStockref = database.ref('/');
    foodStockref.on('value', (data)=>{
        this.foodStock = data.val().Food;
        this.lastFed = data.val().FeedTime;
    });


updateFoodStock(quantity)
    this.foodStock = quantity;
    database.ref("/").update({
        FeedTime: hour(),
        Food:this.foodStock
    });


display()
    var posx = 400;
    var posy = 100;
    for(var i=0;i<this.foodStock;i++){
        if(i%10 == 0){
            posx = 400;
            posy = posy+50;
        }
        posx += 20;
        image(this.milkImg,posx,posy,50,50);
    }


