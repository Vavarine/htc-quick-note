import { HeaderContainer, HeaderContent, HeaderProfile, HeaderUser, UserName } from "./styles";
import { FiUser } from "react-icons/fi";
import { globalTheme } from "../../styles/globalTheme";
import { rem } from "polished";
import { useAuth } from "../../contexts/authContext";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>QuickNote</h1>
        <HeaderProfile onClick={logout}>
          <UserName>{user?.name}</UserName>
          <strong>[Sair]</strong>
          <HeaderUser>
            <FiUser color={globalTheme.colors.background} size={rem(20)} />
          </HeaderUser>
        </HeaderProfile>
      </HeaderContent>
    </HeaderContainer>
  );
}
