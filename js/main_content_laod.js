var html = new Map();
html.set('performing-arts-tamago',
`<div class="works_contents" name="performing-arts-tamago">
    <h3><span class="highlight">Performing Arts Tamago Vol.22</h3>
    <div>2020.06 / 撮影・編集 / ChoreoVideo<br>
    企画・制作：筑波大学舞踊研究室<br>
    協力：筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank"><u>http://tsa.tsukuba.ac.jp/dance/</u></a></div>
    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/32P2vfq96-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>`
);

html.set('mawase-groove-making',
`<div class="works_contents" name="mawase-groove-making">
    <h3><span class="highlight">【MVメイキング映像】「回せ！」回せ！グルーヴ開発部</h3>
    <div>2020.04 / 撮影・編集 / MakingMoive<br>
    企画：回せ！グルーヴ開発部 <a href="http://mawaguru.jp" target="_blank"><u>http://mawaguru.jp</u></a></div>
    <div class="mov">
      <iframe id="youtbe_player" src="https://www.youtube.com/embed/Zn46mk79o-E?rel=0&enablejsapi=1&origin=https://tomoya-onuki.github.io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
`);

html.set('dancing-inside-tribute',
`<div class="works_contents" name="dancing-inside-tribute">
      <h3><span class="highlight">うちで踊ろう</h3>
      <div>2020.04 / 監督・撮影・編集 / TributeFilm<br>
      music:Gen Hoshino</div>
      <div class="mov">
        <iframe  src="https://www.youtube.com/embed/-ILnREA4aX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
</div>
`);

html.set('express',
`<div class="works_contents" name="express">
    <h3><span class="highlight">EXPRESS 筑波大学ダンス部</h3>
    <div>2020.01 / 監督・撮影・編集 / Documentary Movie<br>
    制作：Sta2one <a href="https://www.instagram.com/sta2one" target="_blank"><u>https://www.instagram.com/sta2one</u></a><br>
    出演：筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank"><u>http://tsa.tsukuba.ac.jp/dance/</u></a><br>
    声　：松村岳<br>
    協力：筑波大学舞踊研究室 / 筑波大学情報メディア創成学類 クリラボ管理チーム</div>
    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/videoseries?list=PL3o8pj9CICbPc5WQVUiTmUfTnWGDP6n2t" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
`);

html.set('yuragi',
`<div class="works_contents" name="yuragi">

    <h3><span class="highlight">ゆらぎ</h3>
    <div>
      2019.11 / 監督・撮影・編集 / Digest Movie<br>
      制作：TParty <a href="https://twitter.com/tparty_tsukuba" target="_blank"><u>https://twitter.com/tparty_tsukuba</u></a><br>
      出演：筑波大学ダンス部 <a href="http://tsa.tsukuba.ac.jp/dance/" target="_blank"><u>http://tsa.tsukuba.ac.jp/dance/</u></a><br>
      主催：筑波大学 学園祭実行委員会 <a href="https://sohosai.com" target="_blank"><u>https://sohosai.com</u></a><br>
      協賛：リコージャパン / CTJ株式会社
    </div>
    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/MgjNDQPaecU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

</div>
`);

html.set('tparty-launch',
`<div class="works_contents" name="tparty-launch">
    <h3><span class="highlight">Tparty Launch Party / Digest Video</h3>
    <div>
      2019.06 / 監督・撮影・編集 / Digest Movie<br>
      制作：TParty <a href="https://twitter.com/tparty_tsukuba" target="_blank"><u>https://twitter.com/tparty_tsukuba</u></a><br>
      協力：Frog<br>
    </div>
    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/uLGHA1VhZtA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
`);

html.set('monoshiritori-making',
`<div class="works_contents" name="monoshiritori-making">

    <h3><span class="highlight">モノシリトリ / MakingMoive</h3>
    <div>2017.10 / 監督・撮影・編集 / Digest Movie</div>
    <div class="mov">
      <iframe  src="https://www.youtube.com/embed/videoseries?list=PLODDdOOKFDnIpvey6zz47Af9-RZXRZjz5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
`);

function roadContets(key) {
  var main_contents = document.getElementById('main_contents');
  main_contents.innerHTML = html.get(key);
  scrollTo(0, 0);
}
