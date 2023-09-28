"use client";
import Image from "next/image";
import {
  Card,
  Divider,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

import { Progress } from "@nextui-org/react";

export function PokemonImage({
  image,
  name,
  weight,
}: {
  image: string;
  name: string;
  weight: string;
}) {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <h1 className="text-2xl font-semibold font-mono">{name}</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            src={image}
            alt={"Picture of " + name}
            width={270}
            height={270}
            className="object-cover rounded-xl transition-opacity opacity-0 duration-[2s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <h3 className="font-mono font-medium">Weight: {weight}</h3>
        </CardFooter>
      </Card>
    </div>
  );
}
