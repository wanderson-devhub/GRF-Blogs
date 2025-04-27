import { Prisma } from "@/generated/prisma";

export type BlogWithUser = Prisma.BlogGetPayload<{
  include: { users: true };
}>;

export type BlogUserWithUsers = Prisma.BlogUserGetPayload<{
  include: {
    user: true;
  };
}>;
