import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import shintaro from "../../public/image/player_image_001.jpg"
import moruten from "../../public/image/player_image_002.jpg"
import './style.css'
// #region PlayerImageコンポーネント
// プレイヤー画像
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
// #endregion
const StatsBoard = () => {

}
const StatsScore = ({ player, onScoreTextChange }) => {
    const handleChange = (e) => {

        const newPlayer = { ...player };
        const item = e.target.id;
        newPlayer.stats[item] = e.target.value;
        console.log('id: ', item)
        onScoreTextChange(newPlayer)


    }
    return (

        <table>
            <caption>
                ※数値を変更できます
            </caption>
            <tbody>
                <tr>
                    <th>議論力</th>
                    <td><input id="Impact" type="text" value={player.stats.Impact} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>盤面整理力</th>
                    <td><input id="Structure" type="text" value={player.stats.Structure} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>洞察力</th>
                    <td><input id="Insight" type="text" value={player.stats.Insight} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>論理的思考能力</th>
                    <td><input id="Logic" type="text" value={player.stats.Logic} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>オリジナル性</th>
                    <td><input id="Originality" type="text" value={player.stats.Originality} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>直感力</th>
                    <td><input id="Instinct" type="text" value={player.stats.Instinct} onChange={handleChange} /></td>
                </tr>
            </tbody>
        </table>
    )
}
// #region RadarChartコンポーネント
const RadarChart = ({ stats }) => {
    const { Impact, Structure, Insight, Logic, Originality, Instinct } = stats;

    // 各項目の頂点の座標を求める
    const ImpactCoordinate = { x: 100, y: (100 - Impact) }; // 真上の頂点
    const StructureCoordinate = { x: (100 + (Structure * (Math.sqrt(3) / 2))), y: 100 - (Structure / 2) } // 右上の頂点
    const InsightCoordinate = { x: (100 + (Insight * (Math.sqrt(3) / 2))), y: 100 + (Insight / 2) } // 右下の頂点
    const LogicCoordinate = { x: 100, y: (100 + Number(Logic)) }; // 真下の頂点
    console.log("LogicCoordinate :", LogicCoordinate)
    const OriginalityCoordinate = { x: (100 - (Originality * (Math.sqrt(3) / 2))), y: 100 + (Originality / 2) } // 左下の頂点
    const InstinctCoordinate = { x: (100 - (Instinct * (Math.sqrt(3) / 2))), y: 100 - (Instinct / 2) } // 左上の頂点

    // "M 100.0 20.0 L 186.6 50.0 L 160.6 135.0 L 100.0 170.0 L 39.4 135.0 L 13.4 50.0 L 100.0 20.0"
    let radarPath = `M ${ImpactCoordinate['x']} ${ImpactCoordinate['y']} L ${StructureCoordinate['x']} ${StructureCoordinate['y']} L ${InsightCoordinate['x']} ${InsightCoordinate['y']} L ${InsightCoordinate['x']} ${InsightCoordinate['y']} `;
    radarPath = radarPath + `L ${LogicCoordinate['x']} ${LogicCoordinate['y']} L ${OriginalityCoordinate['x']} ${OriginalityCoordinate['y']} L ${InstinctCoordinate['x']} ${InstinctCoordinate['y']} `;
    radarPath = radarPath + `L ${ImpactCoordinate['x']} ${ImpactCoordinate['y']}`
    console.log(radarPath)
    return (
        /**class radar-chart-3にpadding 35px指定してある。 */
        <div className="radar-chart-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" >

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
                <path d={radarPath}
                    fill="#1bd5ee4e"
                    stroke="#1bd5ee" />

                {/**頂点 描画 */}
                <g fill="#2589d0">
                    <circle cx={ImpactCoordinate['x']} cy={ImpactCoordinate['y']} r="3" />
                    <circle cx={StructureCoordinate['x']} cy={StructureCoordinate['y']} r="3" />
                    <circle cx={InsightCoordinate['x']} cy={InsightCoordinate['y']} r="3" />
                    <circle cx={LogicCoordinate['x']} cy={LogicCoordinate['y']} r="3" />
                    <circle cx={OriginalityCoordinate['x']} cy={OriginalityCoordinate['y']} r="3" />
                    <circle cx={InstinctCoordinate['x']} cy={InstinctCoordinate['y']} r="3" />
                </g>
            </svg>
            <dl>

                <div>
                    <dt>議論力</dt>
                    {/**  <dd>{Impact}</dd>*/}
                </div>
                <div>
                    <dt>盤面整理力</dt>
                    {/**<dd>{Structure}</dd>*/}
                </div>
                <div>
                    <dt>洞察力</dt>
                    {/**<dd>{Insight}</dd>*/}
                </div>
                <div>
                    <dt>論理的思考能力</dt>
                    {/**<dd>{Logic}</dd>*/}
                </div>
                <div>
                    <dt>オリジナル性</dt>
                    {/**<dd>{Originality}</dd>*/}
                </div>
                <div>
                    <dt>直感力</dt>
                    {/**<dd>{Instinct}</dd>*/}
                </div>
            </dl>
        </div>

    )
}
// #endregion


// #region BasicInformationコンポーネント
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
// #endregion

// #region DetailInformationコンポーネント
const DetailInformation = ({ player }) => {
    return (
        <div>
            {player.profile.introduction}
        </div>
    )
}
// #end

// #region プレイヤーカードコンポーネント
const PlayerProfileCard = () => {
    // 詳細説明
    const introduction = <p>その爽やかな語り口と裏腹に鋭い情報分析力と論理的な厳格さを兼ね備えたプレイヤー。<br />スタイルは「冷静な理論派ハンター」と評されます。<br />感情に流されることなく、盤面を整理し、一貫したロジックで人外（人狼陣営）を追い詰める！</p>
    // プレイヤー情報
    const [player, setPlayer] = useState({
        image_src: shintaro,
        profile: {
            handle_name: "しんたろー",
            age: 99,
            introduction: introduction
        },
        stats: {
            Impact: 92,
            Structure: 95,
            Insight: 91,
            Logic: 98,
            Originality: 87,
            Instinct: 86,
        }
    });

    return (
        <div>
            <nav>
                <a href="./index.html">TOP</a>
            </nav>
            <div style={{
                display: "flex",
                //alignItems: "center" // 垂直方向の中央揃え
            }}>
                <PlayerImage player={player} />

                {/* 2. StatsBoard をラップする div にスタイルを追加 */}
                <div style={{
                    alignSelf: "flex-start", // 引き伸ばしを防止（上端に寄せる）
                    marginTop: "auto",      // 上下のマージンを auto にすることで中央に配置
                    marginBottom: "auto"    // 上下のマージンを auto にすることで中央に配置
                }}>
                    <StatsScore player={player} onScoreTextChange={setPlayer} />
                </div>

                <RadarChart stats={player.stats} />
            </div>
            <div style={{ display: "flex" }}>
                <BasicInformation player={player} />
                <DetailInformation player={player} />
            </div>
        </div>)

}
// #endregion

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PlayerProfileCard />
    </StrictMode>
);