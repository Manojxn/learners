import * as React from "react";
import { cn } from "@/lib/utils";

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

export function Image({ className, ...props }: ImageProps) {
  return <img className={cn(className)} {...props} />;
}


