import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const blogMap = () => {
    return [1, 2, 3].map((i) => {
      return (
        <div className="w-full p-4 lg:w-1/2 xl:w-1/3" key={i}>
          <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-900">
            <div className="w-min-full relative aspect-video">
              <Image
                src="http://source.unsplash.com/360x200"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="p-4">
              <h3 className="truncate text-lg font-bold">Title Lorem Test</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                delectus aperiam fugiat maxime. Quibusdam, aperiam. Aliquid quod
                iure animi quaerat quae qui id maxime asperiores mollitia, eaque
                harum vero molestiae?
              </p>

              <Link href={`/blog/${i}`}>
                <a className="mt-5 inline-block rounded-lg bg-yellow-500 py-3 px-8 font-semibold text-white hover:shadow-lg">
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  const socialMap = () => {
    const dataSocial = [
      { name: 'linkedin', url: 'https://www.linkedin.com/in/linkedin' },
      { name: 'github', url: 'https://www.linkedin.com/in/linkedin' },
      { name: 'instagram', url: 'https://www.linkedin.com/in/linkedin' },
    ];
    return dataSocial.map((i, idx) => {
      return (
        <li key={idx} className="relative aspect-square h-8 hover:animate-bounce">
          <Link href={i.url} target="_blank" rel="noopener noreferrer">
            <a className="w-full">
              <Image
                src={`/assets/icons/${i.name}.svg`}
                alt={i.name}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="dark:invert"
              />
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
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
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center self-center lg:w-1/2 lg:items-start">
              <p className="text-base font-semibold">👋 Hello, I am</p>
              <h1 className="my-2 text-center text-4xl font-bold lg:text-left">
                Alam Raga Deva
              </h1>
              <h2 className="mb-5 text-xl font-medium">Fullstack Developer</h2>
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
