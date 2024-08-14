export function useUserConfigs() {
  const userConfigsKey = "user_configs";

  const handleUpdateConfig = (page: string, value: string): void => {
    let configs = JSON.parse(localStorage.getItem(userConfigsKey) || "{}");

    if (!configs[page]) {
      configs[page] = [];
    }

    const index = configs[page].indexOf(value);
    if (index === -1) {
      configs[page].push(value);
    } else {
      configs[page].splice(index, 1);
    }

    localStorage.setItem(userConfigsKey, JSON.stringify(configs));
  };

  const getConfigs = (): Record<string, string[]> => {
    return JSON.parse(localStorage.getItem(userConfigsKey) || "{}");
  };

  const isConfigActive = (page: string, value: string): boolean => {
    const configs = getConfigs();
    return configs[page]?.includes(value) || false;
  };

  return {
    handleUpdateConfig,
    getConfigs,
    isConfigActive,
  };
}
