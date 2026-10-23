import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategories(): any[] {
        return ['Electronics', 'Clothing', 'Books'];
    }
}
