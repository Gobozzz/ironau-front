"use client";

import { AppDispatch } from "@/app/redux/store";
import { logout } from "@slices/authSlice";
import { useDispatch } from "react-redux";

interface Props {
  className?: string;
}

export function LogoutButton({ className = "" }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return <button onClick={() => dispatch(logout())}>Выйти</button>;
}
