(function () {

    $(function () {

        let timer = null

        let w = 300

        let h = 300

        show()

        timer = setInterval(function () {

            h+=10
            w+=10
            if (w === 500 || h === 500) {
                w = 300
                h = 300
            }

            show()


        }, 1000)


        function show() {
            $('#app').css({
                width: w + 'px',
                height: h + 'px',
                background: '#ff0000'
            })
        }





    })






})(jQuery)