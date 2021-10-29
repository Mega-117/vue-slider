Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
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
            ],
            classActive: "active",
            currentImgActive: 0,
        },

        methods: {
            prevImg() {
                let indexNuovaImg = this.currentImgActive - 1;
                if (indexNuovaImg < 0) {
                    indexNuovaImg = this.listaImg.length - 1;
                }

                this.currentImgActive = indexNuovaImg;
            },
            nextImg() {
                let indexNuovaImg = this.currentImgActive + 1;
                if (indexNuovaImg > this.listaImg.length - 1) {
                    indexNuovaImg = 0;
                }
                this.currentImgActive = indexNuovaImg;


            }
        }
    });
});