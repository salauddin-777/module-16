
const school = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(school.unique.color);
// school.unique.result.merit = 'top top top';
// console.log(school.unique.result.merit);
delete school.unique;

// school.events[0] = '16 dec';
// console.log(school.events[0]);a
console.log(school);