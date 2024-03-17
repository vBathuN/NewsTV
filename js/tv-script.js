$(function() {    
    $('.tv-video').each(function() {  
        let image = $(this).attr('data-video');
        $(this).html('<img alt="" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioJLedIntqkRYGaEiWaM-kiVD1MiZz6mmuZsn4tF5UpZwYFlLJr0LsDwF__4jGu0LjMNLJuWBacs1UaFuBquFOkeaoJic2AdEBBYtvwbABv0QYQjfFdHPBNm5M-L1N1TUS9s5KlezcUbnPUhM4p73T2c9JfxoV-NjZ25wnge8FIkQlauahAfFfGo5ZqQs/s1600/rtcs.png" />');   
    });     
    $('.tv-video').click(function() {
        $(this).addClass('show');
        let video = $(this).attr('data-video');
        $(this).html('<iframe width="1280" height="720" src="https://s.rtcs.live/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
});