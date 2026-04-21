"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AccountState = {
  email: string | null;
  hydrated: boolean;
};

type AccountContextValue = AccountState & {
  isAuthenticated: boolean;
  register: (email: string) => void;
  logout: () => void;
};

const STORAGE_KEY = "academy-account-v1";

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEmail(stored);
    }

    setHydrated(true);
  }, []);

  const value = useMemo<AccountContextValue>(() => {
    return {
      email,
      hydrated,
      isAuthenticated: Boolean(email),
      register: (nextEmail) => {
        const normalized = nextEmail.trim().toLowerCase();
        setEmail(normalized);
        window.localStorage.setItem(STORAGE_KEY, normalized);
      },
      logout: () => {
        setEmail(null);
        window.localStorage.removeItem(STORAGE_KEY);
      },
    };
  }, [email, hydrated]);

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const ctx = useContext(AccountContext);

  if (!ctx) {
    throw new Error("useAccount must be used inside AccountProvider");
  }

  return ctx;
}
