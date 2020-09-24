var id = 0;
var y = 0;
var modal;

$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            y = window.pageYOffset;
            // href = $(this).attr('target').replace('#', '');
            href = $(this).attr('href').replace('#', '');

            if (href === 'reel') {
              modal = document.getElementById('reel');
            } else {
              var main_contents = document.getElementById('main_contents');
              main_contents.innerHTML = html.get(href);
              modal = document.getElementById('modal');
              // window.location.hash = href;
              history.replaceState(null,null,'/works/'+href);
            }

            scrollTo(0, 0);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        // window.location.hash = '';
        history.replace(null,null,'/works');
        scrollTo(0, y);
        return false;
    });
});


var html = new Map();
/*********************
 ******  VIDEO  ******
 *********************/
html.set('performing-arts-tamago',
`<div class="works_contents" name="performing-arts-tamago">
    <h2>「つくば駅→筑波大学　4種のダンス共に」Performing Arts Tamago Vol.22</h2>
    <div class="info">
      2020.06 / Choreo Video<br>
      Cinematographer / Editor
    </div>

    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/32P2vfq96-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p>
    「Performing Arts Tamago」は、ダンス部を引退した大学院生が自由に踊ったり、作品を発表する場が少ない背景から自主的に始まった企画です。毎年形を変えて継続的に身体表現の魅力を伝え続けています。
    22回目である2020年は「つくば駅→筑波大学　4種のダンスと共に」をコンセプトに映像作品として進化。つくば駅から始まり、道中で異なるスタイルのダンスパフォーマンスと出会いながら筑波大学までガイドしていきます。
    </p>

    <p>
      <strong>Credits</strong><br>
      Cinematographer, Editor : Tomoya Onuki <br>
      Producer : 筑波大学舞踊研究室 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank"><u>http://tsa.tsukuba.ac.jp/dance/</u></a><br>
      Cast : Risako Shibata / Asuki Nakanishi / Chiharu Hayami / Yui Miyakawa / Mei Yamamoto
    </p>
</div>`
);

html.set('mawase-groove-making',
`<div class="works_contents" name="mawase-groove-making">
    <h2><span>【MVメイキング映像】「回せ！」回せ！グルーヴ開発部</span></h2>
    <div class="info">
      2020.04 / Making Moive <br>
      Director / Cinematographer / Editor
    </div>

    <div class="mov">
      <iframe id="youtbe_player" src="https://www.youtube.com/embed/Zn46mk79o-E?rel=0&enablejsapi=1&origin=https://tomoya-onuki.github.io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p>セルフプロデュースアイドル「回せ!グルーヴ開発部」の1st Single「回せ！」のMV制作の様子を納めたメイキングムービー</p>

    <p>
      <strong>Credits</strong><br>
      Producer : 回せ！グルーヴ開発部 <a href="http://mawaguru.jp" target="_blank"><u>http://mawaguru.jp</u></a><br>
      Director, Cinematographer : Tomoya Onuki<br>
      Camera : Aomi Nowatari<br>
      Cast : Bon Kumono / Yuni Okota / Anzu Tamaki / Ryoma Suizu / Ryosuke Tsuzuki<br>
      Staff : Sakai<br>
    </p>
</div>
`);

// html.set('dancing-inside-tribute',
// `<div class="works_contents" name="dancing-inside-tribute">
//     <h2><span>うちで踊ろう</span></h2>
//     <div class="info">
//       2020.04 / Tribute Film <br>
//       Director / Cinematographer / Editor
//     </div>
//
//     <div class="mov">
//       <iframe  src="https://www.youtube.com/embed/-ILnREA4aX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     </div>
//
//     <p>
//       <strong>Credits</strong><br>
//       Director : Tomoya Onuki <br>
//     </p>
// </div>
// `);

