import AnatomyStudioReleasePreview from '@/components/research/anatomy-release-preview/AnatomyStudioReleasePreview';
import {anatomyStudioReleasePreview as article} from '@/data/anatomyStudioReleasePreview.mjs';
export const metadata={title:article.title+' | NaS Research',description:article.metaDescription,robots:{index:false,follow:false,googleBot:{index:false,follow:false}}};
export default function Page(){return <AnatomyStudioReleasePreview/>;}
