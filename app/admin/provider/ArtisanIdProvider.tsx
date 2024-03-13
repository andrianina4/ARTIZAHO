import React, { createContext, useState, ReactNode } from 'react';

interface ArtisanIdContextType {
  artisanId: string | null;
  setArtisanId: (id: string) => void;
}

export const ArtisanIdContext = createContext<ArtisanIdContextType>({
  artisanId: null,
  setArtisanId: () => {}
});

export const ArtisanIdContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [artisanId, setArtisanId] = useState<string | null>(null);

  return (
    <ArtisanIdContext.Provider value={{ artisanId, setArtisanId }}>
      {children}
    </ArtisanIdContext.Provider>
  );
};