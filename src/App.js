import dog from "./images/dog.jpg";
import PlaceholderImage from "./images/dog-placeholder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  return (
    <div className="container">
      <div className="sroll-height">
        ↓ 往下滑動看圖片
      </div>
      <div className="text-center">
        <LazyLoadImage src={dog} alt="" className="img" placeholdersrc={PlaceholderImage}
        effect="blur"/>
      </div>
    </div>
  );
}

export default App;
