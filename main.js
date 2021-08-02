window.onload = function () {
    document.getElementById('whatwedo').onclick = function () {
        window.scroll({
            top: 900,
            left: 900,
            behavior: 'smooth'
        })

        document.getElementById('whoweare').onclick = function () {
            window.scroll({
                top: 2500,
                left: 2500,
                behavior: 'smooth'
            })
        }

        // document.getElementById('contacts').onclick = function() {
        //     window.scroll({
        //         top: 2000,
        //         left: 2000,
        //         behavior: 'smooth'
        //     })
        // }

    }
}




var time = 2,
    cc = 1;
$(window).scroll(function () {
    $('#counter').each(function () {
        var
            cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 200) {
            if (cc < 2) {
                $(".number").addClass("viz");
                $('div').each(function () {
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                cc = cc + 2;
                                clearInterval(int);
                            }
                            i++;
                        }, step);
                });
            }
        }
    });
});

// const list = document.querySelector("ul");
// const body = document.querySelector("body");

// const ids = [
//     {
//         id: "whatwedo",
//         text: "What we do",
//     },
//     {
//         id: "whoweare",
//         text: "Who we are",
//     },
//     {
//         id: "jobs",
//         text: "Jobs",
//     },
//     {
//         id: "news",
//         text: "News",
//     },
//     {
//         id: "contacts",
//         text: "Contacts",
//     },
// ]

// ids.forEach(({ id, text, background }) => {
//     const item = document.createElement('li');
//     const a = document.createElement('a');
//     const section = document.createElement('section');
//     a.setAttribute('data-id', id);
//     a.setAttribute('href', `#${id}`);
//     a.innerHTML = text;

//     section.setAttribute('id', id);
//     section.style.backgroundColor = background;

//     item.appendChild(a);
//     list.appendChild(item);

//     body.appendChild(section);
// });

// let currentId;
// currentId = ids[0].id;

// window.addEventListener('scroll', () => {
//     const { scrollY } = window;

//     ids.forEach(({ id }) => {
//         const element = document.getElementById(id);
//         const { offsetTop, offsetHeight } = element;

//         if (
//             offsetTop - (offsetHeight / 2) <= scrollY && (offsetTop + offsetHeight / 2) > scrollY
//         ) {
//             const prevAnchor = document.querySelector(`a[data-id=${currentId}]`);
//             prevAnchor.classList.remove('active');

//             const anchor = document.querySelector(`a[data-id=${id}]`);
//             anchor.classList.add('active');

//             currentId = id;
//         }
//     });
// })