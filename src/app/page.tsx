import React from "react";
import { PageHeader } from "@/components/common";
import HomePage from "./(public)/home/page";
// import Script from "next/script";

const page: React.FunctionComponent = () => {
  return (
    <>
      <PageHeader title="home page" description="home page" />
      {/* <Script src="https://widget.intercom.io/widget/mbfvxy1b" />
      <Script id="intercom">
        {`
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "mbfvxy1b"
            };
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/kvkz79zz';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `}
      </Script> */}
      <HomePage />
    </>
  );
};

export default page;
