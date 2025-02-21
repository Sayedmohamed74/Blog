import axios from "axios";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { urlApi } from "../utils/urlApi";
import { getCookieByName } from "../utils/cookies";
type userKey ={
    id:number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }|null;
interface User {
  user: userKey;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  Category: Array<object>;
  setCategory: Dispatch<SetStateAction<Array<object>>>;
  loader: boolean;
}

export const UserContext = createContext<User | null>(null);

interface UserProviderProps {
  children: React.ReactNode;
}
export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<userKey>(null);
  const [loader, setLoader] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
  const [Category, setCategory] = useState([{}]);
  const tokenCookie = getCookieByName("token");

  const fetchUser = async () => {
    await axios
      .get(urlApi.user.currentUser, {
        headers: {
          Authorization: `Bearer ${tokenCookie}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
        console.log(tokenCookie);

        setToken(tokenCookie);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        return err;
      });
  };
  useLayoutEffect(() => {
    if (tokenCookie) {
      fetchUser();
    } else {
      setLoader(false);
    }
  }, [tokenCookie]);
  return (
   <UserContext.Provider
      value={{ user, token, setToken, Category, setCategory, loader }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
