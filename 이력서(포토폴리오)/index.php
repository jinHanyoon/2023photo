<?
include "../inc/head_mobile_sim.php";
$pageNum=2;
$subNum=1;
$leftNum=2;


### CUSTOM :: KTW :: 2014-11-19
include "../config/_init.php";
include "../config/page.class.php";

### ????? ID
$bo_table	= "pf_micro_list";

list($tmp_page) = $db->fetch("SELECT bo_page_rows FROM g5_board WHERE bo_table = '{$bo_table}'");

if (!$_GET['page_num']) $_GET['page_num'] = $tmp_page; # ?????? ??????

$where[] = "A.wr_id != ''";

if($stx){
if($sfl=="wr_mix"){
$where[] = "(A.wr_subject like '%{$stx}%' or A.wr_content like '%{$stx}%')";
}else{
$where[] = "A.{$sfl} like '%{$stx}%'";
}
}

$orderby = "A.wr_id DESC";

$pg = new Page($_GET[page],$_GET['page_num']);
$pg->field = "A.wr_id, A.wr_1, A.wr_subject, B.bf_file, A.wr_option";
$db_table = "g5_write_{$bo_table} A LEFT JOIN g5_board_file B ON A.wr_id = B.wr_id AND B.bo_table = '{$bo_table}' AND bf_no = 0";
$pg->setQuery($db_table, $where, $orderby);
$pg->exec();

$res = $db->query($pg->query);
?>


<body>



  <? include "../inc/gnb.php"; ?>

  <div class="posNum"></div>
        <section id="sec04">
          <div class="sec04_poster01">
            <div class="sec04_video">
              <!-- <video src="../video/video/newsnack.mp4" width="100%" height="100%"  loop autoplay ></video> -->
              <video src="./video/newsnack.mp4" width="100%" height="100%";  loop autoplay></video>

            </div>
          </div>
        </section>


        <section id="sec05">
          <div class="sec05_con">
            <div class="sec05_poster02">
              <div class="sec05_video01">
                <video src="../video/video/twitch.mp4" width="100%" height="100%"  loop ></video>
              </div>
            </div>
        </section>


<section id="sec06">
  <div class="sec06_con">
  <div class="sec06_poster03">
    <div class="sec06_video01">
      <video src="../video/video/foodzim.mp4" width="100%" height="100%"  loop ></video>
    </div> 
</div>
</div>
</section>


</body>
<script>
window.addEventListener("DOMContentLoaded", function () {
$(window).scroll(function () {
  // var video = $('.sec04_video > video').get(0);
      // video.play();
  var scrollTop = $(window).scrollTop();
  $(".posNum").text(scrollTop);
  console.log('clear')


    if (scrollTop > 400) {
      var video = $('.sec04_video > video').get(0);
      video.pause();
    }


    if (scrollTop >600 && scrollTop <1000) {
      var video = $('.sec05_video01 > video').get(0);
      video.play();
    }else{
      var video = $('.sec05_video01 > video').get(0);
      video.pause();
    }

    if (scrollTop > 1000 && scrollTop<=1900) {
      var video = $('.sec06_video01 > video').get(0);
      video.play();
    }else{
      var video = $('.sec06_video01 > video').get(0);
      video.pause();
    }
  });

})
</script>
</html>