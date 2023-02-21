'use strict';

{
    const CORRECT_ANSWERS = [
        {
            index: 1,
            value: '約79万人'
        },
        {
            index: 2,
            value: 'X-TECH'
        },
        {
            index: 0,
            value: 'Internet of Things'
        },
        {
            index: 0,
            value: 'Society 5.0'
        },
        {
            index: 0,
            value:'Web3.0'
        },
        {
            index: 1,
            value: '約5倍'
        }
    ];

    const allQuiz =document.querySelectorAll('.js-quiz');

    const labels = document.querySelectorAll('.p-quiz-box-label');

    console.log(labels[0])

    const setDisabled = answers => {
        answers.forEach(answer => {
            answer.disabled = true;
        })
    }

    const setTitle = (target, isCorrect) => {
        target.innerText = isCorrect ? '正解！' : '不正解...';
    }
    const setClassName = (target, isCorrect) => {
        target.ClassList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    }
    allQuiz.forEach(quiz => {
        const answers = quiz.querySelectorAll('.js-answer');
        const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
        console.log(quiz.querySelector('.js-answer'));
        console.log(quiz.getAttribute('data-quiz'));

        const answerBox = quiz.querySelector('.js-answerBox');
        const answerTitle = quiz.querySelector('.js-answerTitle');
        const answerText = quiz.querySelector('.js-answerText');

        answers.forEach(answer => {
            answer.addEventListener('click',() => {
                answer.classList.add('is-selected');
                const selectedAnswers = Number(answer.getAttribute('data-answer'));

                setDisabled(answers);

                const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswers;

                answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
                setTitle(answerTitle, isCorrect);
                setClassName(answerBox, isCorrect);
            })
        })
    })
}