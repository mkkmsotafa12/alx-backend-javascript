export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10
};

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());