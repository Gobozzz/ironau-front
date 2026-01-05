import ShortLayout from "@/app/components/layout/ShortLayout";
import { PageTitle } from "@/app/components/ui/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта Ironau.ru",
};

export default function Page() {
  return (
    <ShortLayout>
      <PageTitle>Политика конфиденциальности</PageTitle>
    </ShortLayout>
  );
}
