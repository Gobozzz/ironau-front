"use client";

import React, { useState } from "react";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import styles from "./LoginModal.module.css";
import { RegisterForm } from "./Form/RegisterForm";
import { LoginForm } from "./Form/LoginForm";
import loginImage from "@/public/images/login_modal.png";
import registerImage from "@/public/images/register_modal.png";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  close: () => void;
}

export default function LoginModal({ open, close }: Props) {
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        fullWidth={true}
        maxWidth={false}
        scroll="body"
        keepMounted
        slots={{
          transition: Transition,
        }}
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
          },
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "1000px",
            background: "var(--white)",
            borderRadius: "12px",
            overflowY: "hidden",
          },
        }}
      >
        <div className="h-full flex items-stretch">
          <div className={styles.left_part}>
            <div className={styles.title}>ЛИЧНЫЙ КАБИНЕТ</div>
            <div className={styles.tabs}>
              <button
                onClick={() => setActiveTab("register")}
                className={`${styles.tab} ${
                  activeTab === "register" ? styles.active : ""
                }`}
              >
                Регистрация
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`${styles.tab} ${
                  activeTab === "login" ? styles.active : ""
                }`}
              >
                Авторизация
              </button>
            </div>
            {activeTab === "register" && <RegisterForm />}
            {activeTab === "login" && <LoginForm />}
          </div>
          <div className={styles.right_part}>
            <Image
              src={activeTab === "register" ? registerImage : loginImage}
              alt="Фото Осетии"
            />
          </div>
        </div>
      </Dialog>
    </>
  );
}
