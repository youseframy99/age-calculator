let birthYearInput = document.getElementById("birthYear");
let birthmonthInput = document.getElementById("birthmonth");
let birthdayInput = document.getElementById("birthday");
let button = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let nextbirthday = document.getElementById("nextbirthday");
let caution =document.getElementById("caution");
let uncle = document.getElementById("uncle"); 
let uncletext = document.getElementById("uncletext");
let note = document.getElementById("note");
let emoji =document.getElementById("emoji");
const today = new Date();
const currentYear= today.getFullYear();
const currentMonth = today.getMonth () + 1;
const currentDate = today.getDate();

button.addEventListener("click", function () {
    let birthYear = birthYearInput.value;
    let birthmonth = birthmonthInput.value;
    let birthday = birthdayInput.value;
    if (birthYear === "" || birthmonth ==="" || birthday ==="") {
        result.textContent = "Please enter your birth year , month and day";
        nextbirthday.textContent=""
        return;
    }
    
   if (!Number.isInteger(Number(birthYear)) || !Number.isInteger(Number(birthmonth)) || !Number.isInteger(Number(birthday))) {
    result.textContent = "تعرف يا ابراص انت شخص مميز جدا لانك مفكر نفسك كدا ذكي يعني ؟؟!!! ممنوع الارقام العشرية يلا!!! اععععععع";
    nextbirthday.textContent = "";
    return;
}

    else if (birthYear > 2026 || birthYear < 1900){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }else if (birthmonth > 12 || birthmonth < 1){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
    return;
    }else if (birthday > 31 || birthmonth < 1){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }else if (birthmonth == 2 && birthday > 28) {
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }else if (birthmonth == 4 && birthday > 30){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }else if (birthmonth == 6 && birthday > 30 ){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }else if (birthmonth == 9 && birthday > 30){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }else if (birthmonth == 11 && birthday > 30){
        result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
        nextbirthday.textContent=""
        return;
    }
 if (birthday < 1){
   result.textContent="!انت مفكر نفسك كدا ذكي يعني؟"
   nextbirthday.textContent=""
   return;
 }
    let ageyear = currentYear - birthYear;
    let agemonth = currentMonth - birthmonth;
    let ageday = currentDate -birthday;
    if (ageday < 0){
        agemonth = agemonth - 1
    if (currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11){
        ageday = ageday + 30
    }else if (currentMonth == 2){
        ageday = ageday + 28
    }else {
        ageday = ageday +31
    }
    }
   if (agemonth < 0){
    ageyear = ageyear - 1
    agemonth = agemonth + 12
   }
    result.textContent = "Your age is " + ageyear +" years "+ agemonth +" months "+ ageday +" days";
  if (ageyear < 0){
    result.textContent= "!انت مفكر نفسك كدا ذكي يعني؟"
    nextbirthday.textContent=""
    return;
  }

let monthleft = 12 - agemonth;
let dayleft = ageday;
if (dayleft != 0){
    monthleft = monthleft - 1

    if (currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11){
        dayleft = 30 - dayleft
}else if (currentMonth == 2){
        dayleft = 28 - dayleft
    } else {
        dayleft = 31 - dayleft
    }
}
  let emoji ="🥳❤️🎂"
    nextbirthday.textContent="Your next Birthday is in " + monthleft +" months " + dayleft +" days"
if(currentMonth == birthmonth && currentDate == birthday ){
  nextbirthday.textContent =" Happy birthday to you " +emoji
  return;
}
    if (ageyear >= 18){
    caution.textContent= "You are not free if you are in Egypt "
}else if (ageyear < 18){
    caution.textContent=""
}
});
uncle.addEventListener("click", function(){
uncletext.textContent="اكيد عمك يبقى البابا ال ليو ميسي عم يوسف رامي اللي عمل الموقع ده"
note.textContent="ملاحظة: انا معنديش عم غير البابا ال ليو ميسي"
});