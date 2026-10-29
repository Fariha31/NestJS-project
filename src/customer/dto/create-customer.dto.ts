//DTO->Data Transfer Object
//To validate the data that is coming from the client
//Only name and age are required,no extra data is allowed and type is defined
export class CreateCustomerDto {
 name: string;
 age:number;
}