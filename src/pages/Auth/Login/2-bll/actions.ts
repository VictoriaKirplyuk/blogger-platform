export const setIsLoggedIn = (payload: { isLoggedIn: boolean }) =>
  ({
    type: 'AUTH/SET-IS-LOGGED-IN',
    payload,
  } as const);

export type LoginActionsType = ReturnType<typeof setIsLoggedIn>;
