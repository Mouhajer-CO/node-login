const getSessionData = (session: any, key: string): any => {
    return session?.data?.[key];
};

export const getLoggedInUserEmail = (session: any, key: string): string => {
    const signInInfo = getSessionData(session, key);
    return signInInfo.email;
};
