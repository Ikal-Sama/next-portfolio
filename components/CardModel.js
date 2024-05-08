import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { CardData } from "@public/data/CardData";

const CardModel = () => {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
      {CardData.map((item) => (
        <Card className="w-[350px] hover:scale-105 duration-300">
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={item.image}
              alt="Project-image"
              width={200}
              height={400}
              className="w-full max-h-[9rem] "
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={item.link}>
              <Button className="hover:bg-red-800 rounded">View More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardModel;
