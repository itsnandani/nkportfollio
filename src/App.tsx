import { useEffect } from 'react';
import portfolioMarkup from '../WD_Week2_NandaniKumari/index.html?raw';
import portfolioScript from '../WD_Week2_NandaniKumari/script.js?raw';
import monogramUrl from '../WD_Week2_NandaniKumari/nk-monogram.svg';

const portfolioDocument = new DOMParser().parseFromString(portfolioMarkup, 'text/html');
portfolioDocument.querySelectorAll('script').forEach((script) => script.remove());
portfolioDocument.querySelectorAll('img[src="nk-monogram.svg"]').forEach((image) => {
  image.setAttribute('src', monogramUrl);
});
const portfolioContent = portfolioDocument.body.innerHTML;

function App() {
  useEffect(() => {
    if (!document.querySelector('link[rel="icon"]')) {
      const icon = document.createElement('link');
      icon.rel = 'icon';
      icon.type = 'image/svg+xml';
      icon.href = monogramUrl;
      document.head.append(icon);
    }

    if (!document.getElementById('portfolio-interactions')) {
      const script = document.createElement('script');
      script.id = 'portfolio-interactions';
      script.textContent = portfolioScript;
      document.body.append(script);
    }
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: portfolioContent }} />
  );
}

export default App;
