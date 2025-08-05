import React from "react";
import { Badge } from "@/components/ui/badge";

interface CustomBadgeProps {}

export function CustomBadge({
    children,
}: React.PropsWithChildren<CustomBadgeProps>) {
    return (
        <Badge
            variant="secondary"
            className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/30"
        >
            {children}
        </Badge>
    );
}
