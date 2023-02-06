import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { AuthNav } from "../AuthNav/AuthNav";

export const Navigation = () => {
  return (
    <nav>
      <Nav />
      <UserNav />
      <AuthNav />
    </nav>
  
  );
};

