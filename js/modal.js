var id = 0;
var y = 0;
var modal;

$(function(){
    $(window).scroll(function() {
        var modal_h = $('.works_contents').height()+500;
        var window_h = $(this).height();
        var top_y = window.pageYOffset;
        // console.log(modal_h+", "+top_y+", "+(window_h+top_y) +" , "+ window_h);
        if ($('.works_contents').height() != null && window_h+top_y > modal_h) {
          scrollTo(0, modal_h - window_h);
        }
    });

    $('.js-modal-open').each(function(){

        $(this).on('click',function(){
            y = window.pageYOffset;

            href = $(this).attr('href').replace('#', '');
            if(html.has(href)) {
              insertContents(href);
              scrollTo(0, 0).delay(800);
            }
            return false;
        });
    });

    $('#prev,#next').each(function() {
      $(this).mouseup(function() {
          addNextPrevBtn(href);
      });
    });

    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        $('#main_contents').html('');
        history.replaceState(null,null,'/works');
        scrollTo(0, y);
        return false;
    });
});

function checkUrl() {
  var url = location.href;
  tmp = url.split('#');
  if( tmp.length == 2 && tmp[1] != '' && html.has(tmp[1]) ) {
    var href = tmp[tmp.length-1];
    insertContents(href);
    addNextPrevBtn(href);
  } else {
  }
}



function insertContents(href) {
  var ret = '';

  if( html.get(href)[0] != null )
    ret += '<h2>' + html.get(href)[0] + '</h2>';

  if( html.get(href)[1] != null )
    ret += '<div class="info">' + html.get(href)[1] +'</div>';

  if( html.get(href)[4] != null )
    ret += '<div class="works_contents"><div class="block_l">' + html.get(href)[4] + '</div>';

  if( html.get(href)[5] != null )
    ret += '<div class="block_r">' + html.get(href)[5] + '</div></div>';

    $('#main_contents').html( ret );
    $('.js-modal').fadeIn();

    // next / prevの表示or非表示
    if( html.get(href)[3] == null ) {
      $('#next').hide();
    } else {
      $('#next').show();
    }
    if( html.get(href)[2] == null ) {
      $('#prev').hide();
    } else {
      $('#prev').show();
    }
}

function addNextPrevBtn(href) {
  if( html.get(href)[2] != null ) {
    $('#prev').attr('href', '#'+html.get(href)[2]);
  }
  if( html.get(href)[3] != null ) {
    $('#next').attr('href', '#'+html.get(href)[3]);
  }
}

var html = new Map();
/*********************
 ******  VIDEO  ******
 *********************/
// html.set('important-thing',[
//   '大切なこと',
//   '2020.12 / Choreo Video / Cinematographer & Editor',
//   null,
//   'who',
//   `<div class="mov">
//     <iframe id="youtbe_player" src="https://www.youtube.com/embed/QbmW76Cp4s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//   </div>
//   `,
//   `<p>筑波大学ダンス部と共に制作した映像作品</p>
//   <h3>Caption</h3>
//   <p>一休みすること、心楽しむこと、泣くこと、信じること、人と出会うこと、その道を行くこと、下を向かないこと、忘れないこと</p>
//
//   <h3>Credits</h3>
//   <p>
//     Cinematographer, Editor : Tomoya Onuki<br>
//     Choreograher : Saki Ozawa<br>
//   </p>`,
// ]);
// html.set('who',[
//   '何者',
//   '2020.12 / Choreo Video / Cinematographer & Editor',
//   'important-thing',
//   'rush',
//   `<div class="mov">
//     <iframe id="youtbe_player" src="https://www.youtube.com/embed/QbmW76Cp4s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//   </div>`,
//   `<p>筑波大学ダンス部と共に制作した映像作品</p>
//   <h3>Caption</h3>
//   <p>表の顔に躍らされ</p>
//
//   <h3>Credits</h3>
//   <p>Cinematographer, Editor : Tomoya Onuki<br>
//   Choreograher : Kana Yamaguchi, Saki Ozawa<br></p>`,
// ]);

