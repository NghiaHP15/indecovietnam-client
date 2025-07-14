import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { socailLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({className, iconClassName, tooltipClassName} : SocialMediaProps) => {
  return (
    <TooltipProvider delayDuration={500}>
        <div className={cn("flex items-center gap-3.5", className)}>
            {socailLinks?.map((item) => (
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <Link
                            href={item?.href}
                            key={item?.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("p-2 border rounded-full hover:text-white hover:border-light_brownish hoverEffect", iconClassName)}
                        >
                            {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(" ", tooltipClassName)}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
