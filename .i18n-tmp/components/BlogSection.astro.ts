/* generated from src/components/BlogSection.astro */

import { getCollection, type CollectionEntry } from 'astro:content';
import SectionHeader from './SectionHeader.astro';
import Section from './Section.astro';
import HorizontalSeparator from './HorizontalSeparator.astro';
import BlogCard from './BlogCard.astro';

const heading = 'Blog';
const cta = {text: 'View blog', href:"/blog"};

const posts: CollectionEntry<"blog">[] = await getCollection("blog");


