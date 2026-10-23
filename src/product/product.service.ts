import { Injectable } from '@nestjs/common';

@Injectable() //Decorator: purpose to inject the service into the controller
export class ProductService {
    private products: any[] = [{
        id: 1,
        name: 'Product 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200
    }];
    getAllProducts(): any[] {
        return this.products; //Method to get products
    }
    getProductById(id: number): any {
        return this.products.find(product => product.id === id); //Method to get product by id
    }
} //Class to handle product routes
