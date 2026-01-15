import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sample from './Sample';
import Article from '../Article/Aritcle';

export default function Routertest() {

  return (
    <Router>
      <div>
        <nav>
          <a href="./index.html">TOP</a> |{" "}
        </nav>
        <h1>メインページ（ルーターテスト）</h1>

        <Link to="/react-tutorial/article">article ページへ</Link>
        <Routes>
          <Route path="/react-tutorial/article" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}


