// Use Just JavaScript
// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ul');

// buttonElement.addEventListener('click', addGoal);

// function addGoal() {
//     const enteredValue = inputElement.value;
//     const listItemElement = document.createElement('li');

//     listItemElement.textContent = enteredValue;

//     listElement.append(listItemElement);

//     inputElement.value = '';
// }

// Use VueJS
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = ''
        }
    },
}).mount('#app');