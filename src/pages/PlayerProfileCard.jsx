import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import shintaro from "../../public/image/player_image_001.jpg"
import moruten from "../../public/image/player_image_002.jpg"

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
// #region StatsScoreコンポーネント
const StatsScore = () => {

}
// #endregion

// #region RadarChartコンポーネント
const RadarChart = () => {

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
            <p>
                {player.profile.introduction}
            </p>
        </div>
    )
}
// #end

// #region プレイヤーカードコンポーネント
const PlayerProfileCard = () => {
    // 詳細説明
    const introduction = <p>その爽やかな語り口と裏腹に鋭い情報分析力と論理的な厳格さを兼ね備えたプレイヤー。<br />スタイルは「冷静な理論派ハンター」と評されます。<br />感情に流されることなく、盤面を整理し、一貫したロジックで人外（人狼陣営）を追い詰める！</p>
    // プレイヤー情報
    const player = {
        image_src: shintaro,
        profile: {
            handle_name: "しんたろー",
            age: 99,
            introduction: introduction
        },
        stats: {
            Impact: "",
            Structure: "",
            Insight: "",
            Logic: "",
            Originality: "",
            Instinct: "",
        }
    }
    return (<div>

        <PlayerImage player={player} />
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