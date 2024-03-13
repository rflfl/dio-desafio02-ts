import React from "react";
interface IButton {
    colorScheme: string;
    children?: React.ReactNode;
    onClick: () => void;
}
import { Button } from "@chakra-ui/react"

export const MyButton = ({colorScheme, onClick, children}:IButton) => {
    return (
        <Button colorScheme={colorScheme} onClick={onClick} w='100%'>
            {children}
        </Button>
    )
}