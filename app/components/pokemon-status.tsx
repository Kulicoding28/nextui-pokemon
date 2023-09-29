"use client";

import { CardFooter, Progress, Divider, Card } from "@nextui-org/react";

export function PokemonStatus({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="p-4">
      <Card className="max-w-[400px]">
        <Divider />
        <CardFooter>
          <Progress
            value={value}
            label={label}
            size="sm"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            showValueLabel={true}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
