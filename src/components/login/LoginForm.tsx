/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Card, FormField, Button, Input } from "../ui";
import { LoginDto, loginSchema } from "@/lib/validators/auth";
import { login } from "@/services/auth-client";
import { setUser } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/hooks";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const mutation = useMutation({
    mutationFn: (data: LoginDto) => login(data),
    onSuccess: (data) => {
      dispatch(setUser(data.user));
      router.push("/profile");
    },
    onError: (err: unknown) => {
      console.error(err);
    },
  });

  function onSubmit(data: LoginDto) {
    mutation.mutate(data);
  }

  return (
    <Card className="max-w-md w-full p-6 md:p-8 bg-base-100 border border-base-300 rounded-box">
      <form
        className="flex flex-col gap-5 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="text-2xl font-bold text-base-content">
          Sign in to your account
        </h2>

        <FormField label="Email">
          <Input
            type="email"
            placeholder="user@example.com"
            {...register("email")}
            error={errors.email?.message}
            autoComplete="email"
            aria-label="Email"
          />
        </FormField>

        <FormField label="Password">
          <Input
            type="password"
            placeholder="password123"
            {...register("password")}
            error={errors.password?.message}
            autoComplete="current-password"
            aria-label="Password"
          />
        </FormField>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm cursor-pointer text-base-content">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-sm rounded-field"
            />
            <span>Remember me</span>
          </label>
          <a href="/forgot" className="text-sm text-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            disabled={mutation.isPending}
            className="w-full"
          >
            {mutation.isPending ? "Signing in…" : "Sign in"}
          </Button>
        </div>

        {mutation.isError && (
          <div
            role="alert"
            className="mt-3 p-3 rounded-box bg-error/10 text-error text-sm"
          >
            {(mutation.error as any)?.message ??
              "Login failed. Check your credentials."}
          </div>
        )}

        <p className="text-center text-sm text-base-content/80 mt-2">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-primary hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </form>
    </Card>
  );
}
