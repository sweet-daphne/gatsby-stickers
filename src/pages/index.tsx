import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers 🚛">
      <StaticImage
        height={200}
        src="https://images.unsplash.com/photo-1540651810471-5699df74834f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        alt="Stickers on the wall"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
