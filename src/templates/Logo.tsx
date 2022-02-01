import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-300 inline-flex items-center ${fontStyle}`}>
      <img width={size} height={size} src="/favicon.png" alt="" style={{ marginRight: 15 }}/>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
