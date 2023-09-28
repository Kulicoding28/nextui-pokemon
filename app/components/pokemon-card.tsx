import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import { Button } from "@nextui-org/react";

export default function PokemonCard({ name }: { name: string }) {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="pokemon "
            height={40}
            radius="sm"
            src="/pokeball.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </p>
            <p className="text-small text-default-500 font-mono">Poke-Api</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CardBody className="overflow-visible py-2">
            <p>Find Your Pokemon</p>
          </CardBody>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link href={name} key={name + "Card"}>
            <Button
              radius="full"
              color="success"
              size="sm"
              className="font-mono font-semibold"
            >
              See Detail
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
