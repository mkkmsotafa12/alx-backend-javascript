interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
  
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export const printTeacher: PrintTeacherFunction = (
    firstName: string,
    lastName: string
  ): string => `${firstName.charAt(0)}. ${lastName}`;
  
  interface StudentClassI {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  interface StudentClassConstructorI {
    new(firstName: string, lastName: string): StudentClassI;
  }
  
  class StudentClass implements StudentClassI {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  };
  
  const StudentClassConstructor: StudentClassConstructorI = StudentClass;
  
  const student = new StudentClassConstructor("Omar", "Salah");
  console.log(student.workOnHomework());
  console.log(student.displayName());