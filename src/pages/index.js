import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadline}>最好的，真正的</div>
          <Heading as="h1" className={styles.heroTitle}>
            <span>2B2T.BEST服务器</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            致力于打造最好的无规则服务器！无规则MC的终极答案，性能与混沌的完美平衡！
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button', styles.primaryButton)}
              href="https://bbs.2b2t.best/">
              论坛 🚀
            </Link>
            <Link
              className={clsx('button', styles.primaryButton)}
              to="/docs/intro">
              文档 🚀
            </Link>
          </div>
        </div>
        
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageContainer}>
            <img 
              src="https://bbs.2b2t.best/data/assets/favicon/2B2T-BEST-FAVICON.png"
              alt="2B2T.BEST服务器" 
              className={styles.heroImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomeFooterCTA() {
  return (
    <section className={styles.footerCta}>
      <div className="container">
        <Heading as="h2" className={styles.footerCtaTitle}>
          准备好开始你的 <span className={styles.textHighlight}>Minecraft</span> 服务器旅程了吗？
        </Heading>
        <p className={styles.footerCtaSubtitle}>
          我们提供从零开始的详细教程，帮助你轻松搭建和管理自己的服务器。无论你是新手还是有经验的玩家，这里都有适合你的内容。
        </p>
        <div>
          <Link
            className={clsx('button button--primary button--lg')}
            to="/">
            立即开始
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.customFields.titlePrefix || siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName="homepage">
      <HomepageHeader />
      <main className={styles.homeMain}>
        <HomepageFeatures />
        <HomeFooterCTA />
      </main>
    </Layout>
  );
}
