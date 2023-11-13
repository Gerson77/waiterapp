import { SvgXml } from 'react-native-svg';

interface HomeProps {
  color?: string;
}

export function Home({ color }: HomeProps) {
  const markup = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5284 8.48621L13.7684 4.00589C12.7287 3.19661 11.2724 3.19661 10.2318 4.00589L4.47179 8.48621C3.77003 9.03245 3.36011 9.87149 3.36011 10.7595V17.7992C3.36011 19.3899 4.64939 20.6792 6.24011 20.6792H17.7601C19.3508 20.6792 20.6401 19.3899 20.6401 17.7992V10.7595C20.6401 9.87149 20.2302 9.03245 19.5284 8.48621Z" stroke="${color || '#fff'}" stroke-width="2"/>
</svg>`;

  return <SvgXml xml={markup} />;
}
