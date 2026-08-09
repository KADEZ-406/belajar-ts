import { UserEntity, FRESH_USER_INITIAL_STATE, MOCK_INITIAL_USER } from "../domain/user/user.entity";

const STORAGE_KEY = "codequest_user_v1";

export class StorageRepository {
  static loadUser(): UserEntity {
    if (typeof window === "undefined") return MOCK_INITIAL_USER;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return FRESH_USER_INITIAL_STATE;
      // Merge with FRESH_USER_INITIAL_STATE so any fields added in newer schema
      // versions (e.g. completedSections, checkpointResults) always have a safe
      // default instead of being undefined in old localStorage payloads.
      const parsed = JSON.parse(raw) as Partial<UserEntity>;
      return { ...FRESH_USER_INITIAL_STATE, ...parsed };
    } catch {
      return FRESH_USER_INITIAL_STATE;
    }
  }

  static saveUser(user: UserEntity): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.error("Failed to save user entity to localStorage", e);
    }
  }

  static resetUser(): UserEntity {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
    return MOCK_INITIAL_USER;
  }
}
