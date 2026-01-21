import { createContext, ReactNode, useState } from 'react';

type FavoriteType = {
  id: string;
};

type FavoriteContextType = {
  favorite: FavoriteType[];
  setFavorite: (value: FavoriteType[]) => void;
};

export const FavoriteContext = createContext<FavoriteContextType | null>(null);

const FavoriteProcider = ({ children }: { children: ReactNode }) => {
  const [favorite, setFavorite] = useState<FavoriteType[]>([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProcider;
