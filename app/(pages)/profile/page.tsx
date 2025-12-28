import type { Metadata } from "next";
import IndexLayout from "@components/layout/IndexLayout";
import { PageTitle } from "@components/ui/PageTitle/PageTitle";
import AuthLayout from "@components/layout/AuthLayout";
import { LogoutButton } from "@components/ui/LogoutButton/LogoutButton";
import { PersonalData } from "@components/features/profile/PersonalData/PersonalData";
import { RulesBlock } from "@components/features/profile/RulesBlock/RulesBlock";
import { CreatedLessons } from "@components/features/profile/CreatedLessons/CreatedLessons";
import { CreatedCourses } from "@components/features/profile/CreatedLessons/CreatedCourses";
import { MyLessons } from "@components/features/profile/CreatedLessons/MyLessons";
import { MyCourses } from "@components/features/profile/CreatedLessons/MyCourses";

export const metadata: Metadata = {
  title: "Профиль",
  description:
    "Добро пожаловать в ваш личный кабинет, тут вы можете просматриварть ваши вопросы, уроки, курсы, новости и прочее",
};

export default function Profile() {
  return (
    <AuthLayout>
      <IndexLayout>
        <LogoutButton />
        <div className="">
          <PageTitle>Личный кабинет</PageTitle>
          <div className="flex flex-col gap-16">
            <PersonalData />
            <RulesBlock />
            <CreatedLessons />
            <CreatedCourses />
            <MyLessons />
            <MyCourses />
          </div>
        </div>
      </IndexLayout>
    </AuthLayout>
  );
}
