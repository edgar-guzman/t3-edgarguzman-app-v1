// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// // Next API route example - /pages/api/restricted.ts
// async function main() {
//   const post = await prisma.post.create({
//     data: {
//       title: 'My first post',
//       body: 'My first post body',
//       author: {
//         connect: {
//           id: ''
//         }
//       }
//     }
//   });
//   const author = await prisma.author.create({
//     data: {
//       name: 'Edgar Guzman'
//     }
//   });
//   // const posts = await prisma.post.findMany();
//   const posts = await prisma.post.findMany({
//     include: {
//       author: true
//     }
//   });
//   console.log(post);
//   console.log(author);
//   console.log(posts);
// }

// main()
//   .then(async () => {

//     await prisma.$disconnect()

//   })

//   .catch(async (e) => {

//     console.error(e)

//     await prisma.$disconnect()

//     process.exit(1)

//   });

// // Version 2

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//     },
//   })
//   console.log(user)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

// // Version 3

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient()

// // export default async (req, res) => {
// //   try {
// //     const post = await prisma.post.create({
// //       data: {
// //         title: 'Prisma Loves MongoDB',
// //         slug: 'Prisma and Mongo',
// //         body: 'This is my awesome post (rocket emoji)',
// //       },
// //     })
// //     // console.log(post)
// //     res.json(post)

// //     const posts = await prisma.post.findMany()
// //     console.log(posts)
// //   } catch (error) { }
// // }

// const main = async (req, res) => {
//   try {
//     const post = await prisma.post.create({
//       data: {
//         title: 'Prisma Loves MongoDB',
//         slug: 'Prisma and Mongo',
//         body: 'This is my awesome post (rocket emoji)',
//       },
//     })
//     res.json(post);
//   } catch (error) {
//     res.json({ error: 'an error occured' });
//     return;
//   }
// }

// export default main;

// Version 4

import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const post = await prisma.post.create({
      data: {
        title: 'Prisma Loves MongoDB',
        slug: 'Prisma and Mongo',
        body: 'This is my awesome post (rocket emoji)',
      },
    })
    res.json(post);
  } catch (error) {
    res.json({ error: 'an error occured' });
    return;
  }
}

export default main;
