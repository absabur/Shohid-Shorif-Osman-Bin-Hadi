import ImagesPage from "@/components/ImagesPage";

export async function generateMetadata() {
  const canonicalUrl = `https://shorif-osman-hadi.netlify.app/gallery/}`;
  return {
    title: "ওসমান হাদীর ছবি সমূহ",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function GalleryPage({ searchParams }) {
  const resolvedParams = await searchParams;
  return <ImagesPage resolvedParams={resolvedParams} />;
}
