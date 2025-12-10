"use client";

import React, { useEffect, useState } from "react";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Input } from "./Input/Input";
import { Result } from "./Result/Result";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { closeModal } from "@slices/searchModalSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const itemsExample = [
  {
    id: 1,
    title: "Северная Осетия",
    slug: "rso",
    type: "literature",
  },
  {
    id: 2,
    title: "Осетинская Лира. В персидском переводе",
    slug: "lira",
    type: "literature",
  },
  {
    id: 3,
    title: "Осетинская грамматика А.М. Шёгрена",
    slug: "gramma",
    type: "course",
  },
];

export default function GlobalSearchModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.searchModal.isOpen
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchItems, setSearchItems] =
    useState<Array<IGlobalSearchItem>>(itemsExample);

  const handleClose = () => dispatch(closeModal());
  const handleInput = function (value: string) {
    setSearchText(value);
  };

  if (!mounted) {
    return null; 
  }

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={false}
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
            maxWidth: "1440px",
            height: "90vh",
            background: "var(--white)",
            borderRadius: "16px",
            overflowY: "hidden",
          },
        }}
      >
        <div className="h-full flex flex-col gap-8 p-5">
          <Input value={searchText} callback={handleInput} />
          <Result searchText={searchText} searchItems={searchItems} />
        </div>
      </Dialog>
    </>
  );
}
