import React, { createContext, useState, useContext, useCallback } from "react";

const AssetContext = createContext();

export function AssetProvider({ children }) {
  const [assets, setAssets] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const registerAsset = useCallback((asset) => {
    setAssets((prev) => [...new Set([...prev, asset])]);
  }, []);

  const markAssetLoad = useCallback(() => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      console.log(newCount);
      return newCount;
    });
  }, []);

  const progress =
    assets.length > 0
      ? Math.min(100, Math.round((loadedCount / assets.length) * 100))
      : 100;

  return (
    <AssetContext.Provider
      value={{
        registerAsset,
        markAssetLoad,
        progress,
        totalAssets: assets.length,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}

export function useAssets() {
  return useContext(AssetContext);
}
