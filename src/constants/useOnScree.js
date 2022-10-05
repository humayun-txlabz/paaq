import { useEffect, useState } from "react";
import* as IntersectionObserver from "intersection-observer";
export default function useOnScreen(ref) {
     const [isIntersecting, setIntersecting] = useState(false);

     const observer = new IntersectionObserver(([entry]) =>
          setIntersecting(entry.isIntersecting)
     );

     useEffect(() => {
          observer.observe(ref.current);
          // Remove the observer as soon as the component is unmounted
          return () => {
               observer.disconnect();
          };
     }, []);

     return isIntersecting;
}
