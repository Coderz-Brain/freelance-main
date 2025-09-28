"use client";
import React from "react";
import PageLayout from "../layout/PageLayout";
import CaseStudyCard from "../ui/CaseStudyCard";
import Masonry from "react-masonry-css";

const CaseStudyPage = () => {
  const cards = [
    {
      title: "Simple and Powerful",
      description: (
        <>
          <p>
            From notebook to production, prototype, iterate, and deploy your
            application with ease.
          </p>
          <p>
            Getting started is as easy as <code>pip install ...</code>
          </p>
        </>
      ),
      href: "#",
      imageSrc: "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Install example",
    },
    {
      title: "Full featured",
      description: (
        <>
          <p>Everything you need for retrieval:</p>
          <ul className="list-disc ml-5">
            <li>Vector search</li>
            <li>Full-text search</li>
            <li>Metadata search</li>
            <li>SOC II Type I</li>
          </ul>
        </>
      ),
      href: "#",
      imageSrc: "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Layers example",
    },
    {
      title: "Free",
      description: <p>Open source under Apache 2.0</p>,
      href: "#",
      imageSrc: "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Open source",
    },
    {
      title: "Speaks your language",
      description: <p>Clients for JS, Python, Ruby, PHP, Java, and more.</p>,
      href: "#",
      imageSrc: "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Languages",
    },
    {
      title: "Integrated",
      description: (
        <>
          <p>Embedding models from HuggingFace, OpenAI, Google, and more.</p>
          <p>Integrated with LangChain, LlamaIndex, and more coming soon.</p>
        </>
      ),
      href: "#",
      imageSrc: "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Integration puzzle",
    },
    {
      title: "Integrated",
      description: (
        <>
          <p>Embedding models from HuggingFace, OpenAI, Google, and more.</p>
          <p>Integrated with LangChain, LlamaIndex, and more coming soon.</p>
        </>
      ),
      href: "#",
      imageSrc: "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Integration puzzle",
    }
  ];

  const breakpoints = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <PageLayout>
      <Masonry
        breakpointCols={breakpoints}
        className="flex w-auto gap-6 pt-10"
        columnClassName="space-y-6"
      >
        {cards.map((card, idx) => (
          <CaseStudyCard key={idx} {...card} />
        ))}
      </Masonry>
    </PageLayout>
  );
};

export default CaseStudyPage;
