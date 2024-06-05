interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Cannot work from home"
    }
    
    getCoffeeBreak(): string {
      return "Getting a coffee break"
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks"
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home"
    }
    
    getCoffeeBreak(): string {
      return "Cannot have a break"
    }
  
    workTeacherTasks(): string {
      return "Getting to work"
    }
  }
  
  interface ICreateEmployee {
    (salary: number | string): Teacher | Director;
  }
  
  const createEmployee: ICreateEmployee = (salary) => {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  interface IIsDirector {
    (employee: Teacher | Director): boolean;
  }
  
  const isDirector: IIsDirector = (employee) => {
    return employee instanceof Director;
  }
  
  interface IExecuteWork {
    (employee: Teacher | Director): string;
  }
  
  const executeWork: IExecuteWork = (employee) => {
    if (isDirector(employee)) {
      return (employee as Director).workDirectorTasks();
    } else {
      return (employee as Teacher).workTeacherTasks();
    }
  }
  
  type Subjects = "Math" | "History";
  
  const teachClass = (todayClass: Subjects): string => {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else {
      return "Teaching History";
    }
  }