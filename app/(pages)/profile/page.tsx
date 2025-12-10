import type { Metadata } from "next";
import IndexLayout from "@components/layout/IndexLayout";
import { PageTitle } from "@components/ui/PageTitle/PageTitle";
import AuthLayout from "@components/layout/AuthLayout";
import { LogoutButton } from "@/app/components/ui/LogoutButton/LogoutButton";

export const metadata: Metadata = {
  title: "Профиль",
  description:
    "Добро пожаловать в ваш личный кабинет, тут вы можете просматриварть ваши вопросы, уроки, курсы, новости и прочее",
};

export default function Home() {
  return (
    <AuthLayout>
      <IndexLayout>
        <div className="">
          <PageTitle>Профиль</PageTitle>
          <LogoutButton />
        </div>
      </IndexLayout>
    </AuthLayout>
  );
}
