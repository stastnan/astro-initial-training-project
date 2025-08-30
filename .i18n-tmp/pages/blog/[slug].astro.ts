/* generated from src/pages/blog/[slug].astro */

import { getCollection, type CollectionEntry } from "astro:content";
import Layout from "../../layouts/Layout.astro";
import Section from "../../components/Section.astro";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

interface Props {
  post: CollectionEntry<"blog">;
}

const { post }: Props = Astro.props;


