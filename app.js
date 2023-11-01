
let quizdata = [
    {
        question: "How many seconds are there in 1 minute",
        Options: [100, 80, 60],
        answer: 60,
    },

    {
        question: "How many months are there in 1 year",
        Options: [16, 12, 14],
        answer: 12,
    },

    {
        question: "How many minutes are ther in 1 hour",
        Options: [60, 80, 100],
        answer: 60,
    },

    {
        question: "How many hours are in half a day",
        Options: [16, 12, 24],
        answer: 12,
    },

    {
        question: "How many minutes are there in half an hour",
        Options: [25, 30, 45],
        answer: 30,
    },

    {
        question: "How many days are there in 1 year",
        Options: [365, 285, 100],
        answer: 365,
    },

    {
        question: "How many minutes are there in a quater of an hour",
        Options: [25, 30, 15],
        answer: 15,
    },
];


let dataView = document.querySelector(".data-view");

function quizApp() {

    let corrects =20;
    let wrong =0
    let result = 0;

    let quizArray = quizdata.map((quiz, index)=> {
        return `<div class="row my-3 py-2 justify-content-between">
                    <div class="left col-6 shadow">
                        <div class="d-flex">
                            <p class= "col-1">${index + 1}</p>
                            <p class="question" style="font-size: 20px">${quiz.question}</p>
                        </div>
                        <select name="" id="select-item" class="w-100 py-2">
                            <option value="" select-disabled>select an answer</option>
                            ${quiz.Options.map((option) => {
                                    return `<option value=${option}>${option}</option>`;
                            })}
                        </select>
                    </div>
                    <div class="right col-5 shadow">
                        <p class=selected>Selected answer: </p>
                        <p class=correct>Correct answer: </p>
                        <p class=status>Status: </p>
                    </div>
                </div>`;
    });
    
    dataView.innerHTML = quizArray.join(" ");
    
    let selectElement = document.querySelectorAll('select')

    selectElement.forEach((select, index) => {
        select.addEventListener("change", (event)=>{
            let selectValue = event.target.value;
            let picked = document.querySelectorAll(".selected")[index];
            picked.innerHTML = `Selected answer: ${selectValue}`;
            let correct = document.querySelectorAll(".correct")[index]
            correct.innerHTML = `Correct answer: ${quizdata[index].answer}`;
            

            if (quizdata[index].answer === selectValue) {
                document.querySelectorAll(".status")[index].innerHTML = `Status: Correct`;
                result += corrects;
                 document.querySelector(".result").innerHTML = `${result}/140`;
                
            } else {
                 document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
                 result += wrong;
                 document.querySelector(".result").innerHTML = `${result}/140`;
                  
            }
        });
    });
}

quizApp ();
//   });
//   let selectElement = document.querySelectorAll("select");

//   selectElement.forEach((select, index) => {
//     select.addEventListener("change", (event) => {
//       let selectValue = event.target.value;
//       let picked = document.querySelectorAll(".selected")[index];
//       picked.innerHTML = `Selected answer: ${selectValue}`;
//       let correct = document.querySelectorAll(".correct")[index];
//       correct.innerHTML = `Correct answer: ${quizData[index].answer}`;

//       if (quizData[index].answer === selectValue) {
//         document.querySelectorAll(".status")[
//           index
//         ].innerHTML = `Status: Correct`;
//         result += corrects;
//         document.querySelector(".result").innerHTML = `${result}/150`;
//       } else {
//         document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
//         result += wrong;
//         document.querySelector(".result").innerHTML = `${result}/150`;
//       }
//     });
//   });

