// ***** 被験者の状態 *****

// 脳の状態
type StatusOfBrain = {
  experienceOfHypnotize: boolean; // 催眠術にかかった経験の有無
  rapport: "低" | "中" | "高"; // ラポールの深度
  alteredStateOfConsciousness: boolean; // 変性意識状態
  hypnotic:
    | "催眠状態"
    | "トランス状態"
    | "瞑想状態"
    | "乖離状態"
    | "覚低常態"
    | null; // 催眠の状態
  stress: "低" | "中" | "高"; // ストレス
};

// 肉体の状態
type StatusOfBody = {
  relaxation: "緊張" | "弛緩"; // 筋弛緩状態
  canOpenEyelids: boolean; // 瞼を自由に動かせるか
  canMoveNeck: boolean; // 首を自由に動かせるか
  canMoveFingers: boolean; // 指を自由に動かせるか
  canMoveArms: boolean; // 腕を自由に動かせるか
  canMoveLegs: boolean; // 脚を自由に動かせるか
};

// ***** 手法のパターン *****

// ラポール構築のパターン
type Raport = "催眠術解説" | "ミラーイング法" | "チューニング法";

// 被暗示性テストのパターン
type Tests = "硬直系" | "脱力系" | "感覚系" | "呼吸系" | "運動系";

// 催眠誘導のパターン
type Inductions = "筋弛緩法" | "生理応用法" | "驚愕法";

// 深化のパターン
type Deepening = "階段法" | "温感法" | "イマジネーションルーム";

// 暗示のパターン
type Suggestions = any;

// 覚醒暗示パターン
type Awakenings = "ロウソク法" | "血流法";

// ***** 変化しうる被験者の状態 *****

let brainStatus: StatusOfBrain = {
  experienceOfHypnotize: false,
  rapport: "低",
  alteredStateOfConsciousness: false,
  hypnotic: null,
  stress: "低",
};

let bodyStatus: StatusOfBody = {
  relaxation: "緊張",
  canOpenEyelids: true,
  canMoveNeck: true,
  canMoveFingers: true,
  canMoveArms: true,
  canMoveLegs: true,
};

// ***** 実際の催眠術の工程 *****

// ラポール構築
export const rapportConstruction = (tests: Raport, status: StatusOfBody) => {
  alert("自己紹介");

  switch (tests) {
    case "催眠術解説":
      alert(
        "催眠術はオカルトではなく技術です。これから催眠術のメカニズムについて説明します。"
      );
      brainStatus.rapport = "中";
      break;
    case "ミラーイング法":
      // TBD
      // 被験者の動作を真似る技術
      break;
    case "チューニング法":
      // TBD
      // 被験者の呼吸やテンポをコントロールする技術
      break;
  }
};

// 被暗示性テスト
export const impliednessTest = (tests: Tests) => {
  alert("これからあなたが催眠術にどれくらいかかりやすいかをテストします。");

  switch (tests) {
    case "硬直系":
      alert("指を組んで見てください。3つ数えるともう指は離れません。3,2,1");
      brainStatus.experienceOfHypnotize = true;
      bodyStatus.relaxation = "緊張";
      bodyStatus.canMoveFingers = false;
      break;
    case "脱力系":
      alert(
        "イメージしてください。頭の先から足の爪先へ力がすーっと抜けています。"
      );
      brainStatus.stress = "低";
      bodyStatus.relaxation = "弛緩";
      break;
    case "感覚系":
      alert(
        "掌に集中してください。血管の動きを意識してください。心臓から血が巡ってだんだんぽかぽかとしてきます。"
      );
      brainStatus.stress = "低";
      bodyStatus.relaxation = "弛緩";
      break;
    case "呼吸系":
      alert("一緒に深呼吸しましょう。ゆっくり吸って。ゆっくり吐いて");
      brainStatus.stress = "低";
      bodyStatus.relaxation = "弛緩";
      break;
    case "運動系":
      break;
  }
};

// 催眠誘導
export const induce = (induct: Inductions) => {
  switch (induct) {
    case "筋弛緩法":
      alert(
        "ゆっくり呼吸を続けてください。意識を腕にうつすと、力がすーっと抜けてだんだん重くなってきます。"
      );
      brainStatus.stress = "低";
      bodyStatus.relaxation = "弛緩";
      brainStatus.alteredStateOfConsciousness = true;
      break;
    case "生理応用法":
      alert(
        "手を額にぎゅっとおしつけてください。できるだけ強く押し続けてください。3つ数えたら離れなくなります。3,2,1"
      );
      brainStatus.stress = "中";
      bodyStatus.relaxation = "緊張";
      bodyStatus.canMoveArms = false;
      brainStatus.alteredStateOfConsciousness = true;
      break;
    case "驚愕法":
      alert(
        "私の掌をみつめてください。じっと、じーっとみつめて。すっと掌を近づけるとはがもう動かない。ふかーく、ふかーく、沈んでいく。"
      );
      brainStatus.stress = "中";
      bodyStatus.relaxation = "緊張";
      bodyStatus.canOpenEyelids = false;
      brainStatus.alteredStateOfConsciousness = true;
      break;
  }
};

// 深化
export const deepen = (deeply: Deepening) => {
  switch (deeply) {
    case "階段法":
      alert(
        "いまあなたの目の前には下りの階段があります。あなたはゆっくりと階段を降りていきます。20,19,18..."
      );

      // TBD
      // brainStatus.hypnotic をインクリメントする

      break;
    case "温感法":
      alert(
        "いまあなたは真夏の路上にいます。太陽が煌々と照りつけて汗をかきそうです。皮膚に集中してください。汗腺がぷつぷつ開いていく感覚がわかります。"
      );

      // TBD
      // brainStatus.hypnotic をインクリメントする

      break;
    case "イマジネーションルーム":
      alert(
        "いまあなたはなにもない真っ白い部屋にいます。これから5分時間をあげますので、そこで自由に過ごしてみてください。"
      );

      // TBD
      // brainStatus.hypnotic をインクリメントする

      break;
  }
};

// 暗示
export const suggest = (suggestion: Suggestions, status: StatusOfBrain) => {
  // TBD
  // brainStatus.hypnotic を判別して成功可否
};

// 覚醒暗示
export const awaken = (awake: Awakenings) => {
  switch (awake) {
    case "ロウソク法":
      alert(
        "あなたの目の前に一本のロウソクがあります。ロウソクの火はどんどん小さくなっていく。火が小さくなればなるほど、あなたにかけた暗示が弱まっていくのがわかります。"
      );

      // TBD
      // brainStatus.hypnotic をデクリメントし、 brainStatus.alteredStateOfConsciousness を false にする

      break;
    case "血流法":
      alert(
        "私の両手を握ってください。ゆっくりなんども力を入れてください。手に力がだんだんもどってきます。指先から全身に血が巡り、頭がはっきりしてきます。"
      );

      // TBD
      // brainStatus.hypnotic をデクリメントし、 brainStatus.alteredStateOfConsciousness を false にする

      break;
  }
};
