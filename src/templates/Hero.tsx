import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background >
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/*<li>*/}
        {/*  <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">*/}
        {/*    <a>GitHub</a>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href="/">*/}
        {/*    <a>Sign in</a>*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Средневековый мир приключений!'}
          </>
        }
        description="Сможешь выжить и стать Kоролем?"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>
                <>
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                  </svg>
                  Скачать лаунчер
                </>
              </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
