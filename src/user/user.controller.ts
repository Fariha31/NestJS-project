import { Controller ,Get} from '@nestjs/common';

@Controller('user') //Decorator: base route for the controller
export class UserController {
    @Get() //Decorator: method to handle GET requests
    getUsers(): string {
        return 'Users data fetched successfully !!!';
    } //Method to handle GET requests
} //Class to handle user routes
