import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import Meta from '@/components/layouts/Meta';
import ClientOnly from '@/components/layouts/ClientOnly';

const QUERY = gql`
  query Post($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
      body
      image
      createdAt
      username
    }
  }
`;

function Article() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(QUERY, {
    variables: { postId: id },
  });

  if (!loading) {
    return (
      <section className="flex items-center justify-center py-80">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-yellow-600"></div>
      </section>
    );
  }

  if (error) {
    return null;
  }

  const { body, image, title } = data?.getPost;

  return (
    <section className="pt-20">
      <Meta
        title="Blog Alam Raga Deva"
        description="Alam Raga Deva Blog For Developer"
      />
      <ClientOnly>
        <div className="relative h-96 w-full">
          <Image
            src={image}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority={true}
          />
        </div>
        <div className="container relative">
          <h1 className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg bg-yellow-500 px-10 py-5 text-center text-2xl font-bold text-white">
            {title}
          </h1>
          <div
            className="pt-20 pb-5"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </ClientOnly>
    </section>
  );
}

export default Article;
