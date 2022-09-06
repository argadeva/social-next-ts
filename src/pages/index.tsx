import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import Meta from '@/components/layouts/Meta';
import apolloClient from '@/utils/apollo-client';

export async function getServerSideProps() {
  const client = apolloClient();
  const { data } = await client.query({
    query: gql`
      query Posts {
        getPosts(limit: 3) {
          id
          title
          shortBody
          image
          createdAt
        }
      }
    `,
  });

  return {
    props: {
      posts: data?.getPosts,
    },
  };
}

const Home: NextPage = ({ posts }: { posts?: Array<object> }) => {
  const [count, setCount] = useState(0);
  const skill = [
    '<h2>Frontend Developer </h2>',
    '<h2>Mobile Developer </h2>',
    '<h2>Full-Stack Developer </h2>',
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCount((oldCount) => (oldCount < 2 ? oldCount + 1 : 0));
    }, 8000);
    return () => {
      clearInterval(id);
    };
  }, [count]);

  const blogMap = () => {
    return posts?.map((i: any, idx: number) => {
      return (
        <div className="w-full p-4 lg:w-1/2 xl:w-1/3" key={idx}>
          <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-900">
            <div className="w-min-full relative aspect-video">
              <Image
                src={i.image}
                alt={i.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={true}
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 truncate text-lg font-bold">{i.title}</h3>
              <p>
                {i.shortBody}

                <Link href={`/blog/${i.id}`}>
                  <a className="mt-5 block max-w-max rounded-lg bg-yellow-500 py-3 px-8 font-semibold text-white hover:shadow-lg">
                    Read More
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  const socialMap = () => {
    const dataSocial = [
      { name: 'linkedin', url: 'https://www.linkedin.com/in/argadeva' },
      { name: 'github', url: 'https://github.com/argadeva' },
      { name: 'instagram', url: 'https://www.instagram.com/argadeva_' },
    ];
    return dataSocial.map((i, idx) => {
      return (
        <li key={idx} className="aspect-square h-8 w-8 hover:animate-bounce">
          <Link href={i.url}>
            <a
              className="relative block h-8 w-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src={`/assets/icons/${i.name}.svg`}
                alt={i.name}
                height={300}
                width={300}
              />
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <Meta
        title="About Alam Raga Deva"
        description="Alam Raga Deva a Full Stack Developer who has experience in developing Web or Mobile Applications."
      />
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative my-10 mx-auto aspect-square max-h-80 overflow-hidden rounded-full bg-yellow-500">
                <Image
                  src="/assets/images/profile.png"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority={true}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center self-center lg:w-1/2 lg:items-start">
              <p className="text-base font-semibold">👋 Hello, I am</p>
              <h1 className="my-2 text-center text-4xl font-bold lg:text-left">
                Alam Raga Deva
              </h1>
              <div className="typewriter" dangerouslySetInnerHTML={{__html: skill[count]}} />
              <p className="mb-10 text-center leading-relaxed lg:text-left">
                a Full Stack Developer who has experience in developing Web or
                Mobile Applications, likes challenges and is able to work in
                teams and individual. Able to learn new things quickly therefore
                they can be relied on me in team collaboration. Able to use
                Node.js, Express.js, ReactJS, and React Native, as well as
                interested in developing UI / UX designs.
              </p>
              <Link href="#contact">
                <a className="rounded-full bg-yellow-500 py-3 px-8 font-semibold text-white hover:bg-yellow-400 hover:shadow-lg">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="bg-yellow-500 py-20">
        <div className="container">
          <h4 className="mb-2 text-center text-lg font-semibold text-white dark:text-black">
            Blog
          </h4>
          <h2 className="text-dark mb-8 text-center text-2xl font-bold">
            Latest Articles
          </h2>
          <div className="flex flex-wrap">{blogMap()}</div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container">
          <h4 className="mb-2 text-center text-lg font-semibold text-yellow-500">
            Contact
          </h4>
          <h2 className="text-dark mb-8 text-center text-2xl font-bold">
            Social Media & Github
          </h2>
          <ul className="flex flex-row items-center justify-center gap-6">
            {socialMap()}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
