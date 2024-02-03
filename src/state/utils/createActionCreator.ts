export const createActionCreator = <T>(type: string) => {
  const actionCreator = (payload?: T) => ({
    type,
    payload: payload ?? null,
  });
  actionCreator.type = type;
  return actionCreator;
};
