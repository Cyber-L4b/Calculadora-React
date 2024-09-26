import { ButtonContainer } from "./styles";

const Button =  ({label, onClick, type}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" className ={type}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;