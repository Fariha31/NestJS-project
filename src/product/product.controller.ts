import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    //Dependency injection: purpose to inject the service into the controller
    //inject my service ProductService into the controller ProductController with productService instance
    //the instance(productService) can access service's methods and properties
    constructor(private readonly productService: ProductService) {}
    @Get()
    getProducts(): any[] { //Method to get products
        return this.productService.getAllProducts(); //Method to get products from the service
    }
    @Get(':id') // here colon is used to define a dynamic route parameter and id is placeholder for the dynamic value

    //@Param decorator is used to extract the value of the dynamic route parameter
    // When we get id in url its type is always string so we need to convert it to number and we will use type casting
    getProductById(@Param('id') id: string): any { //Method to get product by id
        return this.productService.getProductById(Number(id)); //Method to get product by id from the service
    }
    
}
