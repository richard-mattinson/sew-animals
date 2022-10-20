const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: { email: "claire@STARSmail.org.rc", password: "123"},
  });

  const product1 = await prisma.product.create({
    data: {
      name: "Guinea Pig Medical Pencil Case",
      description:
        "Imagine some really great blurb about ANIMAL and PRODUCT here",
      category: "Pencil Cases",
      productImages: {
        create: {
          heroImage:
            "https://drive.google.com/uc?id=1HPyHQej4JuEndspEGZMPHcjj4HJ13qy6",
          thumbImage:
            "https://drive.google.com/uc?id=1de-jH59X4vNkiySh_2CkFAXqvjhw93gs",
          detailsImage:
            "https://drive.google.com/uc?id=1RWjS3UIg4kGbYZ-41wSwFqKz3x5NxFV7",
        },
      },
    },
    include: {
      productImages: true
    }
  });

    const product2 = await prisma.product.create({
      data: {
        name: "Pigeon Face Mask",
        description:
          "Imagine some really great blurb about ANIMAL and PRODUCT here",
        category: "Face Masks",
        productImages: {
          create: {
            heroImage:
              "https://drive.google.com/uc?id=1BXmut2QMWPC5Gy9Z7hxcrP6xss6PGhn_",
            thumbImage:
              "https://drive.google.com/uc?id=1a9aPixoUXVaAO50XhDinQ4Pp8F0kfj08",
            detailsImage:
              "https://drive.google.com/uc?id=13JllFzUug__1C3Fqa7i2M2pp9Bm26XQ5",
          },
        },
      },
      include: {
        productImages: true,
      },
    });

      const product3 = await prisma.product.create({
        data: {
          name: "Duckling Coin Purse",
          description:
            "Imagine some really great blurb about ANIMAL and PRODUCT here",
          category: "Coin Purses",
          productImages: {
            create: {
              heroImage:
                "https://drive.google.com/uc?id=1HPyHQej4JuEndspEGZMPHcjj4HJ13qy6",
              thumbImage:
                "https://drive.google.com/uc?id=1jb5b3bmN3NEj-m8QoQy1z-N11lGfN_Aj",
              detailsImage:
                "https://drive.google.com/uc?id=1pI5hHK-4hxMRWcb2Xqj_-KS-N5JvASZh",
            },
          },
        },
        include: {
          productImages: true,
        },
      });

  console.log({ user1, product1, product2, product3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
