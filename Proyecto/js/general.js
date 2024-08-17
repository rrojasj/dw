document.querySelector('.navbar-style').addEventListener('mouseenter', function() {
    document.querySelector('.navbar-logo img').src = 'imgs/dw_p1_logo_db_sm_transp.svg';
});

document.querySelector('.navbar-style').addEventListener('mouseleave', function() {
    document.querySelector('.navbar-logo img').src = 'imgs/dw_p1_logo_lb_sm_transp.svg';
});