"use client";

import { PROFILE } from "@navigate";
import styles from "./ProfileLink.module.css";
import LoginModal from "@components/modals/LoginModal/LoginModal";
import Link from "next/link";
import { useEffect, useState } from "react";
import iconLk from "@/public/icons/lk.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { notRedirectingProfile } from "@slices/authSlice";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export function ProfileLink({ className = "" }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { user, canRedirectedProfile } = useSelector(
    (state: RootState) => state.auth
  );
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (canRedirectedProfile) {
      dispatch(notRedirectingProfile());
      router.push(PROFILE);
    }
  }, [canRedirectedProfile, dispatch, router]);

  if (user) {
    return (
      <Link href={PROFILE} className={`${styles.item} ${className}`}>
        <Image src={iconLk} alt="Личный кабинет" />
      </Link>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${styles.item} ${className}`}
        aria-label="Личный кабинет"
      >
        <Image src={iconLk} alt="Личный кабинет" />
      </button>
      <LoginModal open={open} close={() => setOpen(false)} />
    </>
  );
}
