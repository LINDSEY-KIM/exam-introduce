(function(){

    // const man = {};

    // man.names = 'rose';
    // man.age = 25;
    // man.intro = function(){
    //     document.write('안녕 나는 rose야 나이는 25살이지.')
    // }

    // console.log(man)
    // man.intro()

    // const man = {
    //     names: 'rose',
    //     age: 35,
    //     intro: function () {
    //         document.write('안녕 나는 rose야 나이는 25살이지.');
    //     }
    // }


    // console.log(man)
    // man.intro()

    // const man_1 = {
    //     names: 'rose',
    //     age: 25,
    //     intro: function () {
    //         document.write(`안녕 나는 ${man_1.names}야 나이는 ${man_1.age}살이지.<br>`);
    //     }
    // }

    // const man_2 = {
    //     names: 'jenny',
    //     age: 23,
    //     intro: function () {
    //         document.write(`안녕 나는 ${this.names}야 나이는 ${this.age}살이지.<br>`);
    //     }
    // }

    // man_1.intro();
    // man_2.intro();

    //-------------------------------------------------------

    // const man = {
    //     names: 'rose',
    //     age: '24',
    //     intro: function(){
    //         document.write(`안녕 나는 ${this.names}야 나이는 ${}`)
    //     }
    // }

    // function Person(names, age){
    //     this.names = names;
    //     this.age = age;
    //     this.intro = function(){
    //         document.write(`안녕 나는 ${this.names}이야 나이는 ${this.age}살 이야`)
    //     }
    // }

    // const man_1 = new Person('rose','24');

    // man_1.intro();


    //----------------------------------
    // 버튼 생성 - 버튼 클릭시 입력창 2개  - 이름, 나이 - 입력값으로 소개를 출력할 수 있게 제작

    const btnEl = document.querySelector('button');

    function person(names, age){
        this.names = names,
        this.age = age
    }

    person.prototype.intro = function(){
        document.write(`안녕 내이름은 ${this.names}야, 나이는 ${this.age}세 이지<br>`);
    }

    const handleClick = () => {
        const inputName = prompt('이름');
        const inputAge = prompt('나이');

        const man = new person(inputName, inputAge);
        man.intro()
    }

    btnEl.addEventListener('click', handleClick)




})();