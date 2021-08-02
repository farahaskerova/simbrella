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

        document.getElementById('jobs').onclick = function() {
            window.scroll({
                top: 4000,
                left: 4000,
                behavior: 'smooth'
            })
        }

        document.getElementById('contacts').onclick = function() {
            window.scroll({
                top: 5000,
                left: 5000,
                behavior: 'smooth'
            })
        }

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

