import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * @title Product Details
 */
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
data:any;
id:any;
image:any;
name:any;
price:any;
description:any;
// {id: '1', image: 'https://www.shopbeesline.com/pub/media/catalog/pro…37b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg', name: 'Hydrogen', price: '1.0079', description: 'H', …}
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    if(this.activatedRoute.snapshot.params!=undefined){
      this.data=this.activatedRoute.snapshot.params;
      console.log(this.data);
      this.id=this.data['id'];
      this.image=this.data['image'];
      this.name=this.data['name'];
      this.price=this.data['price'];
      this.description=this.data['description'];

      

    }
      
   }
  
   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  redirect(){
    this.router.navigateByUrl('/products');
  }
  ngOnInit(): void {
  }

}
