function gradeCalculation(marks)
{
    var num = +marks;
    
    if (marks <= 0 || isNaN(num) || marks >= 100)
    {
        console.log(`Please provide the valid marks.`);
    }
    if (marks >= 90)
    {
        console.log(`Funtastic marks :${marks},Your grade is A+`);
    }
    if (marks >= 75 && marks <= 90)
    {
        console.log(`Excellent  marks ${marks}, Your grade is A.`);
    }
    if (marks >= 50 && marks <= 75)
    {
        console.log(`Good marks ${marks},Your grade is B.`);
    }
    
    if (marks >= 35 && marks <= 50)
    {
        console.log(`Marks ${marks},Your grade is C,Need Improvement.`);
    }
    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation('91');
gradeCalculation('eighty');
gradeCalculation(undefined);
gradeCalculation(null);
