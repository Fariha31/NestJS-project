import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}
    @Get()
    getCustomers(): Customer[] {
        return this.customerService.getCustomers();
    }
    @Post()
    addCustomer(@Body() createCustomerDto: CreateCustomerDto): Customer {
        return this.customerService.addCustomer(createCustomerDto);
    }
}
