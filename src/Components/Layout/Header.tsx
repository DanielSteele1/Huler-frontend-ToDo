import styled from "styled-components";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={className}>
      <img src="Logo.svg" alt="Huler Todo" />
    </div>
  );
};

const StyledHeader = styled(Header)`
  display: block;
  padding: 48px 48px 0 48px;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    padding: 200px 20px 0 20px;
  }
`;

export default StyledHeader;
