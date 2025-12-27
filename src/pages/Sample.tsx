import { Link, Route, Routes } from 'react-router-dom';
import Article from '../Article/Aritcle';

export default function Sample() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/react-tutorial/article" element={<Article />} />
        </Routes>

      </div>
    </>
  );
}