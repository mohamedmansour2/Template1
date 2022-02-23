// let gridOffset = $('.feat').offset().top;
// console.log(gridOffset)

$(window).scroll(function () 
{
    let ss = $('.features').offset().top;//445px
    let ll = $(window).scrollTop();
    if (ll > ss )
    {
        $('.header').css('position','fixed')
        $('.header').css('z-index','99999')
        $('.header').css('width','100%')
        $('.header').css('backgroundColor','rgba(0,0,0,0.5)')
    }
    else
    {
        $('.header').css('backgroundColor','transparent')
    }
})

$(window).scroll(function () 
{
    let ss = $('.features').offset().top;
    let ll = $(window).scrollTop();
    if (ll > ss )
    {
        $('#btnUp').show(200)
    }
    else
    {
        $('#btnUp').fadeOut(200)
    }
     
})
$('#btnUp').click(function () { 
    // $(window).scrollTop(0)
    $('html , body').animate({scrollTop:0},3000)
 })

 $('a').click(function()
 {
    let moo =  $('#Linksrevices').offset().top;
     $('html,body').animate({scrollTop:moo},1000)
 })