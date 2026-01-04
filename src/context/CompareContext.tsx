import { createContext, useContext, useState, ReactNode } from 'react';

interface Provider {
  id: string;
  name: string;
}

interface CompareContextType {
  selectedProviders: Provider[];
  addProvider: (provider: Provider) => void;
  removeProvider: (providerId: string) => void;
  clearProviders: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [selectedProviders, setSelectedProviders] = useState<Provider[]>([]);

  const addProvider = (provider: Provider) => {
    if (selectedProviders.length < 5 && !selectedProviders.find(p => p.id === provider.id)) {
      setSelectedProviders([...selectedProviders, provider]);
    }
  };

  const removeProvider = (providerId: string) => {
    setSelectedProviders(selectedProviders.filter(p => p.id !== providerId));
  };

  const clearProviders = () => {
    setSelectedProviders([]);
  };

  return (
    <CompareContext.Provider value={{ selectedProviders, addProvider, removeProvider, clearProviders }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
}
