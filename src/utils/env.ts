export const checkEnvironmentValue = (envKey: string, defaultValue?: string): string => {
    const envValue = process.env[envKey]?.trim();

    if (envValue) {
        return envValue;
    }

    if (defaultValue) {
        return defaultValue;
    }

    throw new Error(`No environment variable set for ${envKey}`);
};
