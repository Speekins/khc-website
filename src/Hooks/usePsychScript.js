import { useEffect } from 'react';

const usePsychScript = url => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.type="text/javascript"
    script.src="https://member.psychologytoday.com/verified-seal.js" 
    script.setAttribute('data-badge', '17')
    script.setAttribute('data-id', '816221')
    script.setAttribute('data-code', 'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s=')

    head.appendChild(script)
    //document.body.appendChild(script);

    return () => {
      head.removeChild(script);
      //document.body.removeChild(script);
    }
  }, [url]);
};

export default usePsychScript;