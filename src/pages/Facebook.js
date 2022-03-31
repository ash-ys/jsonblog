import React from 'react'
import "../pages/Facebook.css"

const Feed = React.memo((props) => {
  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <React.Fragment>
    <div className='fb-component'>
      <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0" nonce="G1RZmTpz"></script>

<div class="fb-post" data-href="https://www.facebook.com/officialroutineofnepalbanda/photos/a.687947587904704/6021881771177899/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/officialroutineofnepalbanda/photos/a.687947587904704/6021881771177899/?type=3" class="fb-xfbml-parse-ignore"><p>Good morning Nepal from Tukuche area, Mustang ❤️🙏

Pic. Bishal Humagain</p>Posted by <a href="https://www.facebook.com/officialroutineofnepalbanda/">Routine of Nepal banda</a> on&nbsp;<a href="https://www.facebook.com/officialroutineofnepalbanda/photos/a.687947587904704/6021881771177899/?type=3">Monday, March 28, 2022</a></blockquote></div>
</div>
    </React.Fragment>
  );
});

export default Feed;