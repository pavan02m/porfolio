'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover-2.jpg';
import JavaScriptIcon from '@/assets/icons/js.svg';
import HTMLIcon from '@/assets/icons/html-5.svg';
import CSSIcon from '@/assets/icons/css.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import NodeIcon from '@/assets/icons/node.svg';
import MongoIcon from '@/assets/icons/mongo.svg';
import JavaIcon from '@/assets/icons/java.svg';
import SQLIcon from '@/assets/icons/sql.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import KubIcon from '@/assets/icons/kubernetes.svg';
import CIcon from '@/assets/icons/c++.svg';
import mapImage from '@/assets/images/map.png';
import Image from "next/image";
import smileEmoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion"; 
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'C++',
    iconType: CIcon
  },
  {
    title: 'Javascript',
    iconType: JavaScriptIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS',
    iconType: CSSIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
  {
    title: 'React.JS',
    iconType: ReactIcon
  },
  {
    title: 'Node.JS',
    iconType: NodeIcon
  },
  {
    title: 'MongoDB',
    iconType: MongoIcon
  },
  {
    title: 'SQL',
    iconType: SQLIcon
  },
  // {
  //   title: 'C++',
  //   iconType: ''
  // },
  {
    title: 'Java',
    iconType: JavaIcon
  },
  {
    title: 'Docker',
    iconType: DockerIcon
  },
  {
    title: 'Kubernetes',
    iconType: KubIcon
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '55%',
    top: '75%'
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '55%',
    top: '45%'
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '5%',
    top: '65%'
  },
]
export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20" id="about">
      <div className="container">
        <SectionHeader title="A Glimpse Into My World" eyebrow="About Me" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, error?" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader className="px-6 pt-6" title="My Reads" description="Explore the books shaping my perspective" />
              <div className="w-40 mx-auto mt-2 md:mt-0 h-100">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3">
              <CardHeader className="px-6 pt-6" title="My Toolbox" description="Explore the technologies ans tools I use to create my Projects" />
              <ToolboxItems className="" toolboxItems={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]" toolboxItems={toolboxItems} />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader className="px-6 pt-6" title="Beyond the Code" description="Explore the Intrests and Hobbies" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" drag dragConstraints={constraintRef} style={{
                    left: hobby.left,
                    top: hobby.top
                  }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  after:content-[''] after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animate-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileEmoji} className="size-20" alt="smile" />
                
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};
