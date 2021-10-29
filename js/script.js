Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
            pippo: [
                "pluto",
                "gino",
            ],
            listaImg: [
                {
                    urlImg: 'img/01.jpg',
                    titolo: 'Svezia',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    urlImg: 'img/02.jpg',
                    titolo: 'Svizzera',
                    testo: 'Lorem ipsum',
                },
                {
                    urlImg: 'img/03.jpg',
                    titolo: 'Gran Bretagna',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    urlImg: 'img/04.jpg',
                    titolo: 'Germania',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    urlImg: 'img/05.jpg',
                    titolo: 'Paradise',
                    testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                }
            ]
        }
    });
});