import gsap from "gsap";

import "../../main.scss";

import { useEffect, useMemo, useRef } from "react";

const HoverEffects = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null); // Change to HTMLDivElement
  const previewRef = useRef<HTMLDivElement | null>(null); // Change to HTMLDivElement
  const previewImgRef = useRef<HTMLDivElement | null>(null); // Change to HTMLDivElement

  let isInside = false;

  const bgImages = useMemo(
    () => ({
      p1: "https://i.pinimg.com/736x/35/32/57/3532575f431f2fc0670f12ed9e62e43d.jpg", // Note no '/src'
      p2: "https://i.pinimg.com/736x/fa/1e/cc/fa1ecc0eaf09bc028f4b5b57c9ba3a6a.jpg",
      p3: "https://i.pinimg.com/736x/53/eb/21/53eb216a33809c85135ff3f0f46074b4.jpg",
      p4: "https://i.pinimg.com/736x/66/46/d5/6646d542a47e9cb18fd11426d4b89b44.jpg",
      p5: "https://i.pinimg.com/736x/ea/87/78/ea8778bb4c73f9d87c12d18fe05d2d8c.jpg",
      p6: "https://i.pinimg.com/736x/99/3f/b5/993fb5dcd16e38347b0a4433c86af758.jpg",
    }),
    []
  );

  const bgPositions = useMemo(
    () => ({
      p1: "0 0",
      p2: "0 16%",
      p3: "0 32%",
      p4: "0 58%",
      p6: "0 74%",
      p5: "0 100%",
    }),
    []
  );

  const moveStuff = (e: MouseEvent) => {
    const projects = projectsRef.current;
    const preview = previewRef.current;

    if (!projects || !preview) return;

    const mouseInside = isMouseInsideContainer(e, projects);
    if (mouseInside !== isInside) {
      isInside = mouseInside;
      gsap.to(preview, {
        scale: isInside ? 1 : 0,
        duration: 0.3,
      });
    }
  };

  const moveProject = (e: MouseEvent) => {
    const preview = previewRef.current;
    if (!preview) return;

    const offsetX = preview.offsetWidth / 2;
    const offsetY = preview.offsetHeight / 2;

    preview.style.left = `${e.pageX - offsetX}px`;
    preview.style.top = `${e.pageY - offsetY}px`;
  };

  const moveProjectImg = (project: HTMLDivElement) => {
    const previewImg = previewImgRef.current;
    const projectId = project.id;
    if (!previewImg) return;

    const newImageUrl = bgImages[projectId as keyof typeof bgImages];
    if (newImageUrl) {
      previewImg.style.backgroundImage = `url(${newImageUrl})`;
    }

    gsap.to(previewImg, {
      duration: 0.4,
      backgroundPosition:
        bgPositions[projectId as keyof typeof bgPositions] || "0 0",
    });
  };

  const isMouseInsideContainer = (e: MouseEvent, projects: HTMLDivElement) => {
    const containerRect = projects.getBoundingClientRect();

    return (
      e.pageX >= containerRect.left &&
      e.pageX <= containerRect.right &&
      e.pageY >= containerRect.top &&
      e.pageY <= containerRect.bottom
    );
  };

  const handleMouseMove = (e: MouseEvent) => {
    moveStuff(e);
    const projects = projectsRef.current;
    if (projects && isInside) {
      const projectElements = Array.from(projects.children) as HTMLDivElement[];

      projectElements.forEach((project) => {
        const projectRect = project.getBoundingClientRect();

        if (
          e.pageX >= projectRect.left &&
          e.pageX <= projectRect.right &&
          e.pageY >= projectRect.top &&
          e.pageY <= projectRect.bottom
        ) {
          moveProject(e);
          moveProjectImg(project);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='hover-container'>
      <div className='hover-body'>
        <div className='img-body'>
          <div className='preview' ref={previewRef}>
            <div className='preview-img' ref={previewImgRef}></div>
          </div>

          <div className='container'>
            <div className='projects' ref={projectsRef}>
              {["p1", "p2", "p3", "p4", "p5", "p6"].map((id) => (
                <div className='project' id={id} key={id}>
                  <div className='client'>{/* <p>Project</p> */}</div>
                  <div className='location'>{/* <p>Location</p> */}</div>
                  <div className='service'>{/* <p>Category</p> */}</div>
                  <div className='year'>{/* <p>Year</p> */}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffects;
