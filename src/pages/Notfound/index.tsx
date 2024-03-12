import Button from "../../components/Button";
import { InfoContainer, NotFoundContainer, PictureContainer } from "./style";
import FourZeroFourImage from "./arnold.png"
import Footer from "../../components/Footer";
function NotFound() {
  const handleClick = () => {
    window.open("https://dev.matheusalvesbarroso.com.br");
  };

  return (
    <>
      <NotFoundContainer >
        <InfoContainer>
          <h1>Erro 404 - Página Não Encontrada 😥</h1>
          <hr />
          <span>Verifique se o endereço da url está correto.</span>
          <Button onClick={handleClick} width="60%">Voltar a Home</Button>
        </InfoContainer>
        <PictureContainer>
          <img src={FourZeroFourImage} />
          <h3>Ops...</h3>
        </PictureContainer>
      </NotFoundContainer>
      <Footer/>
    </>
  );
}

export default NotFound;
