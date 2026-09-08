import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SeoLandingPage } from '../../seo-landing';
import { breedLandings, landingBySlug } from '../../seo-data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return breedLandings.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const landing = landingBySlug(breedLandings, (await params).slug);
  if (!landing) return { title: '犬種が見つかりません' };
  return { title: `${landing.name}の人気動画・SNSクリエイター`, description: landing.description, alternates: { canonical: `/dog-breeds/${landing.slug}` }, openGraph: { title: `${landing.name}の人気動画・SNSまとめ`, description: landing.description, url: `/dog-breeds/${landing.slug}` } };
}

export default async function BreedPage({ params }: Props) {
  const landing = landingBySlug(breedLandings, (await params).slug);
  if (!landing) notFound();
  return <SeoLandingPage landing={landing} kind="breed" />;
}