html.set('express',
`<div class="works_contents" name="express">
    <h2><span>EXPRESS 筑波大学ダンス部</span></h2>
    <div class="info">
      2020.01 / Documentary Movie<br>
      Director / Cinematographer / Editor
    </div>

    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/videoseries?list=PL3o8pj9CICbPc5WQVUiTmUfTnWGDP6n2t" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p>
      2019年11月に開催された筑波大学ダンス部による自主公演「DANCE EXPRESS Vol.14」。
      その開催に至るまで、部員たちの二ヶ月間を追ったドキュメンタリー番組。全3話。
    </p>

    <p>
      <strong>Credits</strong><br>
      Producer : Sta2one <a href="https://www.instagram.com/sta2one" target="_blank"><u>https://www.instagram.com/sta2one</u></a><br>
      Cinematographer, Editor : Tomoya Onuki / Kaito Shidaraku / Shinnosuke Ando / Yuich Kato<br>
      Cast : 筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank"><u>http://tsa.tsukuba.ac.jp/dance/</u></a><br>
      Narrator : Gaku Matsumura<br>
      Special Thanks : 筑波大学舞踊研究室 / 筑波大学情報メディア創成学類 クリラボ管理チーム
    </p>
</div>
`);

html.set('yuragi',
`<div class="works_contents" name="yuragi">

    <h2><span>雙峰祭前夜祭パフォーマンスショー「ゆらぎ」ダイジェスト版 </span></h2>
    <div class="info">
      2019.11 / Digest Movie<br>
      Director / Cinematographer / Editor
    </div>

    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/MgjNDQPaecU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p>
      人々の持つ日常とは、非日常とは、果たして。そしてその境界はどんなものであろう。ゆらぎを以て、世界の認識を問いかける。
    </p>

    <p>
      <strong>Credits</strong><br>
      Director, Cinematographer, Editor : Tomoya Onuki <br>
      Cinematographer : Yui Atarashi<br>
      Producer : TParty <a href="https://twitter.com/tparty_tsukuba" target="_blank"><u>https://twitter.com/tparty_tsukuba</u></a><br>
      Cast : 筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank"><u>http://tsa.tsukuba.ac.jp/dance/</u></a><br>
      Music : Shion Kaneko<br>
      Special Thanks : リコージャパン / CTJ株式会社 / 筑波大学 学園祭実行委員会 <a href="https://sohosai.com" target="_blank"><u>https://sohosai.com</u></a>
    </p>
</div>
`);

html.set('tparty-launch',
`<div class="works_contents" name="tparty-launch">
    <h2>Tparty / Launch Party / ダイジェスト映像 Digest Video</h2>
    <div class="info">
      2019.06 / Digest Movie<br>
      Director / Cinematographer / Editor
    </div>

    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/uLGHA1VhZtA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p>2019/05/11にFrogで行ったTparty主催イベント「Launch party」のダイジェスト映像。</p>

    <p>
      <strong>Credits</strong><br>
      Director, Cinematographer, Editor : Tomoya Onuki <br>
      Producer : TParty <a href="https://twitter.com/tparty_tsukuba" target="_blank"><u>https://twitter.com/tparty_tsukuba</u></a><br>
      Special Thanks : Frog<br>
    </p>
</div>
`);

html.set('monoshiritori-making',
`<div class="works_contents" name="monoshiritori-making">

    <h2>モノシリトリ メイキング</h2>
    <div class="info">
      2017.10 / Digest Movie<br>
      Director / Cinematographer / Editor
    </div>

    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/videoseries?list=PLODDdOOKFDnIpvey6zz47Af9-RZXRZjz5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p>
      <strong>Credits</strong><br>
      Producer : Ryosuke Tsuzuki<br>
      Cast : Kazumi Inada / Minatatsu / Wikemasa / Syunpei Saito / Keita Kobayashi / Ryoma Suizu / Ryosuke Tsuzuki / Tsukumo99 / Yusuke Sei / Tomoya Onuki / Sakura Aikawa<br>
      Cinematographer, Director : Keita Kanai / Tomoya Onuki / Yuichi Kato / Momono Sakomura<br>
    </p>
</div>
`);

