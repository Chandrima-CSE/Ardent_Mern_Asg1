// 3. Create a student result grading system using if-else conditions.

function grade(marks) {
    if (marks >= 90) {
        return "Grade O";
    } else if (marks >= 80) {
        return "Grade E";
    } else if (marks >= 70) {
        return "Grade A";
    } else if (marks >= 60) {
        return "Grade B";
    } else if (marks >= 50) {
        return "Grade C";
    } else {
        return "Fail";
    }
}

module.exports = grade;