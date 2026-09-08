import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SeoLandingPage } from '../../seo-landing';
import { categoryLandings, landingBySlug } from '../../seo-data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return categoryLandings.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const landing = landingBySlug(categoryLandings, (await params).slug);
  if (!landing) return { title: 'カテゴリが見つかりません' };
  return { title: `${landing.name}の犬YouTube・人気動画`, description: landing.description, alternates: { canonical: `/categories/${landing.slug}` }, openGraph: { title: `${landing.name}の犬動画まとめ`, description: landing.description, url: `/categories/${landing.slug}` } };
}

export default async function CategoryPage({ params }: Props) {
  const landing = landingBySlug(categoryLandings, (await params).slug);
  if (!landing) notFound();
  return <SeoLandingPage landing={landing} kind="category" />;
}
