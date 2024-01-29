function calcGrading(score){
    let gradingScore;
    switch(true){
        case (score <= 100 && score >= 90):
            gradingScore = "A";
            break;
        case (score <= 89 && score >= 70):
            gradingScore = "B";
            break;
        case (score <= 69 && score >= 60):
            gradingScore = "C";
            break;
        case (score <= 59 && score >= 0):
            gradingScore = "f";
            break;
        default: return "invaid Score";
    }
    return gradingScore;
}

const Rakib = calcGrading(35);
console.log(Rakib);