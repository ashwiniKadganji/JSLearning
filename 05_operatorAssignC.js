var args = function(gradScore,hscScore,sscScore,candidateName)
{
   var result = gradScore >= 70 || hscScore >= 80 ||sscScore >= 90?'You are Eligible for TCS':'Unfortunately you are not eligible for interview';
   console.log(`${candidateName}:${result}`);
}
args(80,86,90,'Ashwini');
args(70,65,55,'Renuka');
args(60,79,88,'Lavanya');

