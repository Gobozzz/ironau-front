"use client";

import { Skeleton } from "@mui/material";

const CustomSkeleton = ({ ...props }) => (
  <Skeleton
    {...props}
    sx={{
      backgroundColor: "var(--color-sceleton)",
      ...props.sx,
    }}
  />
);

export default CustomSkeleton;
