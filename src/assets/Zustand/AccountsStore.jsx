import { create } from "zustand";




const useAccountStore = create((set) => ({
    user : null,
    accounts: [],
    addAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
    login : (user) => set({user}),
    logout : () => set({user : null})
}));

export default useAccountStore