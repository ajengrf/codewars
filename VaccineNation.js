/* Vaccinations for children under 5

You have been put in charge of administrating vaccinations for children in your local area. Write a function that will generate a list of vaccines for each child presented for vaccination, based on the child's age and vaccination history, and the month of the year.

The function takes three parameters: age, status and month

The parameter 'age' will be given in weeks up to 16 weeks, and thereafter in months. You can assume that children presented will be scheduled for vaccination (eg '16 weeks', '12 months' etc).
The parameter 'status' indicates if the child has missed a scheduled vaccination, and the argument will be a string that says 'up-to-date', or a scheduled stage (eg '8 weeks') that has been missed, in which case you need to add any missing shots to the list. Only one missed vaccination stage will be passed in per function call.
If the month is 'september', 'october' or 'november' add 'offer fluVaccine' to the list.
Make sure there are no duplicates in the returned list, and sort it alphabetically.
*/


function vaccine(age, status, month) {
    // var fiveInOne = ['8 weeks', '12 weeks', '16 weeks'] //Protects against: diphtheria, tetanus, whooping cough, polio and Hib (Haemophilus influenzae type b)
    // var pneumococcal = ['8 weeks', '16 weeks'] //Protects against: some types of pneumococcal infection
    // var rotavirus = ['8 weeks', '12 weeks'] //Protects against: rotavirus infection, a common cause of childhood diarrhoea and sickness
    // var meningitisB = ['8 weeks', '16 weeks', '12 months'] //Protects against: meningitis caused by meningococcal type B bacteria
    // var hibMenC = ['12 months'] //Protects against: Haemophilus influenzae type b (Hib), meningitis caused by meningococcal group C bacteria    
    // var measlesMumpsRubella = ['12 months', '40 months'] //Protects against: measles, mumps and rubella
    // var fluVaccine = ['september', 'october', 'november'] //Given at: annually in Sept/Oct
    // var preSchoolBooster = ['40 months'] //Protects against: diphtheria, tetanus, whooping cough and polio

    var typeOfVaccine = [
        { name: 'fiveInOne', details: ['8 weeks', '12 weeks', '16 weeks'] },
        { name: 'pneumococcal', details: ['8 weeks', '16 weeks'] },
        { name: 'rotavirus', details: ['8 weeks', '12 weeks'] },
        { name: 'meningitisB', details: ['8 weeks', '16 weeks', '12 months'] },
        { name: 'hibMenC', details: ['12 months'] },
        { name: 'measlesMumpsRubella', details: ['12 months', '40 months'] },
        { name: 'offer fluVaccine', details: ['september', 'october', 'november'] },
        { name: 'preSchoolBooster', details: ['40 months'] }
    ]

    var hasil = []

    for (let i = 0; i < typeOfVaccine.length; i++) {
        for (let j = 0; j < typeOfVaccine[i].details.length; j++) {
            if (age == typeOfVaccine[i].details[j] || status == typeOfVaccine[i].details[j]) {
                hasil.push(typeOfVaccine[i].name)
                break
            }
            if (month == typeOfVaccine[i].details[j]) {
                hasil.push(typeOfVaccine[i].name)
            }

        }
    }
    hasil.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
    return hasil
}

console.log(vaccine('12 weeks', 'up-to-date', 'december'))
// output    ['fiveInOne', 'rotavirus']

console.log(vaccine('12 months', '16 weeks', 'june'))
// output     ['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal']

console.log(vaccine('40 months', '12 months', 'october'))
// output    ['hibMenC', 'measlesMumpsRubella', 'meningitisB', 'offer fluVaccine', 'preSchoolBooster']


/* SOLUTION FROM THE WEB
var list = {
  fiveInOne : ['8 weeks', '12 weeks', '16 weeks'],
  pneumococcal : ['8 weeks', '16 weeks'],
  rotavirus : ['8 weeks', '12 weeks'],
  meningitisB : ['8 weeks', '16 weeks', '12 months'],
  hibMenC : ['12 months'],
  measlesMumpsRubella : ['12 months', '40 months'],
  fluVaccine : ['september','october','november'],
  preSchoolBooster : ['40 months']
}

function vaccineList (age, status, month) {
  let output = [];
  for (let vac in list) {
    if (list[vac].includes(age) || list[vac].includes(status)) output.push(vac);
  }
  if (list.fluVaccine.includes(month)) output.push('offer fluVaccine');
  return output.sort((a,b) => a.localeCompare(b));
}
*/