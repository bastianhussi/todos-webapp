import User from "./user";

/**
 * @param  {User | null} state
 * @return {string | undefined}
 */
export function selectName(state: User | null): string | undefined {
  return state ? state.name : undefined;
}
