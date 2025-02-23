import axios from "axios";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { urlApi } from "../utils/urlApi";
import { getCookieByName } from "../utils/cookies";
import Categories from "../pages/dashboard/Categories";
interface Categories {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}
type userKey = {
  id: number;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
} | null;
interface User {
  user: userKey;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  Category: Array<Categories>;
  setCategory: Dispatch<SetStateAction<Array<Categories>>>;
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
  const [Category, setCategory] = useState<Categories[]>([]);
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

  useEffect(()=>{
    const fetchCategories =async()=>{
      await axios.get(urlApi.categories.getOrCreateCategories).then((e)=>{
        setCategory(e.data.data)
      }).catch(()=>{
        setCategory([])
      })
    }
    fetchCategories();
    
  },[])
  return (
    <UserContext.Provider
      value={{ user, token, setToken, Category, setCategory, loader }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