/*********************
 ******  ART  ********
 *********************/
html.set('in-the-black-and-eternal',
`<div class="works_contents">
  <h2>暗転と永遠の中で。</h2>
  <div class="info">2019.12 / Video Art</div>

  <div class="mov">
    <iframe src="https://www.youtube.com/embed/DdYMoKtYVlc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <h3>Caption</h3>
  <p>山手線の外側にある街。石神井川は深く冷たいコンクリートの堤防の下に静かに流れる。川に沿って葉の落ちた枝垂れ桜の並木道が伸び、住宅が立ち並ぶ。僕たちは眠る必要がある。眠らないネオンと都市の明かり。東京の端っこに追いやられた暗闇。<br>電車に乗る。女の子とのデートの朝。乗車口のあたりに立って、寄りかかる。やることもないのでイヤホンをつけて、外の景色に目をやる。音楽が流れてくる。電車が高架線に差し掛かると、隅田川が煌いて、僕はこの景色がいつまでも続くと思う。スカイツリーが見えた。</p>

  <h3>作品について</h3>
  <p>筑波大学 情報メディア創成学類の講義「ディジタルコンテンツ表現実習」の成果物として制作したビデオインスタレーション。同授業の最終成果発表会である「1/100展」にて展示した。東京の河川を通して、文明によって消え去った都市の暗闇と、日常でふと感じる永遠に続くかのような瞬間を表現した。</p>
  <p>映像：小貫 智弥<br>音楽：金子紫苑<br>1/100展：<a href="https://twitter.com/dgexpo2019" target="_blank"><u>https://twitter.com/dgexpo2019</u></a></p>
</div>
`);

html.set('lost-anima',
`<div class="works_contents">
  <h2>アニマの消失</h2>
  <div class="info">2019.05 / Media Art</div>

  <div class="mov">
    <iframe src="https://www.youtube.com/embed/aMkhraO-NBQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <p>廃墟に残された道具たち。アニマを失くし、個性を失った道具を手にとることでそこに残された「気配」を聞く作品である。筑波大学内にある廃墟となった学生宿舎「平砂9号棟」を舞台に開催された展覧会「平砂アートムーヴメント展示企画2019」にて展示。</p>
  平砂アートムーヴメント：<a href="https://hirasunaart2019.myportfolio.com" target="_blank"><u>https://hirasunaart2019.myportfolio.com</u></a>

  <h3>作品解説</h3>
  <p>この平砂 9 号棟は人が住まなくなり住居ではなくなってしまった。しかしながら私が初めてここへ立ち入った時，その見た目に反し，密かに漂う住居としての気配を確かに感じた。そこで道具に宿る魂 (アニマ) とその消失をテーマに表現を行うことに決めた。<br>机の上に並んだオブジェクトは道具のメタファーである。道具には用途があり，道具はその用途のための形状をしている。人に使われなくなり，魂が失われた道具には形が必要ないはずだ。<br>そこでここでは道具たちを 基本的な形状である立方体のオブジェクトとして表現している。道具は人が手に持って使うものであるので，人と道具の間に「手に持つ」 というインタラクションが必要であった。<br>人間は道具に限らずあらゆるものに名前をつけてきた。それは対象を「分ける」ためである。私たちは「分ける」ことで初めて対象を「分かる」 ことができる。均一な形になってしまった道具たちは 自身の名前を叫ぶことで鑑賞者に「分かる」ことを求める。オブジェクトから再生される音には，道具の名前を呼ぶ作者の声を引き延ばした音声を用いることとした。人が捨てられた道具の声に耳を傾けることは少ないだろう。彼らの声はとても小さく，また不気味である必要があった。<br>そして道具たちの見た目から魅力を最大限に削ぎ落とす必要もあった。魂や精霊のような表現に視覚情報を用いることは極力避けたかった。一見すると意味もないような箱から音が聞こえ，微かな震えを感じる。見ただけではわからない要素で，不可思議を感じてもらいたいと思う。</p>
</div>
`);

