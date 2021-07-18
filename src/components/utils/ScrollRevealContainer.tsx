import { useRef, useEffect } from "react"
import scrollReveal from "scrollreveal"

interface ScrollRevealContainerProps {
  delay?: number
  origin?: string
}

const ScrollRevealContainer: React.FC<ScrollRevealContainerProps> = ({
  children,
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

  return <section ref={sectionRef}>{children}</section>
}

export default ScrollRevealContainer
