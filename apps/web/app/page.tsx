import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prismaClient } from "@repo/db/client";



export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    
<div>
  {user?.username}
  {user?.password}
</div>

    
  );
}
