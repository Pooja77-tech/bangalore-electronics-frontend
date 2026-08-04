import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  TextLink,
  fadeUp,
} from "../../components/ui/PremiumLayout";

import biometricsVid from "/videos/offerings/biometrics.mp4";
import componentsVid from "/videos/offerings/electronic-components.mp4";
import itInfraVid from "/videos/offerings/it-infrastructure.mp4";
import surveillanceVid from "/videos/offerings/video-surveillance.mp4";
import networkSecurityVid from "/videos/offerings/Network Security.mp4";
import enterpriseVid from "/videos/offerings/Enterprise .mp4";
import activeNetworkVid from "/videos/offerings/active-network.mp4";
import psimVid from "/videos/offerings/PSIM & Video Management System.mp4";
import videoAnalyticsVid from "/videos/offerings/Video Analytics.mp4";
import benefitsVid from "/videos/offerings/benefits.mp4";
import useCasesVid from "/videos/offerings/use-cases.mp4";

function LazyOfferingVideo({ src, title }) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const loadVideo = () => setShouldLoad(true);
        const timer = window.setTimeout(loadVideo, 250);
        observer.disconnect();

        container.dataset.loadTimer = String(timer);
      },
      { rootMargin: "120px 0px", threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      const timer = Number(container.dataset.loadTimer);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="offering-video-shell relative h-52 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,#d9d1e3,#eee9f3)] text-[var(--slack-purple)]">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="spatial-icon-button flex h-12 w-12 items-center justify-center rounded-full">
            <Play className="h-5 w-5 translate-x-px" fill="currentColor" />
          </span>
          <span className="px-5 text-xs font-semibold text-[var(--color-muted)]">
            {title}
          </span>
        </div>
      </div>

      {shouldLoad ? (
        <video
          src={src}
          className={`premium-media relative h-full w-full object-cover transition-opacity duration-500 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onCanPlay={() => setIsReady(true)}
        />
      ) : null}
    </div>
  );
}

export default function Offerings() {
  const offeringsData = [
    { title: "Biometrics & Access Control", link: "/offerings/biometrics-access", video: biometricsVid, desc: "Advanced identity verification and secure access control systems." },
    { title: "Enterprise Management System", link: "/offerings/electronic-components", video: componentsVid, desc: "Centralized operations, monitoring, reporting, and workflow management." },
    { title: "IT Infrastructure Solutions", link: "/offerings/it-infrastructure", video: itInfraVid, desc: "End-to-end infrastructure design, deployment, and maintenance." },
    { title: "Video Surveillance Systems", link: "/offerings/video-surveillance", video: surveillanceVid, desc: "Robust CCTV and video monitoring systems tailored for critical environments." },
    { title: "Network Security", link: "/offerings/network-security", video: networkSecurityVid, desc: "Security architecture that protects enterprise networks and hybrid environments." },
    { title: "Electronic Components", link: "/offerings/enterprise-management-system", video: enterpriseVid, desc: "Genuine components and procurement support from trusted manufacturers." },
    { title: "Active and Passive Networking", link: "/offerings/active-network", video: activeNetworkVid, desc: "Scalable connectivity layers for enterprise and industrial ecosystems." },
    { title: "PSIM & Video Management System", link: "/offerings/psim-video-management-system", video: psimVid, desc: "Unified command-and-control platforms for security operations." },
    { title: "Video Analytics", link: "/offerings/video-analytics", video: videoAnalyticsVid, desc: "AI-powered analytics for intelligent video-based insight." },
    { title: "Key Benefits Overview", link: "/offerings/benefits", video: benefitsVid, desc: "A concise view of the long-term value and ROI of our solutions." },
    { title: "Industry Use Cases", link: "/offerings/use-cases", video: useCasesVid, desc: "Practical deployments across high-control operational environments." },
  ];

  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Offerings"
          title="Modular systems for secure operations."
          description="A focused portfolio of security, networking, IT infrastructure, analytics, and electronics capabilities designed to work as one dependable operating layer."
          align="center"
        />

        <motion.div
          {...fadeUp}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {offeringsData.map((offering) => (
            <SurfaceCard
              key={offering.title}
              className="group flex min-h-[430px] flex-col overflow-hidden p-0"
            >
              <LazyOfferingVideo
                src={offering.video}
                title={offering.title}
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold leading-tight text-[var(--color-text)]">
                  {offering.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                  {offering.desc}
                </p>
                <TextLink to={offering.link} className="mt-7">
                  Learn more
                </TextLink>
              </div>
            </SurfaceCard>
          ))}
        </motion.div>
      </Container>
    </PageShell>
  );
}
