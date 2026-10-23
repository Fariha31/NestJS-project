import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}//Dependency Injection

    @Get()//HTTP GET request to the /category endpoint
    getAllCategories(): any[] {
        return this.categoryService.getCategories();//Call the getCategories method from the CategoryService
    }
}
