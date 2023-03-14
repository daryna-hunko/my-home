import { ContainerStyled, HeaderStyled, NavStyled } from "./Header.styled";

const Header = () => {

  return (
    <HeaderStyled>
      <ContainerStyled>
        <div>Logo2</div>

        <NavStyled>
          <a>0. About</a>
          <a>1. Experience</a>
          <a>2. Contact</a>

          <button>Resume</button>
        </NavStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
}

export default Header;