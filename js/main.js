$(document).ready(function(){
    // nav-menu
    $('.nav-menu').hide();
    $('.nav-menu-icon').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).hide().siblings('.clear-icon').removeClass('d-none').parent().siblings('.nav-menu').slideDown();
    });
    $('.clear-icon').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('d-none').siblings('.nav-menu-icon').show().parent().siblings('.nav-menu').slideUp();
    });
    // btn-filter
    $('.filter-menu').hide();
    $('.btn-filter').click(function(e){
        e.preventDefault();
        $(this).siblings('.filter-menu').slideToggle(500);
    });
    $('.new-to-old').click(function(e){
        e.preventDefault();
        $(this).parent().siblings().children('.btn-filter-text').text($(this).text());
    });
    $('.old-to-new').click(function(e){
        e.preventDefault();
        $(this).parent().siblings().children('.btn-filter-text').text($(this).text());
    });
    // FAQ
    $('.answer').hide();
    $('.FAQ-column').click(function(e){
        e.preventDefault();
        $(this).children('.answer').slideToggle(250);
        $(this).children().children('.add-icon').toggle().siblings('.remove-icon').toggleClass('d-none');
    });
});

// pagination

const page = document.querySelectorAll('.pagination a');

for(i=0;i<page.length;i++){
    page[i].addEventListener('click',function(e){
        e.preventDefault();
    },false);
}