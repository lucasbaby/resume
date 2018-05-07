/**
 * Created by wanantwj on 2018/5/7.
 */
$(document).ready(function () {
    $('.menu-item').click(function (e) {

        e.preventDefault();
        $('.menu-item').removeClass('active');
        $(this).addClass('active');

        if (this.id === 'experience') {
            $('.box').addClass('hide');
            $('.experience').removeClass('hide');
        }
        else if (this.id === 'introduce') {
            $('.box').addClass('hide');
            $('.introduce').removeClass('hide');
        }
        else if (this.id === 'practice') {
            $('.box').addClass('hide');
            $('.practice').removeClass('hide');
        }
        else if (this.id === 'honor') {
            $('.box').addClass('hide');
            $('.honor').removeClass('hide');
        }else if (this.id === 'demo') {
            $('.box').addClass('hide');
            $('.demo').removeClass('hide');
        }
    });
});