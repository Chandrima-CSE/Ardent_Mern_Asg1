// 6. Build a course management feature using arrays to add and remove courses.
let courses = ['HTML','CSS','Javascript','React','Node.js'];

function addcourse(course) {
    courses.push(course);
    return courses;
}

function removecourse(course) {
    const index = courses.indexOf(course);
    if (index !== -1) {
        courses.splice(index, 1);
    }
    return courses;
}
module.exports = {addcourse,removecourse};