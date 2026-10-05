import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicesData } from "@/constant";
import ServiceDetail from "../components/service-detail";

export async function generateStaticParams() {
  return ServicesData.map((service) => ({
    slug: service.link.split("/").pop(), // extract slug
  }));
}

interface PageProps {
  params: { slug: string };
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const serviceData = ServicesData.find(
    (service) => service.link.split("/").pop() === slug,
  );

  if (!serviceData) {
    return {
      title: "Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${serviceData.title} | Florida Pest Control & Landscaping`,
    description: serviceData.description,
    keywords: `${serviceData.title}, pest control UAE, landscaping services`,
    openGraph: {
      title: `${serviceData.title} | Florida Pest Control & Landscaping`,
      description: serviceData.description,
      type: "website",
      siteName: "Florida Pest Control & Landscaping",
      images: [
        {
          url: serviceData.image,
          width: 1200,
          height: 630,
          alt: serviceData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} | Florida Pest Control & Landscaping`,
      description: serviceData.description,
      images: [serviceData.image],
    },
    alternates: {
      canonical: `https://www.floridapestcontrol.ae/services/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const serviceData = ServicesData.find(
    (service) => service.link.split("/").pop() === slug,
  );

  if (!serviceData) {
    notFound();
  }

  return <ServiceDetail slug={slug} />;
}
