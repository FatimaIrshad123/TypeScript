function totalspent(Transaction : {itemName: string,category: string, price: number}[]){
    
    let duplicates  = Transaction.map(x => x.category);
    function removeDuplicates(duplicates:any) { 
        return duplicates.filter((item:string, index:number) => duplicates.indexOf(item) === index); 
    } 
    var duplicatesarray = removeDuplicates(duplicates);

    var categoryobj:{category:string,totalExpense:number}[] = [];
    
    duplicatesarray.map(function(category:string,index:number){
     if (typeof category === 'string'){
            categoryobj.push({category, totalExpense:0});
        };
        var items = Transaction.filter(function(item){
            return (item.category) === category;
        });
        var total = items.reduce(function(acc,item){
            return acc + item.price;
        },0);
        categoryobj[index].totalExpense = total;
    });
    return categoryobj;
};

var totalExpense = totalspent([
    {
        itemName: "Shoes",
        category: "garments",
        price: 100,
        
    },
    {
        itemName: "car",
        category: "auto",
        price: 1000,
        
    },
    {
        itemName: "Shoes",
        category: "garments",
        price: 100,
        
    },
    {
        itemName: "bike",
        category: "auto",
        price: 140,
        
    },
    {
        itemName: "ketchup",
        category: "food",
        price: 50,
        
    },
    {
        itemName: "potato",
        category: "food",
        price: 50,
        
    },
]);
console.log(totalExpense);