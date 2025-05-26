const { PrismaClient } = require("../src/generated/prisma");
const axios = require("axios");
const prisma = new PrismaClient();

async function fetchData() {
  const [usersRes, postsRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/posts"),
  ]);
  return { users: usersRes.data, posts: postsRes.data };
}

async function main() {
  const { users, posts } = await fetchData();

  for (const user of users) {
    await prisma.user.create({
      data: {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: {
          create: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
              create: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
              },
            },
          },
        },
        company: {
          create: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
          },
        },
      },
    });
  }

  for (const post of posts) {
    await prisma.post.create({
      data: {
        title: post.title,
        body: post.body,
        author: {
          connect: { id: post.userId },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
