import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
async function main() {

    const post1 = await prisma.user.upsert({

        where: { name: 'david' },
        update: {},
        create: {
            name:"david",
            mail: 'david@gmail.com',
        },
    });

    const post2 = await prisma.user.upsert({

        where: { name: 'juan' },
        update: {},
        create: {
            name:"juan",
            mail:"juan@gmail.com",
        },
    });
   
    const post3 = await prisma.product.upsert({

        where: {name: 'chetos'},
        update: {},
        create: {
            name:"chetoos",
            price:'0.50',
            detail: "producto realizado de fecula de maiz",
            category:"snack" ,          
        },
    });

    console.log({ post1, post2, post3 });
}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });