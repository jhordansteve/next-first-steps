import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Seo Description' + (new Date().toString()),
 description: 'Seo Description',
  keywords: ['About Page', 'Jhordan', 'informacion', '...']
};


export default function AboutPage(){
  return(
    <span className="text-7xl">About Page</span>
  )
}