html.set('shape-of-monologue-aggregate',
`<div class="works_contents">
  <h2>ひとりごとのカタチ/ 集合体について</h2>
  <div class="info">2019.04 / Media Art</div>

  <h3>Caption</h3>
  <p>昨日のことすらもはや原型をとどめることはなく，ましてや1年も前のことなど手にとって見ることは叶わない。ぼんやりとした印象として眺めることしかできない。過去とはそういうものなのだと思う。</p>

  <h3>作品解説</h3>
  <p>筑波大学 情報メディア創成学類有志による展示会mAstivalにて展示した作品。自身の1年分のTwitterの投稿を抽出し、ある規則に基づき生成した幾何学図形を時系列順に並べた。ひとつひとつの記憶は朧げな印象でしかなく、またそれらは混じり合うことで別の印象として蓄積される。</p>
  <p>mAstival：<a href="https://mastival.netlify.app" target="_blank"><u>https://mastival.netlify.app</u></a></p>
  <img style="width:49%" src="./img/aggregation/aggregation01.jpg">
  <img style="width:49%" src="./img/aggregation/aggregation04.jpg">
</div>
`);

html.set('somewhere-far-away',
`<div class="works_contents">
  <h2>どこか遠くの場所で</h2>
  <div class="info">2018.10 / Exhibition</div>

  <p><i>旅先で撮った写真や描いた絵、買ったもの、拾ったもの... 私たちが持ち帰ってきた"お土産"です。</i></p>
  <p>筑波大学 情報メディア創成学類の2年生の有志による展示会。<br>
  「旅先で手に入れたおみやげ」というテーマで制作。CG，油絵，インスタレーション，メディアアートなど様々な分野の7つの作品を展示した。</p>
  <p>企画：小貫智弥<br>
    展示：安斎彩季，稲田和巳，小貫智弥，加藤優一，金子紫苑，種村優佑，松浦一輝<br>
    サウンド：金子紫苑<br>
    協力：岡本太久斗,筑波大学アートギャラリーT+</p>
  <p>場所：筑波大学アートギャラリーT+<br>
    日時：2018年10月1日(月)〜10月5日(金)<br>
    リンク：<a href="http://www.geijutsu.tsukuba.ac.jp/t-tasu/info/10554"><u>http://www.geijutsu.tsukuba.ac.jp/t-tasu/info/10554</u></a>
  </p>
  <img style="width:49%;" src="./img/somewhere/T+_image_sq.png">
  <img style="width:49%;" src="./img/somewhere/001.jpg">
  <img style="width:49%;" src="./img/somewhere/002.JPG">
  <img style="width:49%;" src="./img/somewhere/004.JPG">
  <img style="width:49%;" src="./img/somewhere/hoge.JPG">
  <img style="width:49%;" src="./img/somewhere/006.JPG">
</div>
`);

html.set('kalfos-box',
`<div class="works_contents">
  <h2>Kalfos Box</h2>
  <div class="info">2018.10 / Media Art</div>

  <div class="mov">
    <iframe src="https://www.youtube.com/embed/w3JQKhHGePs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <p>立体万華鏡のアニメーションを再生するためのメディア装置。展示企画「どこか遠くの場所で」にて展示した。</p>
</div>
`);

html.set('silence',
`<div class="works_contents">
  <h2>沈黙</h2>
  <div class="info">2017.10 / Media Art</div>

  <div class="mov">
    <iframe src="https://www.youtube.com/embed/2QbPcb0nLDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <p>「静止」通して「伝える」ことを思索した</p>
</div>
`);

/*********************
 ******  APP  ********
 *********************/
