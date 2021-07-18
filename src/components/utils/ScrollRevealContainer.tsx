import { useRef, useEffect } from "react"
import scrollReveal from "scrollreveal"

interface ScrollRevealContainerProps {
  animate: boolean
  delay?: number
  origin?: string
}

const ScrollRevealContainer: React.FC<ScrollRevealContainerProps> = ({
  children,
  animate,
  delay,
  origin
}) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: delay,
        duration: 500,
        opacity: 0,
        origin:
          origin === "left"
            ? "left"
            : origin === "right"
            ? "right"
            : origin === "top"
            ? "top"
            : "bottom",
        distance: "40px"
      })
  }, [sectionRef])

  return animate ? <section ref={sectionRef}>{children}</section> : <section>{children}</section>
}

export default ScrollRevealContainer
