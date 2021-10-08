/*
Math.ceil(); //округляет к большему
Math.floor(); //округляет к меньшему
Math.round(); //правильное округление
Math.abs(); //модуль
Math.sqrt(); //квадратный корень
Math.cbrt(); //кубический корень
*/


const FIELD = document.querySelector('.game');
const TIME_BETWEEN_STEPS = 150; //ms

let canPressUp    = false,
    canPressRight = false,
    canPressDown  = false,
    canPressLeft  = false;

let timerUpId,
    timerRightId,
    timerDownId,
    timerLeftId;

const Hero = {
    element: document.querySelector('.hero'),

    heroInCenter: function () {
        this.element.style.top = '240px';
        this.element.style.left = '240px';
    },

    moveUp: function (step = 20) {
        if( (parseInt(getComputedStyle(this.element).top) - step) < 0 ){
            this.element.style.top = '480px';
        }else{
            this.element.style.top = (parseInt(getComputedStyle(this.element).top) - step) + 'px';
        };
    },
    moveRight: function (step = 20) {
        if( (parseInt(getComputedStyle(this.element).left) + step) > 480 ){
            this.element.style.left = '0px';
        }else{
            this.element.style.left = (parseInt(getComputedStyle(this.element).left) + step) + 'px';
        };
    },
    moveDown: function (step = 20) {
        if( (parseInt(getComputedStyle(this.element).top) + step) > 480 ){
            this.element.style.top = '0px';
        }else{
            this.element.style.top = (parseInt(getComputedStyle(this.element).top) + step) + 'px';
        };
    },
    moveLeft: function (step = 20) {
        if( (parseInt(getComputedStyle(this.element).left) - step) < 0 ){
            this.element.style.left = '480px';
        }else{
            this.element.style.left = (parseInt(getComputedStyle(this.element).left) - step) + 'px';
        };
    },
}

window.addEventListener("keydown", (e) => {
    // console.log(e);

    if ((e.code === 'KeyW' || e.code === 'ArrowUp') && canPressUp) {
        // 
        clearInterval(timerRightId);
        clearInterval(timerLeftId);

        canPressRight = true;
        canPressDown  = false;
        canPressLeft  = true;

        Hero.moveUp();

        timerUpId = setInterval(() => {
            Hero.moveUp();
        }, TIME_BETWEEN_STEPS);

        canPressUp = false;
    }

    if ((e.code === 'KeyD' || e.code === 'ArrowRight') && canPressRight) {
        clearInterval(timerUpId);
        clearInterval(timerDownId);

        canPressUp = true;
        canPressLeft  = false;
        canPressDown  = true;

        Hero.moveRight();

        timerRightId = setInterval(() => {
            Hero.moveRight();
        }, TIME_BETWEEN_STEPS);
        
        canPressRight  = false;
    };

    if ((e.code === 'KeyS' || e.code === 'ArrowDown') && canPressDown) {
        clearInterval(timerRightId);
        clearInterval(timerLeftId);

        canPressLeft = true;
        canPressUp  = false;
        canPressRight  = true;

        Hero.moveDown();

        timerDownId = setInterval(() => {
            Hero.moveDown();
        }, TIME_BETWEEN_STEPS);

        canPressDown = false;
    };

    if ((e.code === 'KeyA' || e.code === 'ArrowLeft') && canPressLeft) {
        clearInterval(timerUpId);
        clearInterval(timerDownId);

        canPressUp = true;
        canPressRight  = false;
        canPressDown  = true;

        Hero.moveLeft();

        timerLeftId = setInterval(() => {
            Hero.moveLeft();
        }, TIME_BETWEEN_STEPS);

        canPressLeft  = false;
    };
})

function startGame(){
    canPressUp    = true;
    canPressRight = true;
    canPressDown  = true;
    canPressLeft  = true;

    Hero.heroInCenter();
}

startGame();