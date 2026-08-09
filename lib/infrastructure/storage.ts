import { UserEntity, MOCK_INITIAL_USER } from "../domain/user/user.entity";

const STORAGE_KEY = "codequest_user_v1";

export class StorageRepository {
  static loadUser(): UserEntity {
    if (typeof window === "undefined") return MOCK_INITIAL_USER;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return MOCK_INITIAL_USER;
      return JSON.parse(raw) as UserEntity;
    } catch {
      return MOCK_INITIAL_USER;
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