html.set('rush',[
  '迸る',
  '2020.12 / Choreo Video / Cinematographer & Editor',
  null,
  // 'who',
  'dance-ut-teaser',
  `<div class="mov">
    <iframe id="youtbe_player" src="https://www.youtube.com/embed/tTupddG3zk4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>筑波大学ダンス部と共に制作した映像作品</p>
  <h3>Caption</h3>
  <p>血によって動かされている</p>

  <h3>Credits</h3>
  <p>
    Cinematographer, Editor : Tomoya Onuki<br>
    Choreograher : Ayumi Moteki<br>
  </p>`,
]);

html.set('dance-ut-teaser',[
  '筑波大学ダンス部 - "迸る" / "何者" / "大切なこと" Dance Video Teaser',
  '2020.12 / Teaser Movie / Director, Cinematographer & Editor',
  'rush',
  'anzenkaihatsu-making',
  `<div class="mov">
    <iframe id="youtbe_player" src="https://www.youtube.com/embed/QzrSHUpORng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>筑波大学ダンス部と共に制作した映像作品のティザームービー</p>

  <h3>Credits</h3>
  <p>Cinematographer, Editor : Tomoya Onuki</p>`,
]);

html.set('anzenkaihatsu-making',[
  '【MVメイキング映像】「安全開発ソング」回せ！グルーヴ開発部',
  '2020.11 / Making Moive / Director & Editor',
  'dance-ut-teaser',
  'mawase-making',

  `<div class="mov">
    <iframe id="youtbe_player" src="https://www.youtube.com/embed/yfbeukjqiDc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>セルフプロデュースアイドル「回せ!グルーヴ開発部」の2ndSingle「開発者M」収録曲「安全開発ソング」のMV制作の様子を納めたメイキングムービー</p>

    <h3>Credits</h3>
    <p>
      Producer : 回せ！グルーヴ開発部 <a href="http://mawaguru.jp" target="_blank">http://mawaguru.jp</a><br>
      Director, Editor : Tomoya Onuki<br>
      Cast : Bon Kumono / Yuni Okota / Anzu Tamaki<br>
    </p>`,
]);


// html.set('performing-arts-tamago',[
//   '「つくば駅→筑波大学　4種のダンス共に」Performing Arts Tamago Vol.22',
//   `<div class="mov">
//     <iframe src="https://www.youtube.com/embed/32P2vfq96-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;   picture-in-picture" allowfullscreen></iframe>
//   </div>`,
//   `<div class="info">
//     2020.06 / Choreo Video<br>
//     Cinematographer / Editor
//   </div>
//   <p>
//   「Performing Arts Tamago」は、ダンス部を引退した大学院生が自由に踊ったり、作品を発表する場が少ない背景から自主的に始まった企画です。毎年形を変えて継続的に身体表現の魅力を伝え続けています。
//   22回目である2020年は「つくば駅→筑波大学　4種のダンスと共に」をコンセプトに映像作品として進化。つくば駅から始まり、道中で異なるスタイルのダンスパフォーマンスと出会いながら筑波大学までガイドしていきます。
//   </p>
//   <p>
//     <h3>Credits</h3>
//     Cinematographer, Editor : Tomoya Onuki <br>
//     Producer : 筑波大学舞踊研究室 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank">http://tsa.tsukuba.ac.jp/dance/</a><br>
//     Cast : Risako Shibata / Asuki Nakanishi / Chiharu Hayami / Yui Miyakawa / Mei Yamamoto
//   </p>`
// ]);

html.set('mawase-making',[
  '【MVメイキング映像】「回せ！」回せ！グルーヴ開発部',
  '2020.04 / Making Moive / Director , Cinematographer & Editor',
  'anzenkaihatsu-making',
  'express',
  `<div class="mov">
    <iframe id="youtbe_player" src="https://www.youtube.com/embed/Zn46mk79o-E?rel=0&enablejsapi=1&origin=https://tomoya-onuki.github.io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>セルフプロデュースアイドル「回せ!グルーヴ開発部」の1st Single「回せ！」のMV制作の様子を納めたメイキングムービー</p>

    <h3>Credits</h3>
    <p>
      Producer : 回せ！グルーヴ開発部 <a href="http://mawaguru.jp" target="_blank">http://mawaguru.jp</a><br>
      Director, Cinematographer : Tomoya Onuki<br>
      Camera : Aomi Nowatari<br>
      Cast : Bon Kumono / Yuni Okota / Anzu Tamaki / <a href="https://www.youtube.com/c/TsuzukiRyosuke" target="_blank">Ryoma Suizu</a> / <a href="https://ryomasuizu.myportfolio.com" target="_blank">Ryosuke Tsuzuki</a><br>
      Staff : Sakai<br>
    </p>`,
  ''
]);


html.set('express',[
  'EXPRESS 筑波大学ダンス部',
  '2020.01 / Documentary Movie / Director, Cinematographer & Editor',
  'mawase-making',
  'yuragi',
  `<div class="mov">
    <iframe  src="https://www.youtube.com/embed/videoseries?list=PL3o8pj9CICbPc5WQVUiTmUfTnWGDP6n2t" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>
    2019年11月に開催された筑波大学ダンス部による自主公演「DANCE EXPRESS Vol.14」。
    その開催に至るまで、部員たちの二ヶ月間を追ったドキュメンタリー番組。全3話。
  </p>

  <h3>Credits</h3>
  <p>
    Producer : Sta2one <a href="https://www.instagram.com/sta2one" target="_blank">https://www.instagram.com/sta2one</a><br>
    Cinematographer : Tomoya Onuki / Kaito Shidaraku / Shinnosuke Ando / Yuich Kato<br>
    Editor : <br>
    - Part1, Kaito Shidaraku / Tomoya Onuki<br>
    - Part2, Tomoya Onuki / Yuich Kato<br>
    - Part3, Shinnosuke Ando / Kaito Shidaraku / Tomoya Onuki<br>
    Cast : 筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank">http://tsa.tsukuba.ac.jp/dance/</a><br>
    Narrator : Gaku Matsumura<br>
    Special Thanks : 筑波大学舞踊研究室 / 筑波大学情報メディア創成学類 クリラボ管理チーム
  </p>`
]);

html.set('yuragi',[
  '雙峰祭前夜祭パフォーマンスショー「ゆらぎ」ダイジェスト版 ',
  '2019.11 / Digest Movie / Director, Cinematographer & Editor',
  'express',
  'tparty-launch',
  `<div class="mov">
    <iframe  src="https://www.youtube.com/embed/MgjNDQPaecU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>
    人々の持つ日常とは、非日常とは、果たして。そしてその境界はどんなものであろう。ゆらぎを以て、世界の認識を問いかける。
  </p>

  <h3>Credits</h3>
  <p>
    Director, Cinematographer, Editor : Tomoya Onuki <br>
    Cinematographer : Yui Atarashi<br>
    Producer : TParty <a href="https://twitter.com/tparty_tsukuba" target="_blank">https://twitter.com/tparty_tsukuba</a><br>
    Cast : 筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank">http://tsa.tsukuba.ac.jp/dance/</a><br>
    Music : <a href="https://shionkaneko.com" target="_blank">Shion Kaneko</a><br>
    Special Thanks : リコージャパン / CTJ株式会社 / 筑波大学 学園祭実行委員会 <a href="https://sohosai.com" target="_blank">https://sohosai.com</a>
  </p>`
]);

html.set('tparty-launch',[
  'Tparty / Launch Party / ダイジェスト映像 Digest Video',
  '2019.06 / Digest Movie / Director, Cinematographer & Editor',
  'yuragi',
  'monoshiritori-making',
  `<div class="mov">
    <iframe  src="https://www.youtube.com/embed/uLGHA1VhZtA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>2019/05/11にFrogで行ったTparty主催イベント「Launch party」のダイジェスト映像。</p>

  <h3>Credits</h3>
  <p>
    Director, Cinematographer, Editor : Tomoya Onuki <br>
    Producer : TParty <a href="https://twitter.com/tparty_tsukuba" target="_blank">https://twitter.com/tparty_tsukuba</a><br>
    Special Thanks : Frog<br>
  </p>`
]);

