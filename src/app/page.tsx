import { performRequest } from "@/lib/datocms";
import { Stack, Heading } from "@chakra-ui/react";

const PAGE_CONTENT_QUERY = `
  query HomePageQuery {
    homepage {
      title
      image {
        url
        alt
      }
      videoTitle
}}`;

type HomePageData = {
    homepage: {
        title: string;
        image: {
            url: string;
            alt: string;
        };
        videoTitle: string;
    };
};

export default async function Home() {
    const { homepage } = await performRequest<HomePageData>(PAGE_CONTENT_QUERY, {
        variables: {},
    });

    return (
        <Stack>
            <Heading size="lg">{homepage.title}</Heading>
            <Heading size="md">{homepage.videoTitle}</Heading>
            <img src={homepage.image.url} alt={homepage.image.alt} />
        </Stack>
    );
}
