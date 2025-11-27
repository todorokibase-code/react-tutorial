import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import shintaro from "../../public/image/player_image_001.jpg"
import moruten from "../../public/image/player_image_002.jpg"
import './style.css'

//　プレイヤーデータ
const PLAYER = {
    image_src: shintaro,
    profile: {
        handle_name: "しんたろー",
        age: 27,
        introduction: "<p>その爽やかな語り口と裏腹に鋭い情報分析力と論理的な厳格さを兼ね備えたプレイヤー。<br />スタイルは「冷静な理論派ハンター」と評されます。<br />感情に流されることなく、盤面を整理し、一貫したロジックで人外（人狼陣営）を追い詰める！</p>"
    },
    stats: {
        Impact: 92,
        Structure: 95,
        Insight: 91,
        Logic: 98,
        Originality: 87,
        Instinct: 86,
    }
}

// スコア項目
const SCORE_ITEM = ["議論力", "盤面整理力", "洞察力", "論理的思考能力", "オリジナル性", "直感力"];

// 2分のルート3
const MS_3_2 = Math.sqrt(3) / 2;

// プレイヤー画像コンポーネント
const PlayerImage = ({ player }) => {
    return (
        <>
            <div>
                <p>{player.profile.handle_name}</p>
                <img src={player.image_src} />
            </div>
        </>
    )
}

// スタッツボードコンポーネント
const StatsBoard = ({ stats, onStatsChange }) => {
    let total = 0;
    for (let o in stats) {
        total += Number(stats[o]);
    }
    return (
        <>
            <div style={{ alignmentBaseline: "flex-start", marginTop: "auto", marginBottom: "auto" }}>
                <StatsScore stats={stats} onScoreTextChange={onStatsChange} />
            </div>
            <div style={{ alignmentBaseline: "flex-start", }}>
                <p>TOTAL:{total}</p>
                <RadarChart stats={stats} />
            </div>
        </>
    )
}