html.set('monoshiritori-making',[
  `モノシリトリ メイキング`,
  '2017.10 / Digest Movie / Director, Cinematographer & Editor',
  'tparty-launch',
  'in-the-black-and-eternal',
  `<div class="mov">
    <iframe  src="https://www.youtube.com/embed/videoseries?list=PLODDdOOKFDnIpvey6zz47Af9-RZXRZjz5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `
  <h3>Credits</h3>
  <p>
    Producer : Ryosuke Tsuzuki<br>
    Cast : Kazumi Inada / Minatatsu / Wikemasa / Syunpei Saito / Keita Kobayashi / Ryoma Suizu / Ryosuke Tsuzuki / Tsukumo99 / Yusuke Sei / Tomoya Onuki / Sakura Aikawa<br>
    Cinematographer, Director : Keita Kanai / Tomoya Onuki / Yuichi Kato / Momono Sakomura<br>
  </p>`
]);

/*********************
 ******  ART  ********
 *********************/
html.set('in-the-black-and-eternal',[
  '暗転と永遠の中で。',
  '2019.12 / Video Art',
  'monoshiritori-making',
  'lost-anima',
  `<div class="mov">
    <iframe src="https://www.youtube.com/embed/DdYMoKtYVlc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,

  `<p>筑波大学 情報メディア創成学類の講義「ディジタルコンテンツ表現実習」の成果物として制作したビデオインスタレーション。同授業の最終成果発表会である「1/100展」にて展示した。東京の河川を通して、文明によって消え去った都市の暗闇と、日常でふと感じる永遠に続くかのような瞬間を表現した。</p>

  <h3>Caption</h3>
  <p>山手線の外側にある街。石神井川は深く冷たいコンクリートの堤防の下に静かに流れる。川に沿って葉の落ちた枝垂れ桜の並木道が伸び、住宅が立ち並ぶ。僕たちは眠る必要がある。眠らないネオンと都市の明かり。東京の端っこに追いやられた暗闇。<br>電車に乗る。女の子とのデートの朝。乗車口のあたりに立って、寄りかかる。やることもないのでイヤホンをつけて、外の景色に目をやる。音楽が流れてくる。電車が高架線に差し掛かると、隅田川が煌いて、僕はこの景色がいつまでも続くと思う。スカイツリーが見えた。</p>

  <h3>Credits</h3>
  <p>映像：小貫 智弥<br>音楽：<a href="https://shionkaneko.com" target="_blank">金子紫苑</a><br></p>`
]);

html.set('lost-anima',[
  'アニマの消失',
  '2019.05 / Media Art',

  'in-the-black-and-eternal',
  'shape-of-monologue-aggregate',

  `<div class="mov">
    <iframe src="https://www.youtube.com/embed/aMkhraO-NBQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>
    廃墟に残された道具たち。アニマを失くし、個性を失った道具を手にとることでそこに残された「気配」を聞く作品である。筑波大学内にある廃墟となった学生宿舎「平砂9号棟」を舞台に開催された展覧会「平砂アートムーヴメント展示企画2019」にて展示。
  </p>

  <p>
    平砂アートムーヴメント：<a href="https://hirasunaart2019.myportfolio.com" target="_blank">https://hirasunaart2019.myportfolio.com</a><br>
    写真：松岡麻実
  </p>

  <p><h3>作品解説</h3>
  この平砂 9 号棟は人が住まなくなり住居ではなくなってしまった。しかしながら私が初めてここへ立ち入った時、その見た目に反し、密かに漂う住居としての気配を確かに感じた。そこで道具に宿る魂 (アニマ) とその消失をテーマに表現を行うことに決めた。<br>机の上に並んだオブジェクトは道具のメタファーである。道具には用途があり、道具はその用途のための形状をしている。人に使われなくなり、魂が失われた道具には形が必要ないはずだ。<br>そこでここでは道具たちを 基本的な形状である立方体のオブジェクトとして表現している。道具は人が手に持って使うものであるので、人と道具の間に「手に持つ」 というインタラクションが必要であった。<br>人間は道具に限らずあらゆるものに名前をつけてきた。それは対象を「分ける」ためである。私たちは「分ける」ことで初めて対象を「分かる」 ことができる。均一な形になってしまった道具たちは 自身の名前を叫ぶことで鑑賞者に「分かる」ことを求める。オブジェクトから再生される音には、道具の名前を呼ぶ作者の声を引き延ばした音声を用いることとした。人が捨てられた道具の声に耳を傾けることは少ないだろう。彼らの声はとても小さく、また不気味である必要があった。<br>そして道具たちの見た目から魅力を最大限に削ぎ落とす必要もあった。魂や精霊のような表現に視覚情報を用いることは極力避けたかった。一見すると意味もないような箱から音が聞こえ、微かな震えを感じる。見ただけではわからない要素で、不可思議を感じてもらいたいと思う。</p>`
]);