html.set('task-management-tool',
`<div class="works_contents">
  <h2>タスク管理ツール</h2>
  <a href="https://three-do.herokuapp.com" target="_blank"><u>https://three-do.herokuapp.com</u></a>
  <p>アジャイル開発で使用するかんばんをコンセプトに制作したアプリケーション</p>
  <img style="width:100%" src="./img/task/home.png">
  <img style="width:100%" src="./img/task/edit.png">
  <img style="width:100%" src="./img/task/mobile.png">
</div>
`);

html.set('color-selection',
`<div class="works_contents">
  <h2>COLOR SELECTION</h2>
  <a href="https://color-selection.herokuapp.com" target="_blank"><u>https://color-selection.herokuapp.com</u></a>
  <p>カラーデザインの支援ツール。色相を選び、明度と彩度を調整することで統一感のあるカラーデザインが可能となる。</p>
  <img style="width:100%" src="./img/color_selection/color_selection_web_ver3.gif">
</div>
`);

html.set('gohan-search',
`<div class="works_contents">
  <h2>ごっっはにゃさん</h2>
  <a href="https://tapiome.herokuapp.com" target="_blank"><u>https://tapiome.herokuapp.com</u></a>
  <p>筑波大学情報学群の講義 enPitにて制作したアプリケーション。<br>
  つくば市内の飲食店の情報をまとめたwebサービス。ユーザーの投稿によって休業情報を収集することができる。</p>
  <p>制作：新貝力哉 / 田之頭吾音 / 小貫智弥 / 末吉里帆 / 安斎彩季 / 古川栞</p>
  <img style="width:100%" src="./img/gohan/home.png">
  <img style="width:100%" src="./img/gohan/content.png">
</div>
`);

html.set('cube',
`<div class="works_contents">
  <h2>CUBE</h2>
  <p>筑波大学の講義 コンピュータアートIIの課題として制作し，その後リメイクしたゲーム作品。 MAD -創成x芸術合同展覧宴- にて展示。</p>
  <p>CUBEは全6ステージからなるアクションパズルゲームである。 各ステージをクリアするたびにキューブ状のコントローラーが1面ずつ点灯する。 点灯した面はタッチパネルとして機能しゲーム内で使用できるようになる。 ゲームの進行状況に応じてコントローラーの状態が変化し、操作が複雑になってゆくことで難易度が上がる仕組みになっている。</p>
  <p>製作 : 小貫 智弥 / 金子優香 / 町田樹</p>
  <p><a href="https://youtu.be/uMoFYdtHZxE" target="_blank"><u>Youtube</a></u></p>
  <img style="width:49.5%" src="./img/cube/pc_cube.JPG">
  <img style="width:49.5%" src="./img/cube/display.JPG">
  <img style="width:100%" src="./img/cube/cube.gif">
</div>
`);

html.set('fruits-cut',
`<div class="works_contents">
  <h2>FRUITS CUT!</h2>
  <p>筑波大学の講義，コンピュータアートIIの課題として制作したゲーム。<br>
  ダンボールから飛び出すフルーツを切るゲームである. 操作は手をかざすジェスチャだけで行う。センサーを搭載した段ボール箱型のインターフェースだけで全ての入力が完結するようになっている。</p>
  <p>製作 : 小貫 智弥 / 金子優香 / 町田樹</p>
  <p><a href="https://youtu.be/CzBQsBcDG3g" target="_blank"><u>Youtube</a></u></p>
  <img style="width:100%" src="./img/fruitscut/fruitscut.gif">
</div>
`);

html.set('megeilt-tweet-system',
`<div class="works_contents">
  <h2>ツイート共有システム</h2>
  <p>筑波大学において開催された, 情報メディア創成学類と芸術専門学群による合同プレゼンテーション企画「メ芸LT」にて使用したTwitter連携システムである。</p>
  <p>"#メ芸LT"というハッシュタグを添えてプレゼンに対する意見や感想を呟くとリアルタイムでそのTweetが映し出されるというものである。観客の参加感を増幅させることを目的として導入した。</p>
  <img style="width:100%" src="./img/megeilt/megeiLT.gif">
</div>
`);
