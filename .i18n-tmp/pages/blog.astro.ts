/* generated from src/pages/blog.astro */

import { getCollection, type CollectionEntry } from "astro:content";
import Section from "../components/Section.astro";
import Layout from "../layouts/Layout.astro";
import HorizontalSeparator from "../components/HorizontalSeparator.astro";
import BlogCard from "../components/BlogCard.astro";

const posts: CollectionEntry<"blog">[] = await getCollection("blog");

const heading = "Blog";


