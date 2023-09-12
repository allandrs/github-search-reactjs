
import { useState } from "react";

import Search from "../components/Search";
import User from "../components/User";


const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async function (userName: string) {
    setUser(null);
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setIsLoading(false);


    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};

export default Home;