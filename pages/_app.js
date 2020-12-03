import "../styles/global.css";
import Video from "../components/video";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Video />
      <Component {...pageProps}></Component>
    </>
  );
};

export default App;
