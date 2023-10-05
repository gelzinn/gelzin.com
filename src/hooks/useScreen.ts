'use client'

import { DocumentSizeContext } from "@/contexts/DocumentSizeContext";
import { useContext } from "react";

export const useScreen = () => {
  const {
    documentSize,
    isMobile
  }: {
    documentSize: {
      width: number, height: number
    } | undefined,
    isMobile: boolean
  } = useContext(DocumentSizeContext);

  const documentWidth: number | undefined = documentSize ? documentSize.width : undefined;
  const documentHeight: number | undefined = documentSize ? documentSize.height : undefined;

  return {
    screenSize: documentSize,
    screenWidth: documentWidth,
    screenHeight: documentHeight,
    isMobile
  };
}