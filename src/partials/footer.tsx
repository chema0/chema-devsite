import { FooterCopyright, Section } from '@/components';

import { AppConfig } from '@/utils/app-config';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
