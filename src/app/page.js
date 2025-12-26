import Home from "@/components/HomePage/Home";

export async function generateMetadata() {
  const canonicalUrl = `https://shorif-osman-hadi.netlify.app/`;
  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
