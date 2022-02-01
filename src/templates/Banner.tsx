import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Глубокая прокачка навыков персонажа."
      subtitle="Стань лучником, воином или просто фермером. Выбирать тебе!"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>
              <>
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                Лаунчер
              </>
            </Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