html.set('shape-of-monologue-aggregate',[
  'ひとりごとのカタチ/ 集合体について',
  '2019.04 / Media Art',
  'lost-anima',
  'somewhere-far-away',
  `<img src="./img/aggregation/aggregation01.jpg">
  <img src="./img/aggregation/aggregation04.jpg">`,

  `<p>筑波大学 情報メディア創成学類有志による展示会mAstivalにて展示した作品。自身の1年分のTwitterの投稿を抽出し、ある規則に基づき生成した幾何学図形を時系列順に並べた。</p>
  <h3>Caption</h3>
  <p>昨日のことすらもはや原型をとどめることはなく、ましてや1年も前のことなど手にとって見ることは叶わない。ぼんやりとした印象として眺めることしかできない。過去とはそういうものなのだと思う。</p>

  <h3>作品解説</h3>
  <p>過去のポストは上方に最近のポストは下方に配置することで時間の経過によって生まれる記憶との距離を、生成された幾何学図形は自然言語の曖昧さを意味する。ひとつひとつの記憶は朧げな印象でしかなく、またそれらは混じり合うことで別の印象として蓄積される様を表現した。</p>
  <p>mAstival：<a href="https://mastival.netlify.app" target="_blank">https://mastival.netlify.app</a></p>`
]);

html.set('somewhere-far-away',[
  `どこか遠くの場所で`,
  '2018.10 / Exhibition',
  'shape-of-monologue-aggregate',
  'kalfos-box',
  `<img src="./img/somewhere/001.jpg">
  <img src="./img/somewhere/002.JPG">
  <img src="./img/somewhere/004.JPG">
  <img src="./img/somewhere/hoge.JPG">
  <img src="./img/somewhere/006.JPG">
  <img src="./img/somewhere/T+_image_sq.png">`,

  `<p>筑波大学 情報メディア創成学類の2年生の有志による展示会。「旅先で手に入れたおみやげ」というテーマで制作。CG、油絵、インスタレーション、メディアアートなど様々な分野の7つの作品を展示した。</p>
  <h3>Theme</h3>
  <p>旅先で撮った写真や描いた絵、買ったもの、拾ったもの... 私たちが持ち帰ってきた"お土産"です。</p>

  <h3>Credits</h3>
    <p>企画：小貫智弥<br>
    展示：安斎彩季、<a href="https://www.nandenjin.com" target="_blank">稲田和巳</a>、小貫智弥、加藤優一、<a href="https://shionkaneko.com" target="_blank">金子紫苑</a>、種村優佑、松浦一輝<br>
    サウンド：<a href="https://shionkaneko.com" target="_blank">金子紫苑</a><br>
    協力：<a href="https://takuto-okamoto.com" target="_blank">岡本太久斗</a>、<a href="https://www.geijutsu.tsukuba.ac.jp/t-tasu/" target="_blank">筑波大学アートギャラリーT+</a></p>
  <p>
    場所：筑波大学アートギャラリーT+<br>
    日時：2018年10月1日(月)〜10月5日(金)
  </p>`
]);

html.set('kalfos-box',[
  'Kalfos Box',
  '2018.10 / Media Art',
  'somewhere-far-away',
  'silence',
  `<div class="mov">
    <iframe src="https://www.youtube.com/embed/w3JQKhHGePs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>立体万華鏡のアニメーションを再生するためのメディア装置。展示企画「どこか遠くの場所で」にて展示した。</p>`
]);

html.set('silence',[
  '沈黙',
  '2017.10 / Media Art',
  'kalfos-box',
  'task-management-tool',
  `<div class="mov">
    <iframe src="https://www.youtube.com/embed/2QbPcb0nLDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>「静止」通して「伝える」ことを思索した</p>`
]);

/*********************
 ******  APP  ********
 *********************/
html.set('task-management-tool',[
`タスク管理ツール`,
'2019.12 / WebApplication',
'silence',
'color-selection',
`<img src="./img/task/home.png">
<img src="./img/task/edit.png">
<img src="./img/task/mobile.png">`,
`<a href="https://three-do.herokuapp.com" target="_blank">https://three-do.herokuapp.com</a>
<p>アジャイル開発で使用するかんばんをコンセプトに制作したアプリケーション</p>`
]);

