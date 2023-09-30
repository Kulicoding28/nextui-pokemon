"use client";
import Image from "next/image";
import { Card, Divider, CardBody, CardHeader } from "@nextui-org/react";

export default function PokemonImage({
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
      <Card>
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
        <h3 className="font-mono font-medium p-2">Weight: {weight}</h3>
      </Card>
    </div>
  );
}
