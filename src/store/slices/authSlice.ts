import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type User = {
  id: string;
  name?: string;
  email: string;
  avatarUrl?: string | null;
};

type AuthState = {
  user: User | null;
  status: "idle" | "loading" | "authenticated" | "unauthenticated";
  error?: string | null;
};

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const fetchCurrentUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/fetchCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 401) return rejectWithValue("unauthenticated");
      const body = await res.json().catch(() => ({}));
      return rejectWithValue(body?.message ?? "Failed to fetch user");
    }
    const data = (await res.json()) as { user: User };
    return data.user;
  } catch (err) {
    return rejectWithValue((err as Error).message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.status = action.payload ? "authenticated" : "unauthenticated";
      state.error = null;
    },

    clearAuth(state) {
      state.user = null;
      state.status = "unauthenticated";
      state.error = null;
    },

    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "authenticated";
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.user = null;
        state.status = "unauthenticated";
        state.error = action.payload ?? "Could not fetch user";
      });
  },
});
export const selectAuthStatus = (s: RootState) => s.auth.status;

export const { setUser, clearAuth, setError } = authSlice.actions;
export default authSlice.reducer;
