let questionTxt = document.querySelectorAll('.question-txt');

questionTxt.forEach(function(question){
    const click = question.querySelector('span');
    click.addEventListener('click',function(){
        question.classList.toggle('show-txt');
        question.classList.toggle('style-qyestion-dark');
    });
});


// function removeAddClass(){
//     question.classList.toggle('show-txt');
// }