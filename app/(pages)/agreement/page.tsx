import ShortLayout from "@/app/components/layout/ShortLayout";
import { PageTitle } from "@/app/components/ui/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description: "Пользовательское соглашение сайта Ironau.ru",
};

export default function Page() {
  return (
    <ShortLayout>
      <PageTitle>Пользовательское соглашение</PageTitle>
    </ShortLayout>
  );
}
