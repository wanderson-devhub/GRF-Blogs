import { Prisma } from "@/generated/prisma";

export type PostWithUser = Prisma.PostGetPayload<{
  include: {
    user: true;
  };
}>;
