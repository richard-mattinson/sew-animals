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
        "Store all your favorite stationary, while the pigs keep them safe!",
      category: "Pencil Cases",
      alt: "A pink pencil case depicting guinea pigs dressed in medical attire, other medical equipment such as first aid kits and plasters surround them",
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
      productImages: true,
    },
  });

    const product2 = await prisma.product.create({
      data: {
        name: "Pigeon Face Mask",
        description:
          "This jolly penguin will keep your face covered from The North Pole to the South!",
        category: "Face Masks",
        alt: "A blue face mask with black straps. A jolly looking penguin adoring it at various angles, the word 'penguin' in a handwritten font is placed between the penguin multiple times.",
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
            "Why should piggy have all the fun? Duckling likes to keep your money safe too!",
          category: "Coin Purses",
          alt: "A yellow pencil case with orange zip. A yellow duckling with orange beak is collaged across the entire product",
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
