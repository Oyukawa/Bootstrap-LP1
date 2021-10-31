//ブラウザのリロード時にページの一番上から表示する
$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});


//--ナビゲーションバー--//
///ナビゲーションバーのメニュー押下時に閉じる///
$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function(){
  if(this.id != 'navbarDropdown'){
    $('.navbar-collapse').collapse('hide');
    $(this).toggleClass('active');
  }
});
///展開されたハンバーガーメニューを押下した際展開を閉じる///
$(".openbtn").click(function () {
  $(this).toggleClass('active');
});

$(".nav-item").click(function () {
  $(".openbtn").toggleClass('active');
});
