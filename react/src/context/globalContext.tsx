import { createContext, ReactNode, useContext, useReducer } from "react";

const initialData = {
  bannerOpen: true,
};

type TGlobalContext = typeof initialData;

// payload and type here normally will be a union type to accommodate different actions
interface ActionType {
  payload: Partial<TGlobalContext>;
  type: "SHOW_BANNER" | "HIDE_BANNER";
}

const reducer = (
  state: TGlobalContext,
  action: Partial<ActionType>
): TGlobalContext => {
  switch (action.type) {
    case "HIDE_BANNER":
      return { ...state, bannerOpen: false };
    case "SHOW_BANNER":
      return { ...state, bannerOpen: true };
    default:
      return state;
  }
};

interface IGlobalContext {
  state: TGlobalContext;
  dispatch: React.Dispatch<Partial<ActionType>>;
}

//  create context here
const globalContext = createContext<IGlobalContext>({} as IGlobalContext);

// wrap this component around App.tsx to get access to userData in all components
const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

// use this custom hook to get the data in any component in component tree
const useGlobalContext = () => useContext(globalContext);
export { useGlobalContext, GlobalContextProvider };