// スタッツスコアコンポーネント
const StatsScore = ({ stats, onScoreTextChange }) => {
    const scoreItem = ["議論力", "盤面整理力", "洞察力", "論理的思考能力", "オリジナル性", "直感力"]
    const handleChange = (e) => {
        const item = e.target.id;
        const value = e.target.value;
        const newStats = {
            ...stats,
            [item]: value,
        }
        onScoreTextChange(newStats);
    }
    const scoreRows = Object.keys(stats).map((key, id) => {
        return (
            <tr key={id}>
                <th>{SCORE_ITEM[id]}</th>
                <td><input id={key} type="number" value={stats[key]} onChange={handleChange} /></td>
            </tr>

        )
    })
    return (

        <table>
            <caption>
                ※数値を変更できます
            </caption>
            <tbody>
                {scoreRows}
            </tbody>
        </table>
    )
}
// RadarChartコンポーネント
const RadarChart = ({ stats }) => {
    const { Impact, Structure, Insight, Logic, Originality, Instinct } = stats;

    const coordinate = []
    // 各項目の頂点の座標を配列に追加
    coordinate.push({ x: 100, y: (100 - Impact) }); // 真上の頂点
    coordinate.push({ x: (100 + (Structure * (MS_3_2))), y: 100 - (Structure / 2) }) // 右上の頂点
    coordinate.push({ x: (100 + (Insight * (MS_3_2))), y: 100 + (Insight / 2) }) // 右下の頂点
    coordinate.push({ x: 100, y: (100 + Number(Logic)) }); // 真下の頂点
    coordinate.push({ x: (100 - (Originality * (MS_3_2))), y: 100 + (Originality / 2) }) // 左下の頂点
    coordinate.push({ x: (100 - (Instinct * (MS_3_2))), y: 100 - (Instinct / 2) })// 左上の頂点

    // レーダーチャートのパスを作成
    let rPath = ""
    for (let i = 0; i < coordinate.length + 1; i++) {
        if (i == 0) {
            rPath += `M ${coordinate[i]['x']} ${coordinate[i]['y']} `

        } else if (i < coordinate.length) {
            rPath += `L ${coordinate[i]['x']} ${coordinate[i]['y']} `
        } else if (coordinate.length == i) {
            rPath += `L ${coordinate[0]['x']} ${coordinate[0]['y']}`
        }
    }

    // レーダーチャートの頂点を描画
    const circles = [];
    coordinate.forEach((e, id) => {
        circles.push(
            <circle key={id} cx={e['x']} cy={e['y']} r="3" />
        )
    })
    let j = 0;
    return (
        /**class radar-chart-3にpadding 35px指定してある。 */
        <div className="radar-chart-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ overflow: "visible" }}>

                {/**中央から広がる直線 */}
                <g stroke="#dce5eb">
                    <path d="M 100 100 L 100.0 0.0" />
                    <path d="M 100 100 L 186.6 50.0" />
                    <path d="M 100 100 L 186.6 150.0" />
                    <path d="M 100 100 L 100.0 200.0" />
                    <path d="M 100 100 L 13.4 150.0" />
                    <path d="M 100 100 L 13.4 50.0" />
                </g>
                {/**　内側の枠線*/}
                <g stroke="#dce5eb" fill="none">
                    <path d="M 100.0 0.0 L 186.6 50.0 L 186.6 150.0 L 100.0 200.0 L 13.4 150.0 L 13.4 50.0 L 100.0 0.0" />
                    <path d="M 100.0 16.7 L 172.2 58.3 L 172.2 141.7 L 100.0 183.3 L 27.8 141.7 L 27.8 58.3 L 100.0 16.7" />
                    <path d="M 100.0 33.3 L 157.7 66.7 L 157.7 133.3 L 100.0 166.7 L 42.3 133.3 L 42.3 66.7 L 100.0 33.3" />
                    <path d="M 100.0 50.0 L 143.3 75.0 L 143.3 125.0 L 100.0 150.0 L 56.7 125.0 L 56.7 75.0 L 100.0 50.0" />
                    <path d="M 100.0 66.7 L 128.9 83.3 L 128.9 116.7 L 100.0 133.3 L 71.1 116.7 L 71.1 83.3 L 100.0 66.7" />
                    <path d="M 100.0 83.3 L 114.4 91.7 L 114.4 108.3 L 100.0 116.7 L 85.6 108.3 L 85.6 91.7 L 100.0 83.3" />
                </g>
                {/**レーダーチャート 本体　fill 塗りつぶし色　最後の２桁が透明度　stroke 枠線色 　（x, y）*/}
                <path d={rPath}
                    fill="#1bd5ee4e"
                    stroke="#1bd5ee" />

                {/**頂点 描画 */}
                <g fill="#2589d0">
                    {circles}
                </g>
            </svg>
            <dl>
                {SCORE_ITEM.map((e, id) => {
                    return (
                        <div key={id}>
                            <dt>{e}</dt>
                        </div>
                    )
                })}
            </dl>
        </div>
    )
}


// 基本情報
const BasicInformation = ({ player }) => {

    return (
        <>
            <div style={{ width: "200px" }}>
                <table>
                    <tbody>
                        <tr>
                            <th>名前</th>
                            <td>{player.profile.handle_name}</td>
                        </tr>
                        <tr>
                            <th>年齢</th>
                            <td>{player.profile.age}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

// DetailInformationコンポーネント
const DetailInformation = ({ player }) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: player.profile.introduction }}
        />
    )
}

// プレイヤーカードコンポーネント
const PlayerProfileCard = ({ player }) => {
    // プレイヤー情報
    const [playerData, setPlayerData] = useState(player);

    // statsを更新する関数
    const handleStatsUpdate = (newStats) => {
        setPlayerData(
            {
                ...playerData,
                stats: newStats
            }
        );
    }
    return (
        <div style={{ padding: "10px" }}>
            <nav>
                <a href="./index.html">TOP</a>
            </nav>
            <div style={{ display: "flex", alignItems: "center" }}>
                <PlayerImage player={playerData} />
                <StatsBoard stats={playerData.stats} onStatsChange={handleStatsUpdate} />
            </div>
            <div style={{ display: "flex" }}>
                <BasicInformation player={playerData} />
                <DetailInformation player={playerData} />
            </div>
        </div>)
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PlayerProfileCard player={PLAYER} />
    </StrictMode>
);