html.set('color-selection',[
'COLOR SELECTION',
'2019.10 / WebApplication',
'task-management-tool',
'gohan-search',
`<img src="./img/color_selection/color_selection_web_ver3.gif">`,
`<a href="https://color-selection.herokuapp.com" target="_blank">https://color-selection.herokuapp.com</a>
<p>カラーデザインの支援ツール。色相を選び、明度と彩度を調整することで統一感のあるカラーデザインが可能となる。</p>`
]);

html.set('gohan-search',[
`ごっっはにゃさん`,
'2019.8 / WebApplication',
'color-selection',
'cube',
`<img src="./img/gohan/home.png">
<img src="./img/gohan/content.png">`,
`<a href="https://tapiome.herokuapp.com" target="_blank">https://tapiome.herokuapp.com</a>
<p>筑波大学情報学群の講義 enPitにて制作したアプリケーション。<br>
つくば市内の飲食店の情報をまとめたwebサービス。ユーザーの投稿によって休業情報を収集することができる。</p>
<p>制作：新貝力哉 / 田之頭吾音 / 小貫智弥 / 末吉里帆 / 安斎彩季 / 古川栞</p> `
]);

html.set('cube',[
`CUBE`,
'2019.04 / Game',
'gohan-search',
'tokuen',
`<img src="./img/cube/pc_cube.JPG">
  <img src="./img/cube/display.JPG">
  <img src="./img/cube/cube.gif">`,
`<p>筑波大学の講義 コンピュータアートIIの課題として制作し、その後リメイクしたゲーム作品。 MAD -創成x芸術合同展覧宴- にて展示。</p>
<p>CUBEは全6ステージからなるアクションパズルゲームである。 各ステージをクリアするたびにキューブ状のコントローラーが1面ずつ点灯する。 点灯した面はタッチパネルとして機能しゲーム内で使用できるようになる。 ゲームの進行状況に応じてコントローラーの状態が変化し、操作が複雑になってゆくことで難易度が上がる仕組みになっている。</p>
<p>製作 : 小貫 智弥 / 金子優香 / 町田樹</p>
<p><a href="https://youtu.be/uMoFYdtHZxE" target="_blank">Youtube</a></p>
`
]);

html.set('tokuen',[
  `圧力センサーを用いた体重計とそのデータ管理システムの制作`,
  '2018.12 / IoT',
  'cube','fruits-cut',
  `<div class="mov">
    <iframe  src="https://www.youtube.com/embed/GCOoUg_GwHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`,
  `<p>筑波大学情報メディア創成学類の講義 情報メディア特別演習 にて取り組んだ。データ通信可能な体重計の制作と，計測した体重データを保存し閲覧できるアプリケーションの制作を行った。</p>
  <p> 玄関マットなどのマット状の体重計を作り体重を管理することで，日常生活に溶け込んだ形で自然に健康管理を行うことができるシステムを作ることが目的である。</p>
  <p> また，学習目標としてはArduinoを用いた組み込み系デバイスを制作する手法やセンサーを 用いたフィジカルコンピューティングを学習することである。</p>`
]);

html.set('fruits-cut',[
  `FRUITS CUT!`,
  '2018.12 / Game',
  'tokuen','megeilt-tweet-system',
  `<img src="./img/fruitscut/fruitscut.gif">`,
  `<p>筑波大学の講義、コンピュータアートIIの課題として制作したゲーム。<br>
  ダンボールから飛び出すフルーツを切るゲームである. 操作は手をかざすジェスチャだけで行う。センサーを搭載した段ボール箱型のインターフェースだけで全ての入力が完結するようになっている。</p>
  <p>製作 : 小貫 智弥 / 金子優香 / 町田樹</p>
  <p><a href="https://youtu.be/CzBQsBcDG3g" target="_blank">Youtube</a></p>`
]);

html.set('megeilt-tweet-system',[
  `ツイート共有システム`,
  '2018.05 / Installation System',
  'fruits-cut',
  null,
  `<img src="./img/megeilt/megeiLT.gif">`,
  `<p>筑波大学において開催された, 情報メディア創成学類と芸術専門学群による合同プレゼンテーション企画「メ芸LT」にて使用したTwitter連携システムである。</p>
  <p>"#メ芸LT"というハッシュタグを添えてプレゼンに対する意見や感想を呟くとリアルタイムでそのTweetが映し出されるというものである。観客の参加感を増幅させることを目的として導入した。</p>`
]);
