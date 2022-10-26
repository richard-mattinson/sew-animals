const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: { 
      email: "umbrella@STARSmail.org.rc", 
      password: "123",
      userName: "Umbrella Inc.",
    },
    });

  const user1Profile = await prisma.profile.create({
    data: { userId: user1.id, userName: "Umbrella Inc." }
  })

  const product1 = await prisma.product.create({
    data: {
      name: "Guinea Pig Pencil Case",
      description:
        "Store all your favorite stationery, while the pigs keep them safe!",
      category: "Stationary",
      detailsImg: "https://drive.google.com/uc?id=1RWjS3UIg4kGbYZ-41wSwFqKz3x5NxFV7",
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
      productTags: {
        create: [{ tag: "Pink" }, { tag: "Doctor" }, { tag: "Nurse" }],
      },
    },
    include: {
      productImages: true,
      productTags: true,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Pigeon Face Mask",
      description:
        "This jolly penguin will keep your face covered from The North Pole to the South!",
      category: "Face Masks",
      detailsImg:
            "https://drive.google.com/uc?id=13JllFzUug__1C3Fqa7i2M2pp9Bm26XQ5",
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
      detailsImg:
            "https://drive.google.com/uc?id=1pI5hHK-4hxMRWcb2Xqj_-KS-N5JvASZh",
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

  const product4 = await prisma.product.create({
    data: {
      name: "White Wolf Face Mask",
      description:
        "When you're in dire need of a face covering, wear the mask of the wolf!",
      category: "Face Masks",
      detailsImg:
            "https://drive.google.com/uc?id=1m5n0yjwns9ArKSkSnZSV6xvYxB5LDVQk",
      alt: "",
      productImages: {
        create: {
          heroImage:
            "https://drive.google.com/uc?id=1m5n0yjwns9ArKSkSnZSV6xvYxB5LDVQk",
          thumbImage:
            "https://drive.google.com/uc?id=1m5n0yjwns9ArKSkSnZSV6xvYxB5LDVQk",
          detailsImage:
            "https://drive.google.com/uc?id=1m5n0yjwns9ArKSkSnZSV6xvYxB5LDVQk",
        },
      },
    },
    include: {
      productImages: true,
    },
  });

  const product5 = await prisma.product.create({
    data: {
      name: "Dog Pencil Case",
      description:
        "You'll never need to worry about fetching a pen again with this good boy looking after them!",
      category: "Stationary",
      detailsImg:
        "https://drive.google.com/uc?id=1_Qiuj6v7tLHyb9_tgCw5gX_UY2FKQkKX",
      alt: "",
      productImages: {
        create: {
          heroImage:
            "https://drive.google.com/uc?id=1_Qiuj6v7tLHyb9_tgCw5gX_UY2FKQkKX",
          thumbImage:
            "https://drive.google.com/uc?id=1_Qiuj6v7tLHyb9_tgCw5gX_UY2FKQkKX",
          detailsImage:
            "https://drive.google.com/uc?id=1_Qiuj6v7tLHyb9_tgCw5gX_UY2FKQkKX",
        },
      },
    },
    include: {
      productImages: true,
    },
  });

const product6 = await prisma.product.create({
  data: {
    name: "Duckling Pencil Case",
    description:
      "Take a sneak beak inside, duckling has been sorting your stationary since the quack of dawn!",
    category: "Stationary",
    detailsImg:
      "https://drive.google.com/uc?id=1YkCmEgA93nMoo4o5s7O1iamdCtcYL8pV",
    alt: "",
    productImages: {
      create: {
        heroImage:
          "https://drive.google.com/uc?id=1YkCmEgA93nMoo4o5s7O1iamdCtcYL8pV",
        thumbImage:
          "https://drive.google.com/uc?id=1YkCmEgA93nMoo4o5s7O1iamdCtcYL8pV",
        detailsImage:
          "https://drive.google.com/uc?id=1YkCmEgA93nMoo4o5s7O1iamdCtcYL8pV",
      },
    },
  },
  include: {
    productImages: true,
  },
});

const product7 = await prisma.product.create({
  data: {
    name: "Sealife Coin Purse",
    description:
      "Dive deep in to this deep sea coin purse and find buried treasure!",
    category: "Coin Purses",
    detailsImg:
      "https://drive.google.com/uc?id=1BtOMbV7NE0GSToEpHcGSDNyEcTGwiGO5",
    alt: "",
    productImages: {
      create: {
        heroImage:
          "https://drive.google.com/uc?id=1BtOMbV7NE0GSToEpHcGSDNyEcTGwiGO5",
        thumbImage:
          "https://drive.google.com/uc?id=1BtOMbV7NE0GSToEpHcGSDNyEcTGwiGO5",
        detailsImage:
          "https://drive.google.com/uc?id=1BtOMbV7NE0GSToEpHcGSDNyEcTGwiGO5",
      },
    },
  },
  include: {
    productImages: true,
  },
});

const product8 = await prisma.product.create({
  data: {
    name: "Fox Face Mask",
    description:
      "Up, up and away with fox, space is cold, you're gonna need a mask up there!",
    category: "Face Mask",
    detailsImg:
      "https://drive.google.com/uc?id=1BtOMbV7NE0GSToEpHcGSDNyEcTGwiGO5",
    alt: "",
    productImages: {
      create: {
        heroImage:
          "https://drive.google.com/uc?id=1L9UDNJXh4YTO5yfJ3yKo2SwZF68ZhTmb",
        thumbImage:
          "https://drive.google.com/uc?id=1L9UDNJXh4YTO5yfJ3yKo2SwZF68ZhTmb",
        detailsImage:
          "https://drive.google.com/uc?id=1L9UDNJXh4YTO5yfJ3yKo2SwZF68ZhTmb",
      },
    },
  },
  include: {
    productImages: true,
  },
});
  console.log({ user1, user1Profile, product1, product2, product3, product4, product5, product6, product7, product8 });
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
