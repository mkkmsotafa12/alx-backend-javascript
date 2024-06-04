export default function getListStudentIds(getListStudents) {
    if (typeof getListStudents !== 'object') {
        return [];
    }
    const listStudents = getListStudents;
    if (!Array.isArray(getListStudents)) {
        return [];
    }
    const listStudentIds = listStudents.map((student) => student.id);
    return listStudentIds;
}