import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    //here type will be Customer[] because we are using the interface Customer
    private customers: Customer[] = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Doe', age: 21 },
        { id: 3, name: 'John Smith', age: 22 },
    ];
    getCustomers(): Customer[] {//[]->return type is array of customers
        return this.customers;
    }
    addCustomer(createCustomerDto: CreateCustomerDto): Customer {//->return type is customer
        //Create a new customer object with the data from the createCustomerDto
        //and add the new customer to the customers array
        const newCustomer: Customer = {
            id: this.customers.length + 1,
           ...createCustomerDto//->...->spread operator to copy the properties from the createCustomerDto
        };
        this.customers.push(newCustomer);//->add the new customer to the customers array
        return newCustomer;//->return the new customer
    }
}
