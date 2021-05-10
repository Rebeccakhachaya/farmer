class Mkulima{
 
 
     constructor (farms,vendors,products,)
    {
         this.farms = [];
         this.vendors = [];
         this.products = [];
     
    }
     
    }
    class AddFarm extends Mkulima{
       constructor(farmId,name,farmer,phoneNumber,address){
       super(farmId,name,farmer,phoneNumber,address);
       console.log(this.farms.push(farmId,name,farmer,phoneNumber,address))
       }
    }
    let addFarm1= new AddFarm("56890id","Peter","FARM O0","072325678",07213456);
    console.log(addFarm1)
    // let addFarm2= new AddFarm("234787id","Rose mary","FARM 
    //11","078563536",789050);
  // console.log(addFarm2)
   
   class Removefarm extends Mkulima{
        constructor(farmId,name,farmer,phoneNumber,address){
           super(farmId,name,farmer,phoneNumber,address);
           return this.farms.shift(farmId);
        }
       }
       console.log( Removefarm);
   
   
   const farms={
     farmId:"56890id",
     name:"peter",
     farmer:"FARM O0",
     phoneNumber:"07564743230",
     address:"897j",
    set farms(updateFarm){
       return this.AddFarm=updateFarm
     }
   };
   console.log(AddFarm);
    const AddFarms={
     farmId:"56890id",
     name:"peter",
     farmer:"FARM O0",
     phoneNumber:"07564743230",
     address:"897j",
    get getAddFarms(){
       return this.farmId
     }
   };
   console.log(AddFarms.farmId);
       class Product extends Mkulima{
     constructor(productId,name,price)
     {
       super(productId,name,price);
       console.log(this.farms.push(productId,name,price))
       }
     }
     let product1= new Product("kenyabrand","soaps",120);
  console.log(product1)
   
  const products={
   productId:"unga",
   name:"exe",
   price:550,
   set  Product(updateProduct){
     return this.Product=updateProduct
   }
  };
  console.log(products);
   
   
   
  const product={
   productId:"kenyabrand",
   name:"soaps",
   price:120,
   get getProduct(){
    return this.productId
  }
  };
  console.log(product.productId);
  
    