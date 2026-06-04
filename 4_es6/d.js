// 4. Build a course filtering system using filter() method.

function filterCourses() {
    const courses = ["Mern", "Mean", "Machine learning", "Node.js","React"];

    return courses.filter(course => course.includes("React"));
}

module.exports = filterCourses;