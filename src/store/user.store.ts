import { create } from "zustand"
import { ICurrentUser } from "../service/login/login.dto"


interface AuthState {
    user: ICurrentUser | null;
    setUser: (user: ICurrentUser | null) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        set({ user })
    },
    logout: () => {
        localStorage.removeItem("user");
        set({ user: null })
    }
}))