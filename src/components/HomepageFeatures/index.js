import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单游玩',
    Svg: require('@site/static/img/grass.svg').default,
    description: '详细的游玩指南，玩服务器不再一头雾水。',
  },
  {
    title: '高度自由',
    Svg: require('@site/static/img/crafting-table.svg').default,
    description: '允许各种作弊开挂，复刻多种刷物漏洞，保留多种经典MC特性。',
  },
  {
    title: '服务保障',
    Svg: require('@site/static/img/furnace.svg').default,
    description: '极快的问题解决速度，友好的建议采纳。运营团队经验丰富，历史悠久。',
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            为什么选择 <span className="text--primary">2B2T.BEST</span>
          </Heading>
          <p className={styles.sectionSubtitle}>
            我们致力于打造最好的无规则服务器！无规则MC的终极答案，性能与混沌的完美平衡！
          </p>
        </div>
        
        <div className={styles.featuresInner}>
          <div className={styles.gridContainer}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
