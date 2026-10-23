import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployees(): string {
        return 'Employees data fetched successfully !!!';
    }
}
