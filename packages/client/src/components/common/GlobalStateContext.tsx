import { FC, ReactNode, createContext, useContext, useReducer } from "react";

const { VITE_APPLICATION_SLUG } = import.meta.env;

interface StateAttributes {
  drawerOpen: boolean;
}

export interface GlobalContext extends StateAttributes {
  toggleDrawer: () => void;
}

const defaultStateAttributes: StateAttributes = {
  drawerOpen: false,
};

const defaultContext: GlobalContext = {
  ...defaultStateAttributes,
  toggleDrawer: () => {
    throw new Error("toggleDrawer not implemented");
  },
};

const context = createContext<GlobalContext>(defaultContext);

const localStorageKey = `${VITE_APPLICATION_SLUG}.globalState`;

type Action = { type: "ToggleDrawer" };

const reducer: (state: StateAttributes, action: Action) => StateAttributes = (
  state,
  action
) => {
  let newState = state;

  switch (action.type) {
    case "ToggleDrawer":
      newState = {
        ...state,
        drawerOpen: !state.drawerOpen,
      };
      break;
  }
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      drawerOpen: newState.drawerOpen,
    })
  );
  return newState;
};

export const GlobalStateProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, defaultStateAttributes);

  const toggleDrawer = () => dispatch({ type: "ToggleDrawer" });

  return (
    <context.Provider
      value={{
        ...state,
        toggleDrawer,
      }}
    >
      {children}
    </context.Provider>
  );
};
// eslint-disable-next-line
export const useGlobalState = () => useContext(context);
