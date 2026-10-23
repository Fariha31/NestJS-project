import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students: any[] = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Doe', age: 21 },
        { id: 3, name: 'John Smith', age: 22 },
    ];

    getAllStudents(): any[] {
        return this.students;
    }
    getStudentById(id: number): any {
        const student = this.students.find(student => student.id === id);
        if (!student) {
            throw new NotFoundException('Student not found with this ID');//404 Not Found Error
        }
        return student;//Return the student object
    }
    createStudent(data: { name: string, age: number }): any {//data is an object with name and age properties       
        const newStudent = { id: this.students.length + 1, ...data };
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(id: number, data: { name: string, age: number }): any {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) {
            throw new NotFoundException('Student not found with this ID');
        }
        this.students[index] = { id, ...data };
        return this.students[index];
    }
    //partial is a type that allows you to pass only some of the properties of the object- it is prop of typescript
    patchStudent(id:number,data:Partial<{name: string, age: number}>): any {
        //get the student by id and update the student with the data
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }
    deleteStudent(id: number): any {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) {
            throw new NotFoundException('Student not found with this ID');
        }
        //splics returns array
       const deletedStudent = this.students.splice(index, 1);
        return {message: 'Student deleted successfully',student: deletedStudent[0]};
    }
}
