/** @format */
//Importação da header_style, obs: sempre confiram os caminhos...
import * as S from "./components/Header/header_style";

//Importação dos components
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <>
      {/* "S.GlobalStyle" esta resetando toda a pagina  */}
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
