import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

// initial state
const initialState = {
  fontFamily: "Metropolis",
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useState(initialState);

  return (
    <ConfigContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node,
};

export { ConfigProvider, ConfigContext };
