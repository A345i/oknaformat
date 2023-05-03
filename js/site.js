// Write your JavaScript code.

var dlb = jQuery.noConflict();
dlb(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    dlb(this).ekkoLightbox();
});


var st = jQuery.noConflict();
st(function () {
    st.fn.scrollToTop = function () {
        st(this).hide().removeAttr("href");
        if (st(window).scrollTop() != "0") {
            st(this).fadeIn("slow")
        }
        var scrollDiv = st(this);
        st(window).scroll(function () {
            if (st(window).scrollTop() == "0") {
                st(scrollDiv).fadeOut("slow")
            } else {
                st(scrollDiv).fadeIn("slow")
            }
        });
        st(this).click(function () {
            st("html, body").animate({ scrollTop: 0 }, "slow")
        })
    }
});
st(function () { st("#toTop").scrollToTop(); });


var sb = jQuery.noConflict();

//sb("#menu-toggle").click(function (e) {
//    e.preventDefault();
//    sb("#wrapper").toggleClass("toggled");
//});


sb(document).on('click', '[data-toggle="sidebar"]', function (event) {
    event.preventDefault();
    sb("#wrapper").toggleClass("toggled");
});


