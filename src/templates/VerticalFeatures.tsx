import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Достоен ли ты носить корону?"
    description="В суровом средневековом мире тебе придется потрудиться, чтобы стать сильнейшим"
  >
    <VerticalFeatureRow
      title="Уникальный сервер"
      description="Выбери свой путь - воина, добытчика, колдуна и многих других классов. В этом голодном мире для выживания нужны все!"
      image="/dragon.png"
      imageAlt="First feature alt text"
    />
    {/*<VerticalFeatureRow*/}
    {/*  title="Your title here"*/}
    {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."*/}
    {/*  image="/assets/images/feature2.svg"*/}
    {/*  imageAlt="Second feature alt text"*/}
    {/*  reverse*/}
    {/*/>*/}
    {/*<VerticalFeatureRow*/}
    {/*  title="Your title here"*/}
    {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."*/}
    {/*  image="/assets/images/feature3.svg"*/}
    {/*  imageAlt="Third feature alt text"*/}
    {/*/>*/}
  </Section>
);

export { VerticalFeatures };
