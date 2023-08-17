
/*
----------------------------------------------------------------------------
Using JQuery and Javascript to generate answer key for SSC CGL/CHSL T1 exam
-----------------------------------------------------------------------------
@Author: Sagar Nandy

@Date: 2023-08-17

*/


// To change background color of the content under .grp-cntnr class

$('.grp-cntnr').css('background-color', '#fff');


/*
----------------------------------------------------------
 To change roll number, name and exam city from the page 
----------------------------------------------------------

*/

// to change text of roll number 

$('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(1)').text('Org ID');

// To change roll number

 $('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').text('SBagchi Combined');

 // convert roll number to uppercase

    $('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').text().toUpperCase();

 // change font size and color of roll number

    $('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').css('color', 'blue');
    $('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').css('font-size', '22px');

// To hide roll number

//$('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').hide();


$('.main-info-pnl table tbody tr:nth-child(2) td:nth-child(1)').text('@Powered By');


// To change name


$('.main-info-pnl table tbody tr:nth-child(2) td:nth-child(2)').text('https://www.nandysagar.in');

// change color of name and font size

$('.main-info-pnl table tbody tr:nth-child(2) td:nth-child(2)').css('color', 'red');
$('.main-info-pnl table tbody tr:nth-child(2) td:nth-child(2)').css('font-size', '20px');

// To change exam city

$('.main-info-pnl table tbody tr:nth-child(3) td:nth-child(2)').text('Sanitpur,Nadia, West Bengal');

// To change Color of exam city

$('.main-info-pnl table tbody tr:nth-child(3) td:nth-child(2)').css('color', 'red');

// To change font size of exam city

$('.main-info-pnl table tbody tr:nth-child(3) td:nth-child(2)').css('font-size', '20px');


/*******************
Add Watermark to Body 
***********************/

// use this code to add watermark to body using jquery

$('body').before('<div class="watermark">S.Bagchi Combined</div>');

// To change font size of watermark

$('.watermark').css('font-size', '80px');

// To change font weight of watermark

$('.watermark').css('font-weight', '500');

// To change color of watermark

$('.watermark').css('color', '#0d745e');

// To change position of watermark

$('.watermark').css('position', 'fixed');

// To change top position of watermark

$('.watermark').css('top', '0');

// To change left position of watermark

$('.watermark').css('left', '0');

// To change width of watermark

$('.watermark').css('width', '100%');

// To change height of watermark

$('.watermark').css('height', '100%');

// To change bottom position of watermark

$('.watermark').css('bottom', '0');

// To change right position of watermark

$('.watermark').css('right', '0');

// To change transform of watermark

$('.watermark').css('transform', 'rotate(-45deg)');

// To change display of watermark

$('.watermark').css('display', 'grid');

 $('.watermark').css('z-index', '1000');

// To change opacity of watermark

$('.watermark').css('opacity', '0.2');

// To change justify-content of watermark

$('.watermark').css('justify-content', 'center');

// To change align-content of watermark

$('.watermark').css('align-content', 'center');



// To change content of watermark

//$('.watermark').css('content', 'S.Bagchi Combined');

